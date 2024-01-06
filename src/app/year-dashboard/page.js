"use client";
import { Table, Select, Space, Layout, Typography, Divider } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FastBackwardOutlined } from '@ant-design/icons';
import './Year.css';
import Image from 'next/image';
import Delta from '../Images/DeltaInfosoft.png'
import Banas from '../Images/Banas_Logo1.png'

const { Option } = Select;
const { Header, Content } = Layout;
const { Title } = Typography;

const Year = () => {
  const router = useRouter();
  const [salesData, setSalesData] = useState([]);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedStoreType, setSelectedStoreType] = useState('ALL');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedStoreType);
    // Apply filter when store type changes
    applyStoreTypeFilter();
  }, [selectedStoreType]);

  const fetchData = async () => {
    try {
      let url = 'http://localhost:3000/api/getData';
      const response = await axios.get(url);
      setSalesData(response.data.data);
      setFilteredSalesData(response.data.data); // Initialize filtered data with all data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const applyStoreTypeFilter = () => {
    if (selectedStoreType === 'ALL') {
      setFilteredSalesData(salesData); // If 'ALL', use all data
    } else {
      const filteredData = salesData.filter(item => item.StoreType === selectedStoreType);
      setFilteredSalesData(filteredData);
    }
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const handleStoreTypeChange = (value) => {
    setSelectedStoreType(value);
  };

  const calculateCumulativeSales = (filteredData) => {
    const cumulativeSales = {};
    const validMonths = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    validMonths.forEach(month => {
      cumulativeSales[month] = {};
    });

    filteredData.forEach(item => {
      const month = item.MonthName.trim().substring(0, 3).toUpperCase();
      const salesAmt = parseFloat(item.salesAmt);

      if (!isNaN(salesAmt) && validMonths.includes(month)) {
        cumulativeSales[month][item.StoreName] = (cumulativeSales[month][item.StoreName] || 0) + salesAmt;
      }
    });

    return cumulativeSales;
  };

  const addTotalRow = (dataSource) => {
    const storeNames = Object.keys(dataSource[0]).filter(key => key !== 'month');
    const shouldAddMaxMinRows = dataSource.some(item => item.month === 'Total');

    if (shouldAddMaxMinRows) {
      const maxSales = Math.max(
        ...dataSource.filter(item => item.month !== 'Total').map(item => {
          return Math.max(...storeNames.map(store => parseFloat(item[store])));
        })
      );
      const minSales = Math.min(
        ...dataSource.map(item => {
          return Math.min(...storeNames.map(store => parseFloat(item[store])));
        })
      );

      return [
        ...dataSource,
        {
          month: 'Max',
          ...Object.fromEntries(storeNames.map(store => [store, maxSales.toFixed(2)])),
        },
        {
          month: 'Min',
          ...Object.fromEntries(storeNames.map(store => [store, minSales.toFixed(2)])),
        },
      ];
    } else {
      return dataSource;
    }
  };

  const getColumns = () => {
    const months = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const columns = [
      {
        title: 'Store',
        dataIndex: 'store',
        key: 'store',
        sorter: (a, b) => a.store.localeCompare(b.store),
        sortDirections: ['ascend', 'descend'],
      },
      ...months.map(month => ({
        title: month,
        dataIndex: month,
        key: month,
        sorter: (a, b) => {
          if (a.store === 'Total' || b.store === 'Total') {
            return 0; // "Total" row should stay in its position
          }
          return parseFloat(a[month]) - parseFloat(b[month]);
        },
        sortDirections: ['ascend', 'descend'],
        render: (text, record) => {
          const value = parseFloat(text) / 100000; // Divide by 100,000 for lacs
          const isMax = record.store === 'Max';
          const isMin = record.store === 'Min';
          const isTotal = record.store === 'Total';

          const style = {
            color: isMax ? 'green' : isMin ? 'red' : isTotal ? 'blue' : 'black',
            fontWeight: isMax || isMin || isTotal ? 'bold' : 'normal',
          };

          return <span style={style}>{`₹${value.toFixed(2)} L`}</span>;
        },
      })),
    ];

    return columns;
  };

  const getDataSourceForYear = (year) => {
    const storeNames = Array.from(new Set(filteredSalesData.map(item => item.StoreName)));
    const filteredData = filteredSalesData.filter(item => item.Yr === year);
    const cumulativeSales = calculateCumulativeSales(filteredData);

    const months = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const dataSource = storeNames.map(store => {
      const dataRow = { store };
      months.forEach(month => {
        const salesValue = cumulativeSales[month][store] ? cumulativeSales[month][store] : 0;
        dataRow[month] = salesValue.toFixed(2);
      });
      return dataRow;
    });

    const totalRow = {
      store: 'Total',
    };

    months.forEach(month => {
      const totalSalesForMonth = dataSource.reduce((total, item) => total + parseFloat(item[month]), 0);
      totalRow[month] = totalSalesForMonth.toFixed(2);
    });

    const dataSourceWithoutTotal = dataSource.filter(item => item.store !== 'Total');

    return addTotalRow([...dataSourceWithoutTotal, totalRow]);
  };

  const renderYearTables = () => {
    const containerStyle = {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const tableContainerStyle = {
      width: '100%',
      overflowX: 'auto',
      marginBottom: '20px',
    };

    const tableStyle = {
      minWidth: '800px',
    };

    if (selectedYear === 'ALL') {
      return (
        <div style={containerStyle}>
          {Array.from(new Set(filteredSalesData?.map(item => item.Yr))).sort((a, b) => parseInt(a) - parseInt(b)).map(year => (
            <div key={year} style={tableContainerStyle}>
              <Title level={3}>{year}</Title>
              <Table
                dataSource={getDataSourceForYear(year)}
                columns={getColumns()}
                size="middle"
                bordered
                pagination={false}
                style={tableStyle}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div style={containerStyle}>
          <Title level={4}>{selectedYear}</Title>
          <div style={tableContainerStyle}>
            <Table
              dataSource={getDataSourceForYear(selectedYear)}
              columns={getColumns()}
              size="middle"
              bordered
              pagination={false}
              onChange={(pagination, filters, sorter) => {
                console.log('Table sorting changed:', sorter);
              }}
              style={tableStyle}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <Layout className="dashboard-layout">
      <Header className="dashboard-header" onClick={() => router.push('/')}>
      <div style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', padding: '16px' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div>
      <Image src={Delta} alt="Delta" width={150} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
    </div>
    <Title level={2} style={{ margin: 0, color: '#fff', textAlign: "center",  }}>
      Banas Dairy Dashboard
    </Title>
    <div>
      <Image src={Banas} alt="Banas" width={150} height={60} style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', padding: '3px' }} />
    </div>
  </div>
</div>
      </Header>
      <Content className="dashboard-content">
        <Space direction="vertical" style={{ padding: '20px', width: '100%' }}>
          <div className="year-selector">
            <Select
              style={{ width: '200px', marginRight: '10px' }}
              onChange={handleYearChange}
              value={selectedYear || undefined}
            >
              <Option value={'ALL'}>All Years</Option>
              {salesData &&
                Array.from(new Set(filteredSalesData.map(item => item.Yr)))
                  .sort((a, b) => parseInt(a) - parseInt(b))
                  .map(year => (
                    <Option key={year} value={year}>
                      {year}
                    </Option>
                  ))}
            </Select>
            {/* Add Select component for Store Type */}
            <Select
              style={{ width: '200px' }}
              onChange={handleStoreTypeChange}
              value={selectedStoreType || undefined}
            >
              <Option value={'ALL'}>All Store Types</Option>
              {salesData &&
                Array.from(new Set(salesData.map(item => item.StoreType)))
                  .map(storeType => (
                    <Option key={storeType} value={storeType}>
                      {storeType}
                    </Option>
                  ))}
            </Select>
          </div>
          {renderYearTables()}
        </Space>
      </Content>
    </Layout>
  );
};

export default Year;
