"use client";
import React, { useEffect, useState } from 'react';
import { Layout, Table, Switch, Button, Select } from 'antd';
import { BarChartOutlined, TableOutlined } from '@ant-design/icons';
import moment from 'moment';
import './pivot.css'
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import * as XLSX from 'xlsx';
import Loader from '../Components/Loader'
import ChartDataLabels from "chartjs-plugin-datalabels";


Chart.register(...registerables, ChartDataLabels);

import HeaderBanas from '../Components/HeaderBanas';

const { Header, Content } = Layout;
const { Option } = Select;

const Page = () => {
    const getCurrentMonthName = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentDate = new Date();
        const previousMonthIndex = (currentDate.getMonth() - 1 + 12) % 12; // Taking care of wrapping around to previous year
        return months[previousMonthIndex];
    };
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedYear, setSelectedYear] = useState('2023-24');
    const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthName());
    const [selectedStores, setSelectedStores] = useState([]);
    const [selectedStoreType, setSelectedStoreType] = useState('ALL');
    const [tableView, setTableView] = useState(true);


    useEffect(() => {
        fetchData();
    }, []);
    const handleExportToExcel = () => {
        const pivotedData = getPivotedData();
        const worksheet = XLSX.utils.json_to_sheet(pivotedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Data');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'sales_data.xlsx');
    };


    const options = {
        plugins: {
            datalabels: {
                display: true,
                color: "black",
                formatter: (value) => `${(value / 100000).toFixed(2)}`, // Format values in lakhs
                anchor: "end",
                offset: -20,
                align: "start"
            }
        },
        legend: {
            display: false
        },

    };

    const renderYearOptions = () => {
        return (
            salesData &&
            Array.from(new Set(salesData.map((item) => item.Yr)))
                .sort((a, b) => parseInt(b) - parseInt(a))
                .map((year) => (
                    <Option key={year} value={year}>
                        {year}
                    </Option>
                ))
        );
    };
    const renderMonthOptions = () => {
        return (
            salesData &&
            Array.from(new Set(salesData.map((item) => item.MonthName)))
                .sort((a, b) => parseInt(b) - parseInt(a))
                .map((year) => (
                    <Option key={year} value={year}>
                        {year}
                    </Option>
                ))
        );
    };


    const fetchData = async () => {
        setLoading(true);
        try {
            let url = '/api/getData';
            const response = await axios.get(url);
            const sortedData = response.data.data2.sort((a, b) => a.Particular.charCodeAt(0) - b.Particular.charCodeAt(0));
            const formattedData = sortedData.map(item => ({
                ...item,
                FromDt: moment(item.FromDt).format('YYYY-MM-DD'),
                ToDt: moment(item.ToDt).format('YYYY-MM-DD'),
            }));
            setSalesData(formattedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getPivotedData()
    }, [selectedYear, selectedMonth, selectedStoreType])

    const getPivotedData = () => {
        let filteredData = selectedStores.length > 0
            ? salesData.filter(item => selectedStores.includes(item.StoreName))
            : salesData;

        console.log("FILTERED BEFOREE", filteredData.length, selectedStoreType)

        filteredData = selectedStoreType == 'ALL' ? filteredData : filteredData.filter((item) => item.StoreType == selectedStoreType);
        console.log("FILTERED 2", filteredData.length)

        filteredData = selectedYear == 'ALL' ? filteredData : filteredData.filter((item) => item.Yr == selectedYear);
        console.log("FILTERED 3", filteredData.length)
        filteredData = selectedMonth == 'ALL' ? filteredData : filteredData.filter((item) => item.MonthName == selectedMonth);

        console.log("FILTERED 4", filteredData.length)

        let pivotedData = {};

        filteredData.forEach(item => {
            const storeName = item.StoreName;
            const particular = item.Particular;
            const balance = typeof item.Balance === 'number' ? item.Balance : 0;
            console.log("FILTERED ENDD", selectedStoreType)
            if (!pivotedData[particular]) {
                pivotedData[particular] = {};
            }
            pivotedData[particular][storeName] = balance;

        });
        console.log("FILTERED 5", filteredData, pivotedData)

        // Calculate totals for each column
        const columnTotals = {};
        Object.entries(pivotedData).forEach(([parentKey, balances]) => {
            if (parentKey == '5. Gross Profit') return;
            Object.entries(balances).forEach(([storeName, balance]) => {
                console.log("NEXT Child Key:", storeName, "Balance:", balance);
                columnTotals[storeName] = (columnTotals[storeName] || 0) + balance;
            });
        });

        console.log("FILTERED 6.1", pivotedData)
        // Add a row for total
        pivotedData['Net Profit'] = columnTotals;
        console.log("FILTERED 6.2", pivotedData)



        let netPercent = {}
        let grossPercent = {}
        if (pivotedData['1. Sales Accounts'])
            for (const [key, value] of Object.entries(pivotedData['1. Sales Accounts'])) {
                const percent = (pivotedData['Net Profit'][key] / value) * 100.0;
                netPercent[key] = `${percent.toFixed(2)}%`
            }

        if (pivotedData['5. Gross Profit'])
            for (const [key, value] of Object.entries(pivotedData['5. Gross Profit'])) {
                const percent = (value / pivotedData['1. Sales Accounts'][key]) * 100.0;
                console.log("SALES", value, pivotedData['1. Sales Accounts'][key], percent.toFixed(2))

                grossPercent[key] = `${percent.toFixed(2)}%`
            }


        pivotedData['Net Profit (%)'] = netPercent;
        pivotedData['5.2 Gross Profit (%)'] = grossPercent;

        if ('5.2 Gross Profit (%)' in pivotedData) {
            const grossProfitIndex = Object.keys(pivotedData).indexOf('5. Gross Profit');
            if (grossProfitIndex !== -1) {
                let keys = Object.keys(pivotedData);
                keys.splice(grossProfitIndex + 1, 0, '5.2 Gross Profit (%)');
                let pivotedDataCopy = {};

                keys.forEach(key => {
                    pivotedDataCopy[key] = pivotedData[key];
                });

                pivotedData = pivotedDataCopy;
            }
        }
        console.log("FILTERED 6", pivotedData)
        console.log("FILTERED RETURN", Object.entries(pivotedData).map(([particular, balances]) => ({
            Particular: particular,
            ...balances,
        })))


        const data = Object.entries(pivotedData).map(([particular, balances]) => ({
            Particular: particular,
            ...balances,
        }));
        console.log("FINALDATA", data)
        return data;
    };



    const highlightRow = (record) => {
        if (record.Particular === 'Net Profit' || record.Particular === '5. Gross Profit' || record.Particular === '5.2 Gross Profit (%)' || record.Particular === 'Net Profit (%)') {
            return 'highlighted-row';
        }
        return '';
    };

    
    function formatIndianNumber(number) {
        const formatter = new Intl.NumberFormat('en-IN');
        return formatter.format(number);
    }

    const getPivotedColumns = () => {
        const storeNamesToShow = selectedStores.length > 0 ? selectedStores : salesData.filter((item) => selectedStoreType == 'ALL' || selectedStoreType == item.StoreType).map(item => item.StoreName);
        const uniqueStoreNames = Array.from(new Set(storeNamesToShow));

        const columns = [
            {
                title: 'Particular',
                dataIndex: 'Particular',
                align: 'left',
                key: 'Particular',
                render: (text, record) => {
                    console.log("MAP", record);
                    const isTotal = record.Particular === 'Net Profit' || record.Particular == '5. Gross Profit';
                    const style = isTotal ? { fontWeight: 'bold' } : {};
                    return <span style={{ whiteSpace: 'nowrap', ...style }}>{text}</span>;
                },
            },
            ...uniqueStoreNames.map(storeName => ({
                title: storeName,
                dataIndex: storeName,
                align: 'right',
                key: storeName,
                render: (text, record) => {
                    const isTotal = record.Particular === 'Net Profit' || record.Particular == '5. Gross Profit';
                    const color = isTotal ? (parseInt(text) >= 0 ? 'green' : 'red') : '';
                    const value = isNaN(parseInt(text)) ? 0 : !(text + "").includes('%') ? parseInt(text) : text;
                    const style = isTotal ? { fontWeight: 'bold' } : {};
                    return <span style={{ color, ...style }}>{value}</span>;
                },
            })),
        ];

        return columns;
    };

    const handleStoreSelectChange = (selectedStores) => {
        setSelectedStores(selectedStores);
    };

    const handleStoreTypeSelectChange = (selectedType) => {
        setSelectedStoreType(selectedType);
    };

    const getBarChartData = () => {
        const filteredData = selectedStores.length > 0 ? salesData.filter(item => selectedStores.includes(item.StoreName) && (!selectedStoreType || item.StoreType === selectedStoreType)) : salesData;
        const totalBalances = getPivotedData(filteredData).find(item => item.Particular === 'Net Profit');
        const storeNames = Object.keys(totalBalances).filter(key => key !== 'Particular');
        const balances = storeNames.map(storeName => totalBalances[storeName]);

        return {
            labels: storeNames,
            datasets: [
                {
                    label: 'Total Balances',
                    backgroundColor: '#99f587',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                    hoverBorderColor: 'rgba(75,192,192,1)',
                    data: balances,
                },
            ],
        };
    };

    const toggleView = () => {
        setTableView(!tableView);
    };
    const handleYearChange = (value) => {
        setSelectedYear(value);
    };
    const handleMonthChange = (value) => {
        setSelectedMonth(value)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderBanas />
            {loading ? <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Loader size='large' /></div> : <Content style={{ padding: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <Select
                            style={{ width: '200px', marginRight: '10px' }}
                            onChange={handleYearChange}
                            value={selectedYear || undefined}
                        >
                            <Option value={'ALL'}>All Financial Years</Option>
                            {renderYearOptions()}
                        </Select>
                        <Select
                            style={{ width: '200px', marginRight: '10px' }}
                            onChange={handleMonthChange}
                            value={selectedMonth || undefined}
                        >
                            <Option value={'ALL'}>All Month</Option>
                            {renderMonthOptions()}
                        </Select>

                        <Select
                            style={{ width: '200px', marginRight: '8px' }}
                            placeholder="Select store type"
                            onChange={handleStoreTypeSelectChange}
                            value={selectedStoreType}
                            defaultValue={'ALL'}
                        >
                            <Option value={'ALL'}>All Store Types</Option>
                            <Option value="DCS">DCS</Option>
                            <Option value="Franchise">Franchise</Option>
                        </Select>
                        <Select
                            mode="multiple"
                            style={{ width: '200px', marginRight: '8px' }}
                            placeholder="Select stores"
                            onChange={handleStoreSelectChange}
                            value={selectedStores}
                        >
                            {[...new Set(salesData?.filter((item) => selectedStoreType == 'ALL' || selectedStoreType === item.StoreType).map(item => item.StoreName))].map(storeName => (
                                <Option key={storeName} value={storeName}>
                                    {storeName}
                                </Option>
                            ))}
                        </Select>

                    </div>
                    <div>
                        <Button
                            icon={<TableOutlined />}
                            onClick={() => setTableView(true)}
                            style={{ background: tableView ? '#83ed7e' : 'white' }}
                        >
                            Table
                        </Button>
                        <Button
                            icon={<BarChartOutlined />}
                            onClick={() => setTableView(false)}
                            style={{ marginLeft: '8px', marginRight: '10px', backgroundColor: !tableView ? '#83ed7e' : 'white' }}
                        >
                            Bar Chart
                        </Button>
                    </div>
                </div>
                <h2>Store Wise P&L</h2>
                {tableView ? (
                    <>
                        <Table dataSource={getPivotedData()} rowClassName={highlightRow} columns={getPivotedColumns()} bordered scroll={{ x: true }} />
                        <Button onClick={handleExportToExcel} style={{ marginTop: '15px', backgroundColor: '#83ed7e', color: "black", marginTop: '15px' }} type="primary">
                            Export to Excel
                        </Button>
                    </>
                ) : (
                    <Bar data={getBarChartData()} options={options} />
                )}
            </Content>
            }
        </Layout>
    );
};

export default Page;