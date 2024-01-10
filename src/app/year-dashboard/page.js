"use client";
import React, { useEffect, useState } from 'react';
import { Layout, Select, Space, Typography, Table, Button } from 'antd';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useRouter } from 'next/navigation';
import HeaderBanas from '../Components/HeaderBanas';
import { registerables } from 'chart.js';
import { SwapOutlined, TableOutlined, BarChartOutlined } from '@ant-design/icons';
import './Year.css';

Chart.register(...registerables);

const { Option } = Select;
const { Header, Content } = Layout;
const { Title } = Typography;

const Year = () => {
  const router = useRouter();
  const [salesData, setSalesData] = useState([]);
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('ALL');
  const [selectedStoreType, setSelectedStoreType] = useState('ALL');
  const [showBarGraph, setShowBarGraph] = useState(false);
  const [selectedStoreNames, setSelectedStoreNames] = useState([]);

  useEffect(() => {
    // Set filtered data whenever salesData changes
    setFilteredSalesData(
      salesData?.filter(
        (item) =>
          (selectedStoreNames.length === 0 || selectedStoreNames.includes(item.StoreName)) &&   (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType) 
      )
    );
  }, [selectedStoreNames, selectedStoreType]);
  

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyStoreTypeFilter();
  }, [selectedStoreType]);

  const fetchData = async () => {
    try {
      let url = '/api/getData';
      const response = await axios.get(url);
      setSalesData(response.data.data);
      setFilteredSalesData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const applyStoreTypeFilter = () => {
    if (selectedStoreType === 'ALL') {
      setFilteredSalesData(salesData);
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

  const handleStoreNamesChange = (values) => {
    setSelectedStoreNames(values);
  };
  
  const toggleView = () => {
    setShowBarGraph(!showBarGraph);
  };

  const renderToggleIcon = () => {
    return showBarGraph ? <TableOutlined /> : <BarChartOutlined />;
  };

  const renderToggleText = () => {
    return showBarGraph ? 'Table View' : 'Bar Graph View';
  };
  const calculateCumulativeSales = (filteredData, year, nextYear) => {
    const cumulativeSales = {};
    const validMonths = [
      'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR',
    ];

    validMonths.forEach(month => {
      cumulativeSales[month] = {};
    });

    filteredData.forEach(item => {
      const month = item.MonthName.trim().substring(0, 3).toUpperCase();
      const salesAmt = parseFloat(item.salesAmt);
      const itemYear = item.Yr;

      if (!isNaN(salesAmt) && validMonths.includes(month)) {
        if ((itemYear === year && validMonths.slice(0, 9).includes(month)) ||
          (itemYear === nextYear && validMonths.slice(9).includes(month))) {
          cumulativeSales[month][item.StoreName] = (cumulativeSales[month][item.StoreName] || 0) + salesAmt;
        }
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
      'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR',
    ];

    const columns = [
      {
        title: 'Store',
        dataIndex: 'store',
        key: 'store',
        sorter: (a, b) => a.store == 'Total' || b.store == 'Total' ? 0 : a.store.localeCompare(b.store),
        sortDirections: ['ascend', 'descend'],
      },
      ...months.map(month => ({
        title: month,
        dataIndex: month,
        key: month,
        sorter: (a, b) => {
          if (a.store == 'Total' || b.store == 'Total') {
            return 0;
          }
          return parseFloat(a[month]) - parseFloat(b[month]);
        },
        sortDirections: ['ascend', 'descend'],
        render: (text, record) => {
          const value = parseFloat(text) / 100000;
          const isMax = record.store === 'Max';
          const isMin = record.store === 'Min';
          const isTotal = record.store === 'Total';
          if (value === 0) {
            return null;
          }

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
  const renderTableRows = () => {



    if (selectedYear === 'ALL') {
      return (
        <div style={containerStyle}>
          {Array.from(new Set(filteredSalesData?.map(item => item.Yr))).sort((a, b) => parseInt(a) - parseInt(b)).map(year => (
            <div key={year} style={tableContainerStyle}>
              <Title level={3}>{getYearLabel(year)}</Title>
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
    } else
      return <Table
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


  }

  const getDataSourceForYear = (year) => {

    const nextYear = (+year + 1) + "";
    const storeNames = Array.from(new Set(filteredSalesData.map(item => item.StoreName)));
    const filteredData = filteredSalesData.filter(item => item.Yr == year || item.Yr == nextYear);

    const cumulativeSales = calculateCumulativeSales(filteredData, year, nextYear);

    const months = [
      'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR',
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

  const renderSalesBarGraph = (salesData, selectedYear) => {
    const nextYear = (+selectedYear + 1) + "";
    const validMonths = [
      'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March',
    ];
    const filteredData = salesData.filter(item => ((item.Yr === selectedYear && validMonths.slice(0, 9).includes(item.MonthName)) ||
      (item.Yr === nextYear && validMonths.slice(9).includes(item.MonthName))));

    const months = [
      'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March',
    ];

    const data = {
      labels: months,
      datasets: [
        {
          label: 'Total Sales',
          data: months.map(month => {
            const totalSalesForMonth = filteredData
              .filter(item => item.MonthName.includes(month))
              .reduce((total, item) => total + parseFloat(item.salesAmt), 0);
            return totalSalesForMonth.toFixed(2);
          }),
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    const options = {
      scales: {
        x: { stacked: true },
        y: { stacked: true },
      },
    };

    return <Bar data={data} options={options} />;
  };
  const getYearLabel = (year) => {
    if (year === 'ALL') {
      return 'ALL FINANCIAL YEARS';
    }
    return `${year}-${(((+year + 1) + "").substring(2))}`;
  };


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

  return (
    <Layout className="dashboard-layout">
      <HeaderBanas />
      <Content className="dashboard-content">
        <Space direction="vertical" style={{ padding: '20px', width: '100%' }}>
          <div className="year-selector">
            <Select
              style={{ width: '200px', marginRight: '10px' }}
              onChange={handleYearChange}
              value={selectedYear || undefined}
            >
              <Option value={'ALL'}>All Financial Years</Option>
              {salesData &&
                Array.from(new Set(filteredSalesData.map(item => item.Yr)))
                  .sort((a, b) => parseInt(b) - parseInt(a))
                  .map(year => (
                    <Option key={year} value={year}>
                      {getYearLabel(year)}
                    </Option>
                  ))}
            </Select>

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
            <Select
              mode="multiple" // Set mode to 'multiple' for multi-select
              style={{ width: '200px' }}
              placeholder="All Stores"
              onChange={handleStoreNamesChange}
              value={selectedStoreNames}
            >
              {salesData &&
                Array.from(new Set(salesData.map(item => item.StoreName)))
                  .map(storeName => (
                    <Option key={storeName} value={storeName}>
                      {storeName}
                    </Option>
                  ))}
            </Select>
          </div>
          <div style={containerStyle}>
            <Title level={4} style={{ backgroundColor: '#A2DC5F', width: '100%', height: '50px', display: "flex", alignItems: 'center', justifyContent: 'center', gap: "20px" }}>{getYearLabel(selectedYear)}{getYearLabel(selectedYear) != 'ALL FINANCIAL YEARS' && <Button icon={renderToggleIcon()} onClick={toggleView}>
              {renderToggleText()}
            </Button>}</Title>
            <div style={tableContainerStyle}>
              {showBarGraph ? (
                <div style={tableContainerStyle}>
                  {renderSalesBarGraph(filteredSalesData, selectedYear)}
                </div>
              ) : (
                renderTableRows()
              )}
            </div>
          </div>
        </Space>
      </Content>
    </Layout>
  );
};

export default Year;