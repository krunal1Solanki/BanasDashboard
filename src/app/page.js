"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import DynamicData from './Components/DynamicData'
import { Layout, Typography, Card, Row, Col, Button, Select, Table, Divider, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs'
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
  const [lobContributions, setLobContributions] = useState({});
  const [tableData, setTableData] = useState([]);
  const [NOB, setTotalNOB] = useState(0);
  const [Qty, setTotalQty] = useState(0);
  const [ABV, setTotalABV] = useState(0);
  const [ASP, setTotalASP] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('ALL');
  const [selectedStores, setSelectedStores] = useState([]); // Change to an array for multi-select
  const [selectedStoreType, setSelectedStoreType] = useState('ALL');
  const [totalSales, setTotalSales] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [articleTable, setArticleTable] = useState([]);
  const [constTableData, setConstTableData] = useState([]);
  const [filteredArticleData, setFilteredArticleData] = useState([]);
  const [constFilteredTableData, setConstFilteredTableData] = useState([]);
  const [lobTable, setLobTable] = useState([]);
  const [selectedStore, setSelectedStore] = useState('ALL');

  const handleStoreSelectionChange = (value) => {
    setSelectedStore(value);
  };


  useEffect(() => {
    if (selectedStore == 'ALL') {
      setTotalABV(0);
      setTotalASP(0);
      setTotalQty(0);
      setTotalNOB(0);
      setTotalSales(0);
    } else {
      const selectedStoreData = tableData.find(item => item.StoreName === selectedStore);

      setTotalABV(selectedStoreData.ABV || 0);
      setTotalASP(selectedStoreData.ASP || 0);
      setTotalQty(selectedStoreData.QTY || 0);
      setTotalNOB(selectedStoreData.NOB || 0);
      setTotalSales(selectedStoreData.ActMTD || 0)

    }
  }, [selectedStore, tableData])


  const fetchDataQuery = async () => {
    try {
      let url = '/api/getTableData';

      const body = {
        startDate, endDate
      }

      const response = await axios.post(url, body);
      setTableData(response.data.data3);
      setArticleTable(response.data.data4)
      setFilteredArticleData(response.data.data4)
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  useEffect(() => {
    console.log("REM INNININNIN")
    let groupedData = filteredData;
    console.log("REMM step 1", groupedData.length, selectedMonth)
    let map = new Map();
    if (selectedMonth === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB + curr.Yr + curr.StoreType;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months' }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, salesAmt: existing.salesAmt + curr.salesAmt }); // Sum up sales amounts
        }
      }
    }
    if (selectedMonth == 'ALL') {
      groupedData = Array.from(map.values());
    }
    map = new Map()
    console.log("REMM", groupedData.length, selectedStores)
    if (!selectedStores || selectedStores.length == 0) {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.LOB + curr.Yr + curr.StoreType;
        if (!map.has(key)) {
          map.set(key, { ...curr, StoreName: 'All Store' }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, salesAmt: existing.salesAmt + curr.salesAmt }); // Sum up sales amounts
        }
      }
    }

    console.log("REM step 2", selectedStores.length, groupedData?.length)
    if(selectedStores.length == 0)
      groupedData = Array.from(map.values());
    console.log("REMM 2", groupedData)
    setLobTable(groupedData)

  }, [filteredData])

  useEffect(() => {
    const today = new Date();
    const previousMonthLastDate = new Date(today.getFullYear(), today.getMonth(), 0); // Last date of previous month
    const previousMonthFirstDate = new Date(previousMonthLastDate.getFullYear(), previousMonthLastDate.getMonth(), 1); // First date of previous month

    const formattedStartDate = previousMonthFirstDate.toISOString().split('T')[0];
    const formattedEndDate = previousMonthLastDate.toISOString().split('T')[0];

    setStartDate(formattedStartDate)
    setEndDate(formattedEndDate);
  }, []);



  const handleDateRangeChange = (dates) => {
    if (dates && dates.length === 2) {
      setStartDate(dates[0].format('YYYY-MM-DD'));
      setEndDate(dates[1].format('YYYY-MM-DD'));
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  useEffect(() => {
    fetchDataQuery();
  }, [startDate, endDate]);


  useEffect(() => {
    console.log("JAIII", tableData)
  }, [tableData])

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

    
    setFilteredArticleData(
      articleTable?.filter(
        (item) =>
          validYearMonth(item.Yr, item.MonthName) &&
          (item.MonthName.trim() === selectedMonth || selectedMonth === 'ALL') &&
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
      )
    );


    setConstFilteredTableData(
      constTableData?.filter(
        (item) =>
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
      )
    );


  }, [salesData, selectedYear, selectedMonth, selectedStores, selectedStoreType]);



  const validYearMonth = (itemYear, month) => {
    month = month.substring(0, 3).toUpperCase();
    const validMonths = [
      'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR',
    ];
    // console.log("item month", month,)
    const nextYear = (+selectedYear + 1) + ""
    return ((itemYear === selectedYear && validMonths.slice(0, 9).includes(month)) ||
      (itemYear === nextYear && validMonths.slice(9).includes(month)))
  }

  useEffect(()=> {
    updateLobContribution()
  }, [lobTable])


  const getYearLabel = (year) => {
    return year + `-${(((+year + 1) + "").substring(2))}`;
  }
  const updateLobContribution = () => {
    if (lobTable?.length === 0) setTotalSales(0);
    if (lobTable && lobTable.length > 0) {
      const groupedData = lobTable.reduce((acc, item) => {
        acc[item.LOB] = (acc[item.LOB] || 0) + item.salesAmt;
        return acc;
      }, {});

      const categories = Object.keys(groupedData);
      const totalSalesAmount = categories.reduce((total, category) => total + groupedData[category], 0);



      const contributions = {};
      lobTable.forEach((item) => {
        const key = `${item.StoreName}_${item.LOB}_${item.MonthName}_${item.Yr}`;
        contributions[key] = (contributions[key] || 0) + item.salesAmt;
      });

      // Normalize contributions to get percentages
      Object.keys(contributions).forEach((key) => {
        contributions[key] = ((contributions[key] / totalSalesAmount) * 100).toFixed(2);
      });

      // console.log("PIKACHIIII",contributions)
      setLobContributions(contributions);
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
      title: 'LOB Contribution (%)',
      dataIndex: 'LOB',
      key: 'LOB',
      render: (text, record) => {
        const key = `${record.StoreName}_${record.LOB}_${record.MonthName}_${record.Yr}`;
        return lobContributions[key] || 0;
      },
    },
    {
      title: 'Sales Amount',
      dataIndex: 'salesAmt',
      key: 'salesAmt',
      render : (text, record) => {
        return parseFloat(text).toFixed(2);
      }
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
      setTableData(response.data.data3);
      setArticleTable(response.data.data4);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log("ARTT", articleTable)
  }, [articleTable])

  const transformDataForDoughnutChart = () => {
    if (!filteredData || filteredData.length === 0) {
      return { labels: [], datasets: [] };
    }

    const groupedData = filteredData.reduce((acc, item) => {
      const lob = item.LOB;
      const salesAmtInLacs = (acc[lob] || 0) + item.salesAmt / 100000; // Divide by 100,000 to convert to lacs
      acc[lob] = salesAmtInLacs;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          data,
          label: 'Total Sales (in lacs)',
          backgroundColor: ['#99f587']
        },
      ],
    };
  };
  const articleColumns = [
    {
      title: 'Article No',
      dataIndex: 'ArticleNo',
      key: 'ArticleNo',
    },
    {
      title: 'Description',
      dataIndex: 'ArticleDesc',
      key: 'ArticleDesc',
    },
    {
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Qty',
      dataIndex: 'Qty',
      key: 'Qty',
    },
    {
      title: 'Sales Amt',
      dataIndex: 'SalesAmt',
      key: 'SalesAmt',
    },
  ];


  const keyHighlightsColumns = [
    {
      title: 'Opening Date',
      dataIndex: 'StoreOpenDt',
      key: 'StoreOpenDt',
      render: (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options).replace(/(\d+)\/(\w+)\/(\d+)/, '$1-$2-$3');
      },
    },
    {
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Store Type',
      dataIndex: 'StoreType',
      key: 'StoreType',
    },
    {
      title: 'FTD',
      dataIndex: 'FTD',
      key: 'FTD',
    },
    {
      title: 'NOB',
      dataIndex: 'NOB',
      key: 'NOB',
    },
    {
      title: 'QTY',
      dataIndex: 'QTY',
      key: 'QTY',
    },
    {
      title: 'ABV',
      dataIndex: 'ABV',
      key: 'ABV',
      render: (text) => parseFloat(text).toFixed(2),
    },
    {
      title: 'UPT',
      dataIndex: 'UPT',
      key: 'UPT',
      render: (text) => parseFloat(text).toFixed(2),
    },

    {
      title: 'ASP',
      dataIndex: 'ASP',
      key: 'ASP',
      render: (text) => parseFloat(text).toFixed(2),
    },
    {
      title: 'ActMTD',
      dataIndex: 'ActMTD',
      key: 'ActMTD',
    },
    {
      title: 'AvgSalesPerDay',
      dataIndex: 'AvgSalesPerDay',
      key: 'AvgSalesPerDay',
      render: (text) => parseFloat(text).toFixed(2),
    },
    {
      title: 'ActYTD',
      dataIndex: 'ActYTD',
      key: 'ActYTD',
    },
    {
      title: 'MTD Sls Mix',
      dataIndex: 'AvgSalesPerDay',
      key: 'SaleContrPercentage',
      render: (text, record) => {
        const sumAvgSalesPerDay = tableData.reduce((acc, item) => acc + (item.ActMTD || 0), 0);
        const contributionPercentage = ((record.ActMTD || 0) / sumAvgSalesPerDay) * 100;
        return contributionPercentage.toFixed(2) + "%";
      },
    },
    {
      title: 'YTD Sls Mix',
      dataIndex: 'ActYTD',
      key: 'ActYTDContrPercentage',
      render: (text, record) => {
        const sumActYTD = tableData.reduce((acc, item) => acc + (item.ActYTD || 0), 0);
        const contributionPercentage = ((record.ActYTD || 0) / sumActYTD) * 100;
        return contributionPercentage.toFixed(2) + "%";
      },
    },
  ];
  const handleExportToExcelTableData = () => {
    if (!tableData || tableData.length === 0) {
      // console.warn('No data to export.');
      return;
    }
  
    const sumActMTD = tableData.reduce((acc, item) => acc + (item.ActMTD || 0), 0);
    const sumActYTD = tableData.reduce((acc, item) => acc + (item.ActYTD || 0), 0);
  
    // Transform data for Excel format
    const excelData = tableData.map((item) => ({
      'Store Name': item.StoreName,
      'Line of Business (LOB)': item.LOB,
      'Year': item.Yr,
      'Month Name': item.MonthName,
      'Sales Amount': item.salesAmt,
      'Store Type': item.StoreType,
      'FTD': item.FTD || '',
      'NOB': item.NOB || '',
      'QTY': item.QTY || '',
      'ABV': item.ABV || '',
      'UPT': item.UPT || '',
      'ASP': item.ASP || '',
      'ActMTD': item.ActMTD || '',
      'AvgSalesPerDay': item.AvgSalesPerDay || '',
      'ActYTD': item.ActYTD || '',
      'MTD Sls Mix': ((item.ActMTD || 0) / sumActMTD * 100).toFixed(2) + "%",
      'YTD Sls Mix': ((item.ActYTD || 0) / sumActYTD * 100).toFixed(2) + "%",
    }));
    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);
  
    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'TableData');
  
    // Save the workbook as an Excel file
    const fileName = `TableData_${selectedYear}_${selectedMonth}_${selectedStoreType}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };
  

  const handleExportToExcel = () => {
    if (!lobTable || lobTable.length === 0) {
      // console.warn('No data to export.');
      return;
    }

    // Transform data for Excel format
    const excelData = lobTable.map((item) => {
      `${item.StoreName}_${item.LOB}_${item.MonthName}_${item.Yr}`
      const key = `${item.StoreName}_${item.LOB}_${item.MonthName}_${item.Yr}`;
      const lobContribution = lobContributions[key] || 0;
  
      return {
        'Store Name': item.StoreName,
        'Line of Business (LOB)': item.LOB,
        'Year': item.Yr,
        'Month Name': item.MonthName,
        'Sales Amount': item.salesAmt,
        'Store Type': item.StoreType,
        'LOB Contribution (%)': lobContribution,
      };
    });

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

    const groupedData = filteredData.filter((item) => item.MainCategory != 'FMCG').reduce((acc, item) => {
      const mainCategory = item.MainCategory;
      const salesAmtInLacs = (acc[mainCategory] || 0) + item.salesAmt / 100000; // Divide by 100,000 to convert to lacs
      acc[mainCategory] = salesAmtInLacs;
      return acc;
    }, {});

    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);

    return {
      labels,
      datasets: [
        {
          label: 'Sales Amount (in lacs)',
          data,
          backgroundColor: [
            '#99f587',
          ],
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
  const handleExportToExcelArticle = () => {
    if (!filteredArticleData || filteredArticleData.length === 0) {
      // console.warn('No data to export.');
      return;
    }
  
    // Transform data for Excel format
    const excelData = filteredArticleData.map((item) => ({
      'Article No': item.ArticleNo,
      'Description': item.ArticleDesc,
      'Store Name': item.StoreName,
      'Qty': item.Qty,
      'Sales Amt': item.SalesAmt,
    }));
  
    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);
  
    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ArticleData');
  
    // Save the workbook as an Excel file
    const fileName = `ArticleData_${selectedYear}_${selectedMonth}_${selectedStoreType}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };
  
  const transformDataForStoresBarChart = () => {
    const storeData = filteredData?.reduce((acc, item) => {
      acc[item.StoreName] = (acc[item.StoreName] || 0) + item.salesAmt / 100000; // Divide by 100,000 to convert to lacs
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
          label: 'Total Sales (in lacs)',
          data,
          backgroundColor: '#99f587',
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
      {/* {console.log("PIKACHUUU", process.env.NEXT_PUBLIC_DB_SERVER)} */}
      <HeaderBanas />

      <Divider />

      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', }}>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="Daily Sales Report" >
              <RangePicker
                onChange={handleDateRangeChange}
                style={{ marginBottom: "20px" }}
                defaultValue={[dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')]}
              />

              <Select
                placeholder="Select Store"
                style={{ width: 200, marginLeft: '20px' }}
                onChange={handleStoreSelectionChange}
                value={selectedStore}
                defaultValue={'ALL'}
              >
                <Option value="ALL">Select Store</Option>
                {[...new Set(tableData?.map(store => store.StoreName))].map(storeName => (
                  <Option key={storeName} value={storeName}>
                    {storeName}
                  </Option>
                ))}
              </Select>

              <Row gutter={16} style={{ marginTop: '20px', width: '30%' }}>
                <Col span={24}>
                  {selectedStore != 'ALL' && <DynamicData
                    totalSales={totalSales}
                    NOB={NOB}
                    Qty={Qty}
                    ABV={ABV}
                    selectedStore={selectedStore}
                    ASP={ASP}
                  />}
                </Col>
              </Row>
              {selectedStore != 'ALL' && <Divider />}
              <Table dataSource={tableData} columns={keyHighlightsColumns} scroll={{ x: true }} pagination={false} />
              <Button onClick={handleExportToExcelTableData} type="primary" style={{ marginTop: '15px' }}>
              Export to Excel
            </Button>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Divider />

        <div style={{ display: 'flex', gap: '10px', marginLeft: '2%', marginTop: '2%' }}>
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
                  {/* {console.log("PIKA", storeType)} */}
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

        <Row gutter={16} style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Col span={24}>
            <Card title="Sales Data for Stores" style={{ width: '100%' }}>
              <Bar data={transformDataForStoresBarChart()} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="LOB Wise Bar graph" style={{ width: '100%', marginTop: '20px' }}>
              <Bar data={transformDataForDoughnutChart()} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Card title="Main Category Wise Sales (Ghee | Oil | Tea)" style={{ width: '100%', marginTop: '20px' }}>
              <Bar data={transformDataForBarChart()} />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="Article Data">
              <Table dataSource={filteredArticleData} columns={articleColumns} scroll={{ x: true }} />
            </Card>
            <Button onClick={handleExportToExcelArticle} type="primary" style={{ marginTop: '15px' }}>
              Export to Excel
            </Button>
          </Col>
        </Row>
        {/* {console.log("FILTERED", filteredData)} */}
        <Divider />
        <Divider />
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title=" LOB Summary Table">
              <Table dataSource={lobTable} scroll={{ x: true }} columns={columns} />
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