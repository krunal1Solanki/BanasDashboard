"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import { Layout, Typography, Card, Row, Col, Button, Select, Table, Divider, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import dayjs from 'dayjs'
import Loader from './Components/Loader'
import * as XLSX from 'xlsx';
import ChartDataLabels from "chartjs-plugin-datalabels";
import DynamicData  from './Components/DynamicData';
import HeaderBanas from './Components/HeaderBanas';


// Register necessary Chart.js components
Chart.register(...registerables, ChartDataLabels);

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const Page = () => {
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2023');
  const [tableData, setTableData] = useState([]);
  const [NOB, setTotalNOB] = useState(0);
  const [loading, setLoading] = useState(1);
  const [Qty, setTotalQty] = useState(0);
  const [ABV, setTotalABV] = useState(0);
  const [ASP, setTotalASP] = useState(0);
  const [selectedStores, setSelectedStores] = useState([]); // Change to an array for multi-select

  const [selectedStoreType2, setSelectedStoreType2] = useState('ALL');

  const [totalSales, setTotalSales] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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


  function formatIndianNumber(number) {
    const formatter = new Intl.NumberFormat('en-IN');
    return formatter.format(number);
  }

  const fetchDataQuery = async () => {
    setLoading(loading + 1)
    try {
      let url = '/api/getTableData';
      if (!startDate || !endDate) return;

      const body = {
        startDate, endDate
      }

      const response = await axios.post(url, body);
      setTableData(response.data.data3);
      setArticleTable(response.data.data4)
      setFilteredArticleData(response.data.data4)
    } catch (error) {
      console.error('Error fetching table data:', error);
    } finally {
      setTimeout(() => {
        setLoading(loading + 1)
      }, 1500)
    }
  };


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
      render: (text, record) => {
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
      align: 'right',
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
      align: 'right',
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Line of Business (LOB)',
      align: 'right',
      dataIndex: 'LOB',
      key: 'LOB',
    },
    {
      title: 'Year',
      align: 'right',
      dataIndex: 'Yr',
      key: 'Yr',
    },
    {
      title: 'Month Name',
      align: 'right',
      dataIndex: 'MonthName',
      key: 'MonthName',
    },
    {
      title: 'Qty',
      dataIndex: 'Qty',
      align: 'right',
      key: 'Qty',
      render: (text, item) => parseFloat(text).toFixed(2)
    },
    {
      title: 'Sales Amt',
      dataIndex: 'SalesAmt',
      align: 'right',
      key: 'SalesAmt',
      render: (text, item) => parseFloat(text).toFixed(2)
    },
  ];


  const keyHighlightsColumns = [
    {
      title: <span style={{ whiteSpace: 'nowrap' }}>{'Store Opening Date'}</span>,
      dataIndex: 'StoreOpenDt',
      key: 'StoreOpenDt',
      align: 'left',
      render: (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return <span style={{ whiteSpace: 'nowrap' }}>{new Date(date).toLocaleDateString('en-US', options).replace(/(\d+)\/(\w+)\/(\d+)/, '$1-$2-$3')}</span>;
      },
    },
    {
      title: 'Store Name',
      dataIndex: 'StoreName',
      align: 'left',
      key: 'StoreName',
    },
    {
      title: <span style={{ whiteSpace: 'nowrap' }}>{'Store Type'}</span>,
      align: 'left',
      dataIndex: 'StoreType',
      key: 'StoreType',
    },
    {
      align: 'right',
      title: 'FTD',
      dataIndex: 'FTD',
      key: 'FTD',
      render: (text) => formatIndianNumber(text)
    },
    {
      title: 'NOB',
      align: 'right',
      dataIndex: 'NOB',
      key: 'NOB',
      render: (text) => formatIndianNumber(text)

    },
    {
      title: 'QTY',
      align: 'right',
      dataIndex: 'QTY',
      key: 'QTY',
      render: (text) => formatIndianNumber(text)

    },
    {
      title: 'ABV',
      align: 'right',
      dataIndex: 'ABV',
      key: 'ABV',
      render: (text) => parseFloat(text).toFixed(2),
    },
    {
      title: 'UPT',
      align: 'right',
      dataIndex: 'UPT',
      key: 'UPT',
      render: (text) => parseFloat(text).toFixed(2),
    },

    {
      title: 'ASP',
      align: 'right',
      dataIndex: 'ASP',
      key: 'ASP',
      render: (text) => parseFloat(text).toFixed(2),
    },
    {
      title: 'ActMTD',
      dataIndex: 'ActMTD',
      align: 'right',
      key: 'ActMTD',
      render: (text) => formatIndianNumber(text)
    },
    {
      title: 'AvgSalesPerDay',
      align: 'right',
      dataIndex: 'AvgSalesPerDay',
      key: 'AvgSalesPerDay',
      render: (text) => parseFloat(text).toFixed(2),
      render: (text) => formatIndianNumber(text)
    },
    {
      title: 'ActYTD',
      align: 'right',
      dataIndex: 'ActYTD',
      key: 'ActYTD',
      render: (text) => formatIndianNumber(text)
    },
    {
      title: <span style={{ whiteSpace: 'nowrap' }}>{'MTD Sls Mix'}</span>,
      key: 'SaleContrPercentage',
      align: 'right',
      render: (text, record) => {
        const sumAvgSalesPerDay = tableData.reduce((acc, item) => {
          return acc + (item.ActMTD || 0)
        }, 0)

        const contributionPercentage = ((record.ActMTD || 0) / sumAvgSalesPerDay) * 100;
        return contributionPercentage.toFixed(2) + "%";
      },
    },
    {
      title: <span style={{ whiteSpace: 'nowrap' }}>{'YTD Sls Mix'}</span>,
      align: 'right',
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
    const exData = selectedStoreType2 == 'ALL' ? tableData : tableData.filter((item) => item.StoreType == selectedStoreType2);

    const sumActMTD = exData.reduce((acc, item) => acc + (item.ActMTD || 0), 0);
    const sumActYTD = exData.reduce((acc, item) => acc + (item.ActYTD || 0), 0);

    // Transform data for Excel format
    const excelData = exData.map((item) => ({
      'Store Name': item.StoreName,
      'Opening Data': item.StoreOpenDt,
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
    const fileName = `TableData.xlsx`;
    XLSX.writeFile(wb, fileName);
  };





  const handleStoreTypeChange2 = (value) => {
    setSelectedStoreType2(value);
  };
 
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* {console.log("PIKACHUUU", process.env.NEXT_PUBLIC_DB_SERVER)} */}

      <Divider />

      {loading == 1 ? <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Loader size='large' /></div> : <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', }}>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="Daily Sales Report" >
              <RangePicker
                onChange={handleDateRangeChange}
                style={{ marginBottom: "20px" }}
                defaultValue={[dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')]}
              />

              <Select defaultValue="ALL" style={{ width: 120, minWidth: '140px', marginLeft: '20px' }} onChange={handleStoreTypeChange2}>
                <Option value="ALL">All Store Types</Option>
                {Array.from(new Set(salesData?.map((item) => item.StoreType))).map((storeType) => (
                  <Option key={storeType} value={storeType}>
                    {/* {console.log("PIKA", storeType)} */}
                    {storeType}
                  </Option>
                ))}
              </Select>
              <Select
                placeholder="Select Store"
                style={{ width: 200, marginLeft: '20px' }}
                onChange={handleStoreSelectionChange}
                value={selectedStore}
                defaultValue={'ALL'}
              >
                <Option value="ALL">Select Store</Option>
                {[...new Set(tableData?.filter((item) => selectedStoreType2 == 'ALL' || selectedStoreType2 == item.StoreType).map(store => store.StoreName))].map(storeName => (
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
              <Table bordered dataSource={selectedStoreType2 == 'ALL' ? tableData : tableData.filter((item) => item.StoreType == selectedStoreType2)} columns={keyHighlightsColumns} scroll={{ x: true }} pagination={false} />
              <Button onClick={handleExportToExcelTableData} type='primary' style={{ marginTop: '15px', backgroundColor: '#83ed7e', color: "black" }}>
                Export to Excel
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>}
    </Layout>
  );
};

export default Page;

