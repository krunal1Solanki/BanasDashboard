"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import DynamicData from './Components/DynamicData'
import { Layout, Typography, Card, Row, Col, Button, Select, Table, Divider,  } from 'antd';
import { useRouter } from 'next/navigation';
import * as XLSX from 'xlsx';

import HeaderBanas from './Components/HeaderBanas';


// Register necessary Chart.js components
Chart.register(...registerables);

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const Page = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [flopCategory, setFlowCategory] = useState(null);
  const [selectedStores, setSelectedStores] = useState([]); // Change to an array for multi-select
  const [selectedStoreType, setSelectedStoreType] = useState('ALL');
  const [topCategory, setTopCategory] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Set filtered data whenever salesData changes
    setFilteredData(
      salesData?.filter(
        (item) =>
          validYearMonth(item.Yr, item.MonthName) &&
          (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
      )
    );
  }, [salesData, selectedYear, selectedMonth, selectedStores, selectedStoreType]);
  
  const validYearMonth = (itemYear, month) => {
    month = month.substring(0,3).toUpperCase();
    const validMonths = [
      'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR',
    ];
    console.log("item month", month,)
    const nextYear = (+selectedYear + 1) + ""
    return((itemYear === selectedYear && validMonths.slice(0, 9).includes(month)) ||
      (itemYear === nextYear && validMonths.slice(9).includes(month)))
  }
  useEffect(() => {
    updateDynamicInsights();
  }, [filteredData, selectedYear, selectedMonth, selectedStores, selectedStoreType]);
  const getYearLabel = (year) => {
    return year + `-${(((+year + 1) + "").substring(2))}`;
  }
  const updateDynamicInsights = () => {
    if (filteredData?.length === 0) setTotalSales(0);
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
            'rgba(255, 255, 0, 0.7)',  // Yellow
            'rgba(0, 255, 255, 0.7)',  // Cyan
            'rgba(255, 69, 0, 0.7)',  // Red-Orange
            'rgba(0, 255, 0, 0.7)',  // Lime
            'rgba(255, 0, 255, 0.7)',  // Magenta
            'rgba(0, 128, 255, 0.7)',  // LightBlue
            'rgba(255, 140, 0, 0.7)',  // DarkOrange
            'rgba(0, 128, 0, 0.7)',  // Green
            'rgba(128, 0, 128, 0.7)', // Purple
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(201, 203, 207, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 205, 86, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
          ],
        },
      ],
    };
  };
  const handleExportToExcel = () => {
    if (!filteredData || filteredData.length === 0) {
      console.warn('No data to export.');
      return;
    }

    // Transform data for Excel format
    const excelData = filteredData.map((item) => ({
      'Store Name': item.StoreName,
      'Line of Business (LOB)': item.LOB,
      'Year': item.Yr,
      'Month Name': item.MonthName,
      'Sales Amount': item.salesAmt,
      'Store Type': item.StoreType,
    }));

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SalesData');

    // Save the workbook as an Excel file
    const fileName = `SalesData_${selectedYear}_${selectedMonth}_${selectedStoreType}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  const transformDataForBarChart = () => {


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
  const getCurrentFinancialYear = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Financial year starts from April
    const startYear = currentMonth >= 3 ? currentYear : currentYear - 1;
    const endYear = startYear + 1;

    return `${startYear}-${endYear}`;
  };

  // Function to render year options
  const renderYearOptions = () => {
    const currentFinancialYear = getCurrentFinancialYear();

    return Array.from(new Set(salesData?.map((item) => item.Yr)))
      .filter((year) => year <= currentFinancialYear)  // Only show years up to the current financial year
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map((year) => (
        <Option key={year} value={year}>
          {getYearLabel(year)}
        </Option>
      ));
  };

  const transformDataForStoresBarChart = () => {


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
      <HeaderBanas/>

        <Divider />
        <div style={{ display: 'flex', gap: '10px', marginLeft: '2%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="2023" style={{ width: 120 }} onChange={handleYearChange}>
            {renderYearOptions()}
            </Select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select defaultValue="ALL" style={{ width: 120 }} onChange={handleMonthChange}>
              <Option value="ALL">All Months</Option>
              {[
                 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March',
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
        </div>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', }}>
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col span={24}>
            <Card title="Sales Data for Stores" style={{ width: '100%' }}>
              <Bar data={transformDataForStoresBarChart()} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="LOB Chart" style={{ height: '100%' }}>
              <Doughnut data={transformDataForDoughnutChart()} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="LOB Chart" style={{ height: '100%', }}>
              <div style={{ display: "flex", alignContent: 'center', justifyContent: 'center', marginTop: '15%' }}>
                <Bar data={transformDataForBarChart()} />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="LOB Chart" style={{ height: '100%' }}>
              <div style={{ display: "flex", alignContent: 'center', justifyContent: 'center', marginTop: '15%' }}>
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
            <Button onClick={handleExportToExcel} type="primary" style={{ marginTop: '15px' }}>
                Export to Excel
              </Button>
          </Col>
        </Row>
        <Divider />
      </Content>
    </Layout>
  );
};

export default Page;