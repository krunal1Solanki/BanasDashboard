"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import DynamicData from '../Components/DynamicData'
import { Layout, Typography, Card, Row, Col, Select, Table, Divider } from 'antd';
import Year from '../year-dashboard/page';

// Register necessary Chart.js components
Chart.register(...registerables);

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const Page = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2022');
  const [selectedMonth, setSelectedMonth] = useState('AUG');
  const [flopCategory, setFlowCategory] = useState(null);
  const [selectedStore, setSelectedStore] = useState('ALL'); // Updated default value for selectedStore
  const [topCategory, setTopCategory] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  

  useEffect(() => {
    updateDynamicInsights();
  }, [salesData, selectedYear, selectedMonth, selectedStore]);

  const updateDynamicInsights = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStore === 'ALL' || item.StoreName === selectedStore)
    );

    if (filteredData && filteredData.length > 0) {
      const groupedData = filteredData.reduce((acc, item) => {
        acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
        return acc;
      }, {});

      const categories = Object.keys(groupedData);
      const totalSalesAmount = categories.reduce((total, category) => total + groupedData[category], 0);
      setTotalSales(totalSalesAmount);

      // Find the top-performing category
      const topCategory = categories.reduce((top, category) => (groupedData[category] > groupedData[top] ? category : top), categories[0]);
      const flopCategory = categories.reduce((top, category) => (groupedData[category] < groupedData[top] ? category : top), categories[0]);
      setFlowCategory(flopCategory)
      setTopCategory(topCategory);
    }
  };

  const columns = [
    {
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Line of Business (LOB)',
      dataIndex: 'LOB',
      key: 'LOB',
    },
    {
      title: 'Year',
      dataIndex: 'Yr',
      key: 'Yr',
    },
    {
      title: 'Month Name',
      dataIndex: 'MonthName',
      key: 'MonthName',
    },
    {
      title: 'Sales Amount',
      dataIndex: 'salesAmt',
      key: 'salesAmt',
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = 'http://localhost:3000/api/getData';
    

      const response = await axios.get(url);
      setSalesData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const transformDataForDoughnutChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStore === 'ALL' || item.StoreName === selectedStore)
    );

    if (!filteredData || filteredData.length === 0) {
      return { labels: [], datasets: [] };
    }

    const groupedData = filteredData.reduce((acc, item) => {
      acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(201, 203, 207, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 205, 86, 0.7)',
          ],
        },
      ],
    };
  };

  const filteredData = salesData?.filter(
    (item) =>
      item.Yr === selectedYear &&
      (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
      (selectedStore === 'ALL' || item.StoreName === selectedStore)
  );

  const transformDataForBarChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStore === 'ALL' || item.StoreName === selectedStore)
    );

    if (!filteredData || filteredData.length === 0) {
      return { labels: [], datasets: [] };
    }

    const groupedData = filteredData.reduce((acc, item) => {
      acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: 'Sales Amount',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
        },
      ],
    };
  };

  const transformDataForLineChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStore === 'ALL' || item.StoreName === selectedStore)
    );

    if (!filteredData || filteredData.length === 0) {
      return { labels: [], datasets: [] };
    }

    const groupedData = filteredData.reduce((acc, item) => {
      acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: 'Sales Amount',
          data,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false,
        },
      ],
    };
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const handleStoreChange = (value) => {
    setSelectedStore(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '16px' }}>
        <Title level={2} style={{ margin: 0, color: '#1890ff', textAlign : "center" }}>
          Banas Dairy Dashboard
        </Title>
        <Divider/>
        <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="2022" style={{ width: 120 }} onChange={handleYearChange}>
              {Array.from(new Set(salesData?.map((item) => item.Yr))).map((year) => (
                <Option key={year} value={year}>
                  {year}
                </Option>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="AUG" style={{ width: 120 }} onChange={handleMonthChange}>
              <Option value="ALL">All Months</Option>
              {Array.from(new Set(salesData?.map((item) => item.MonthName.trim()))).map((month) => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="ALL" style={{ width: 120 }} onChange={handleStoreChange}>
              <Option value="ALL">All Stores</Option>
              {Array.from(new Set(salesData?.map((item) => item.StoreName))).map((store) => (
                <Option key={store} value={store}>
                  {store}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', marginTop: '5%' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Doughnut Chart" style={{ height: '500px' }}>
              <Doughnut data={transformDataForDoughnutChart()} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bar Chart" style={{ height: '500px' }}>
              <Bar data={transformDataForBarChart()} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Line Chart" style={{ height: '500px' }}>
              <Line data={transformDataForLineChart()} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px', width: '30%' }}>
          <Col span={24}>
    <DynamicData
        totalSales={totalSales}
        topCategory={topCategory}
        flopCategory={flopCategory}
        filteredData={filteredData}
      />

          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '10px' }}>
          <Col span={24}>
            <Card title="Sales Data Table">
              <Table dataSource={filteredData} columns={columns} />
            </Card>
          </Col>
        </Row>
        <Divider/>
        <Row gutter={16} style={{ marginTop: '10px' }}>
          <Col span={24}>
            <Card title="Year Wise">
              <Year/>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Page;