"use client";
import React, { useEffect, useState } from 'react';
import { Layout, Table, Switch, Button, Select } from 'antd';
import { BarChartOutlined, TableOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
Chart.register(...registerables);

import HeaderBanas from '../Components/HeaderBanas';

const { Header, Content } = Layout;
const { Option } = Select;

const Page = () => {
    const [salesData, setSalesData] = useState([]);
    const [selectedStores, setSelectedStores] = useState([]);
    const [selectedStoreType, setSelectedStoreType] = useState('');
    const [tableView, setTableView] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
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

        return Object.entries(pivotedData).map(([particular, balances]) => ({
            Particular: particular,
            ...balances,
        })).concat({
            Particular: 'Total',
            ...columnTotals,
        });
    };


    const getPivotedColumns = () => {
        const storeNamesToShow = selectedStores.length > 0 ? selectedStores : salesData.filter((item) => selectedStoreType.length == 0 || selectedStoreType == item.StoreType).map(item => item.StoreName);
        const uniqueStoreNames = Array.from(new Set(storeNamesToShow));

        const columns = [
            {
                title: 'Particular',
                dataIndex: 'Particular',
                key: 'Particular',
            },
            ...uniqueStoreNames.map(storeName => ({
                title: storeName,
                dataIndex: storeName,
                key: storeName,
                render: (text, record) => {
                    const isTotal = record.Particular === 'Total';
                    const color = isTotal ? (parseInt(text) >= 0 ? 'green' : 'red') : '';
                    const value = isNaN(parseInt(text)) ? 0 : parseInt(text);

                    return <span style={{ color }}>{value}</span>;
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
                    backgroundColor: 'rgba(75,192,192,0.4)',
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
            <Content style={{ padding: '24px' }}>
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
                            {salesData.filter((item) => selectedStoreType.length == 0 || selectedStoreType == item.StoreType).map(item => (
                                <Option key={item.StoreName} value={item.StoreName}>
                                    {item.StoreName}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Button
                            icon={<TableOutlined />}
                            type={tableView ? 'primary' : 'default'}
                            onClick={() => setTableView(true)}
                        >
                            Table
                        </Button>
                        <Button
                            icon={<BarChartOutlined />}
                            type={tableView ? 'default' : 'primary'}
                            onClick={() => setTableView(false)}
                            style={{ marginLeft: '8px', marginRight: '10px' }}
                        >
                            Bar Chart
                        </Button>
                    </div>
                </div>
                <h2>Pivot Data Table</h2>
                {tableView ? (
                    <Table dataSource={getPivotedData()} columns={getPivotedColumns()} scroll={{ x: true }} />
                ) : (
                    <Bar data={getBarChartData()} />
                )}
            </Content>
        </Layout>
    );
};

export default Page;
