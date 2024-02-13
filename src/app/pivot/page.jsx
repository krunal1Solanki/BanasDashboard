"use client";
import React, { useEffect, useState } from 'react';
import { Layout, Table, Switch, Button, Select } from 'antd';
import { BarChartOutlined, TableOutlined } from '@ant-design/icons';
import moment from 'moment';
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
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedStores, setSelectedStores] = useState([]);
    const [selectedStoreType, setSelectedStoreType] = useState('');
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

    const getPivotedData = () => {
        const filteredData = selectedStores.length > 0
            ? salesData.filter(item => selectedStores.includes(item.StoreName) && (!selectedStoreType || item.StoreType === selectedStoreType))
            : salesData;

        const pivotedData = {};
        const columnTotals = {};

        filteredData.forEach(item => {
            const storeName = item.StoreName;
            const particular = item.Particular;
            const balance = typeof item.Balance === 'number' ? item.Balance : 0;

            // Check if the store type matches the selected store type
            if (!selectedStoreType || item.StoreType === selectedStoreType) {
                if (!pivotedData[particular]) {
                    pivotedData[particular] = {};
                }

                pivotedData[particular][storeName] = balance;

                if (!columnTotals[storeName]) {
                    columnTotals[storeName] = 0;
                }

                columnTotals[storeName] += balance;
            }
        });

        const onj = Object.entries(pivotedData).map(([particular, balances]) => ({
            Particular: particular,
            ...balances,
        })).concat({
            Particular: 'Total',
            ...columnTotals,
        });

        // console.log("MAP", onj)
        // const storeArr = onj[0];
        // const totalArr = onj[onj.length - 1]
        // const map = new Map()
        // for(const key in  storeArr) {
        //     if(key != "Particular")
        //         map.set(key, storeArr[key]);
        // }

        // const percentages = {}
        // for(const key in totalArr) {
        //     if(key!= 'Total') {
        //         console.log("MAP", key, totalArr[key], map.get(key))
        //         percentages[key] = "("+parseFloat((totalArr[key]/map.get(key)) * 100).toFixed(2)+"%)";
        //     }
        // }
        // const copy = onj[0];
        // for(const key in copy) {
        //     copy[key] = copy[key] + percentages[key];
        // }
        // console.log("MAP COPY", copy)
        // onj[0] = copy;
        // console.log("MAP", map, percentages, "REAL", onj)
        return onj;
    };

    function formatIndianNumber(number) {
        const formatter = new Intl.NumberFormat('en-IN');
        return formatter.format(number);
    }

    const getPivotedColumns = () => {
        const storeNamesToShow = selectedStores.length > 0 ? selectedStores : salesData.filter((item) => selectedStoreType.length == 0 || selectedStoreType == item.StoreType).map(item => item.StoreName);
        const uniqueStoreNames = Array.from(new Set(storeNamesToShow));

        const columns = [
            {
                title: 'Particular',
                dataIndex: 'Particular',
                align: 'left',
                key: 'Particular',
                render: (text, record) => {
                    console.log("MAP", record);
                    const isTotal = record.Particular === 'Total';
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
                    const isTotal = record.Particular === 'Total';
                    const color = isTotal ? (parseInt(text) >= 0 ? 'green' : 'red') : '';
                    const value = isNaN(parseInt(text)) ? 0 : parseInt(text);
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
        const totalBalances = getPivotedData(filteredData).find(item => item.Particular === 'Total');
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

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderBanas />
            {loading ? <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Loader size='large' /></div> : <Content style={{ padding: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <span style={{ marginLeft: '8px', marginRight: '8px' }}>Select Store Type:</span>
                        <Select
                            style={{ width: '200px', marginRight: '8px' }}
                            placeholder="Select store type"
                            onChange={handleStoreTypeSelectChange}
                            value={selectedStoreType}
                        >
                            <Option value={''}>All Store Types</Option>
                            <Option value="DCS">DCS</Option>
                            <Option value="Franchise">Franchise</Option>
                        </Select>
                        <span style={{ marginLeft: '8px', marginRight: '8px' }}>Select Stores:</span>
                        <Select
                            mode="multiple"
                            style={{ width: '200px', marginRight: '8px' }}
                            placeholder="Select stores"
                            onChange={handleStoreSelectChange}
                            value={selectedStores}
                        >
                            {[...new Set(salesData?.filter((item) => selectedStoreType.length === 0 || selectedStoreType === item.StoreType).map(item => item.StoreName))].map(storeName => (
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
                        <Table dataSource={getPivotedData()} columns={getPivotedColumns()} bordered scroll={{ x: true }} />
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
