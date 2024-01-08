"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import DynamicData from './Components/DynamicData'
import { Layout, Typography, Card, Row, Col, Select, Table, Divider, Button } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Delta from '../app/Images/DeltaInfosoft.png'
import Banas from '../app/Images/Banas_Logo1.png'


// Register necessary Chart.js components
Chart.register(...registerables);

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const Page = () => {
  const router = useRouter();
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [flopCategory, setFlowCategory] = useState(null);
  const [selectedStores, setSelectedStores] = useState([]); // Change to an array for multi-select
  const [selectedStoreType, setSelectedStoreType] = useState('ALL');
  const [topCategory, setTopCategory] = useState(null);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    updateDynamicInsights();
  }, [salesData, selectedYear, selectedMonth, selectedStores, selectedStoreType]);

  const updateDynamicInsights = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
        (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
    );

    if (filteredData?.length == 0) setTotalSales(0)
    if (filteredData && filteredData.length > 0) {
      const groupedData = filteredData.reduce((acc, item) => {
        acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
        return acc;
      }, {});

      const categories = Object.keys(groupedData);
      const totalSalesAmount = categories.reduce((total, category) => total + groupedData[category], 0);

      setTotalSales(totalSalesAmount);

      const topCategory = categories.reduce((top, category) => (groupedData[category] > groupedData[top] ? category : top), categories[0]);
      const flopCategory = categories.reduce((top, category) => (groupedData[category] < groupedData[top] ? category : top), categories[0]);
      setFlowCategory(flopCategory);
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
    {
      title: 'Store Type',
      dataIndex: 'StoreType',
      key: 'StoreType',
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = '/api/getData';

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
        (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
        (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
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
  'rgba(75, 192, 192, 0.7)',
  'rgba(128, 0, 128, 0.7)', // Purple
  'rgba(0, 128, 0, 0.7)',  // Green
  'rgba(255, 140, 0, 0.7)',  // DarkOrange
],
        },
      ],
    };
  };

  const filteredData = salesData?.filter(
    (item) =>
      item.Yr === selectedYear &&
      (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
      (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
      (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
  );

  const transformDataForBarChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
        (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
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
            'rgba(75, 192, 192, 0.7)',
            'rgba(128, 0, 128, 0.7)', // Purple
            'rgba(0, 128, 0, 0.7)',  // Green
            'rgba(255, 140, 0, 0.7)',  // DarkOrange
          ],
        },
      ],
    };
  };
  
  const transformDataForLineChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
        (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
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

  const transformDataForStoresBarChart = () => {
    const filteredData = salesData?.filter(
      (item) =>
        item.Yr === selectedYear &&
        (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
        (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
        (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
    );

    const storeData = filteredData?.reduce((acc, item) => {
      acc[item.StoreName] = (acc[item.StoreName] || 0) + item.salesAmt;
      return acc;
    }, {});

    if (!storeData || Object.keys(storeData).length === 0) {
      return { labels: [], datasets: [] };
    }

    const labels = Object.keys(storeData);
    const data = Object.values(storeData);

    return {
      labels,
      datasets: [
        {
          label: 'Total Sales',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
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
    setSelectedStores(value);
  };

  const handleStoreTypeChange = (value) => {
    setSelectedStoreType(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {console.log("PIKACHUUU", process.env.NEXT_PUBLIC_DB_SERVER)}
      <Header style={{ background: '#fff', padding: '16px', height: "100px" }}>
      <div style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', padding: '16px' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div>
      <Image src={Delta} alt="Delta" width={150} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
    </div>
    <Title level={2} style={{ margin: 0, color: '#fff', textAlign: "center",  }}>
      Umang Mall Dashboard
    </Title>
    <div>
      <Image src={Banas} alt="Banas" width={150} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
    </div>
  </div>
</div>

        <Divider />
        <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="2022" style={{ width: 120 }} onChange={handleYearChange}>
              {Array.from(new Set(salesData?.map((item) => item.Yr)))
                .sort((a, b) =>  parseInt(b) - parseInt(a)) // Sort the years in ascending order
                .map((year) => (
                  <Option key={year} value={year}>
                    {year}
                  </Option>
                ))}
            </Select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="ALL" style={{ width: 120 }} onChange={handleMonthChange}>
              <Option value="ALL">All Months</Option>
              {[
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
              ].map((month) => (
                <Option key={month} value={month}>
                  {month}
                </Option>
              ))}
            </Select>
          </div>


          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="ALL" style={{ width: 120, minWidth: '140px' }} onChange={handleStoreTypeChange}>
              <Option value="ALL">All Store Types</Option>
              {Array.from(new Set(salesData?.map((item) => item.StoreType))).map((storeType) => (
                <Option key={storeType} value={storeType}>
                  {console.log("PIKA", storeType)}
                  {storeType}
                </Option>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
              mode="multiple"
              placeholder="All Stores"
              style={{ width: '100%', minWidth: '120px' }}
              onChange={handleStoreChange}
              value={selectedStores}
            >
              {Array.from(new Set(salesData?.map((item) => `${item.StoreName}_${item.StoreType}`)))
                .filter((combinedKey) => {
                  const [storeName, storeType] = combinedKey.split('_');
                  return selectedStoreType === 'ALL' || selectedStoreType === storeType;
                })
                .map((combinedKey) => {
                  const [storeName, storeType] = combinedKey.split('_');
                  return (
                    <Option key={storeName} value={storeName} data-store-type={storeType}>
                      {storeName}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <Button ml={4} onClick={() => router.push('/year-dashboard')}>Year Wise Data</Button>
        </div>
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', marginTop: '8%' }}>
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col span={24}>
            <Card title="Sales Data for Stores" style={{ width: '100%' }}>
              <Bar data={transformDataForStoresBarChart()} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Doughnut Chart" style={{ height: '100%' }}>
              <Doughnut data={transformDataForDoughnutChart()} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Bar Chart" style={{ height: '100%',  }}>
              <div style={{display : "flex", alignContent  : 'center', justifyContent: 'center', marginTop:  '15%'}}>
              <Bar data={transformDataForBarChart()} />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Line Chart" style={{ height: '100%' }}>
            <div style={{display : "flex", alignContent  : 'center', justifyContent: 'center', marginTop:  '15%'}}>
              <Line data={transformDataForLineChart()} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px', width: '30%' }}>
          <Col span={24}>
            {salesData && <DynamicData
              totalSales={totalSales}
              topCategory={topCategory}
              flopCategory={flopCategory}
              filteredData={filteredData}
            />}
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '10px' }}>
          <Col span={24}>
            <Card title="Sales Data Table">
              <Table dataSource={filteredData} columns={columns} />
            </Card>
          </Col>
        </Row>
        <Divider />
      </Content>
    </Layout>
  );
};

export default Page;
