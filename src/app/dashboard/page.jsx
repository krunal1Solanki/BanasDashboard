"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import dayjs from 'dayjs'
import Typewriter from 'typewriter-effect';
import { Layout, Typography, Card, Row, Col, Button, Select, Table, Modal, Divider, DatePicker } from 'antd';
import Loader from '../Components/Loader'
import * as XLSX from 'xlsx';
import DynamicData from '../Components/DynamicData';
import ChartDataLabels from "chartjs-plugin-datalabels";


const { RangePicker } = DatePicker;


// Register necessary Chart.js components
Chart.register(...registerables, ChartDataLabels);

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const Page = () => {
  const getCurrentMonthName = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const previousMonthIndex = (currentDate.getMonth() - 1 + 12) % 12; // Taking care of wrapping around to previous year
    return months[previousMonthIndex];
  };

  const [salesData, setSalesData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([])
  const [modalTotal, setModalTotal] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState('ALL');
  // const [selectedYear, setSelectedYear] = useState('2023');
  const [lobContributions, setLobContributions] = useState({});
  const [tableData, setTableData] = useState([]);
  const [NOB, setTotalNOB] = useState(0);
  const [loading, setLoading] = useState(1);
  const [Qty, setTotalQty] = useState(0);
  const [articles, setShowArticles] = useState([])
  const [showModalData, setShowModalData] = useState([])
  const [currLob, setCurrLob] = useState('')
  const [ABV, setTotalABV] = useState(0);
  const [ASP, setTotalASP] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthName());
  const [selectedStores, setSelectedStores] = useState([]); // Change to an array for multi-select
  const [lobs, setSelectedLobs] = useState([]); // Change to an array for multi-select
  const [descs, setDescs] = useState([]); // Change to an array for multi-select
  const [mains, setSelectedMains] = useState([]); // Change to an array for multi-select
  const [loading2, setLoading2] = useState(false);

 


  const [selectedStoreType, setSelectedStoreType] = useState('ALL');
  const [selectedStoreType2, setSelectedStoreType2] = useState('ALL');

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

  const handleStoreSelectionChange = (value) => {
    setSelectedStore(value);
  };

  const modalColumns = [
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
      align: 'left',
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Line of Business (LOB)',
      align: 'left',
      dataIndex: 'LOB',
      key: 'LOB',
    },
    {
      title: 'Year',
      align: 'left',
      dataIndex: 'Yr',
      key: 'Yr',
    },
    {
      title: 'Month Name',
      align: 'left',
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

  useEffect(() => {
    if (selectedStores.length == 1) {

      console.log("dataaa", selectedStores,)
      const info = tableData.filter((item) => selectedStores.includes(item.StoreName))[0]
      setTotalABV(info.ABV);
      setTotalASP(info.ASP);
      setTotalQty(info.QTY);
      setTotalNOB(info.NOB);
      setTotalSales(info.ActMTD);
      setSelectedStore(info.StoreName)
    }

    // console.log("2")
    // if (selectedStore == 'ALL') {
    // } else {
    //   const selectedStoreData = tableData.find(item => item.StoreName === selectedStore);

    //   setTotalABV(selectedStoreData.ABV || 0);
    //   setTotalASP(selectedStoreData.ASP || 0);
    //   setTotalQty(selectedStoreData.QTY || 0);
    //   setTotalNOB(selectedStoreData.NOB || 0);
    //   setTotalSales(selectedStoreData.ActMTD || 0)

    // }
  }, [selectedStores])


  function formatIndianNumber(number) {
    const formatter = new Intl.NumberFormat('en-IN');
    return formatter.format(number);
  }

  const handleSelectChange = (value) => {
    setSelectedArticle(value);
  };


  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        formatter: value => value.toFixed(2),
        anchor: "end",
        offset: -20,
        align: "start"
      }
    },
    legend: {
      display: false
    }
  };

  useEffect(() => {
    console.log("3")

    // console.log("REM INNININNIN")
    let groupedData = filteredArticleData;

    console.log("SOME SOME", filteredArticleData)
    if(!filteredArticleData) return
    let sum = 0;
    for (let i = 0; i < filteredArticleData.length; i++) sum += filteredArticleData[i].SalesAmt;
    console.log("SOME SOME SUM", sum);
    let map = new Map();
    // console.log("GROUP", groupedData)

    // new logic start
    if (selectedStoreType === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', StoreType: "All Store Types" }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, StoreType: "All Store Types" }); // Sum up sales amounts
        }
      }
    }
    if (selectedStoreType == 'ALL') {
      groupedData = Array.from(map.values());
    }

    //new logic end

    if (selectedMonth === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB + curr.StoreType + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, }); // Sum up sales amounts
        }
      }
    }
    if (selectedMonth == 'ALL') {
      groupedData = Array.from(map.values());
    }
    map = new Map()
    if (!selectedStores || selectedStores.length == 0) {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.LOB + curr.StoreType + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, StoreName: 'All Store', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, }); // Sum up sales amounts
        }
      }
    }
    console.log("MAP CONSOLE 1", map)

    if (selectedStores.length == 0)
      groupedData = Array.from(map.values());

    // console.log("TESTING map", map)
    setShowArticles(groupedData)

  }, [filteredArticleData])


  useEffect(() => {
    let groupedData = modalData;

    let map = new Map();
    const total = groupedData.reduce((acc, curr) => acc + curr.SalesAmt, 0);
    console.log("HELL", total)
    setModalTotal(total);

    if (selectedStoreType === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', StoreType: "All Store Types" }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, StoreType: "All Store Types" }); // Sum up sales amounts
        }
      }
    }
    if (selectedStoreType == 'ALL') {
      groupedData = Array.from(map.values());
    }

    //new logic end

    if (selectedMonth === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB + curr.StoreType + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, }); // Sum up sales amounts
        }
      }
    }
    if (selectedMonth == 'ALL') {
      groupedData = Array.from(map.values());
    }
    map = new Map()
    if (!selectedStores || selectedStores.length == 0) {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.LOB + curr.StoreType + curr.ArticleDesc + curr.ArticleNo;
        if (!map.has(key)) {
          map.set(key, { ...curr, StoreName: 'All Store', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, SalesAmt: existing.SalesAmt + curr.SalesAmt, Qty: existing.Qty + curr.Qty, }); // Sum up sales amounts
        }
      }
    }
    console.log("MAP CONSOLE 1", map)

    if (selectedStores.length == 0)
      groupedData = Array.from(map.values());

    console.log("CONFINED data", groupedData)

    setShowModalData(groupedData);
  }, [modalData])



  useEffect(() => {
    console.log("4")

    // console.log("REM INNININNIN")
    let groupedData = filteredData;

    let map = new Map();
    // console.log("THIS IS MY ALL DATA", filteredData)


    if (selectedStoreType === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', StoreType: "All Store Types" }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, salesAmt: existing.salesAmt + curr.salesAmt, StoreType: "All Store Types" }); // Sum up sales amounts
        }
      }
    }
    if (selectedStoreType == 'ALL') {
      groupedData = Array.from(map.values());
    }
    map = new Map()




    if (selectedMonth === 'ALL') {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.StoreName + curr.LOB + curr.StoreType;
        if (!map.has(key)) {
          map.set(key, { ...curr, MonthName: 'All Months', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, salesAmt: existing.salesAmt + curr.salesAmt, }); // Sum up sales amounts
        }
      }
    }
    if (selectedMonth == 'ALL') {
      groupedData = Array.from(map.values());
    }
    map = new Map()
    if (!selectedStores || selectedStores.length == 0) {
      for (let i = 0; i < groupedData?.length; i++) {
        const curr = groupedData[i];
        const key = curr.LOB + curr.StoreType;
        if (!map.has(key)) {
          map.set(key, { ...curr, StoreName: 'All Store', }); // Initialize with MonthName as 'All Months'
        } else {
          const existing = map.get(key);
          map.set(key, { ...existing, salesAmt: existing.salesAmt + curr.salesAmt, }); // Sum up sales amounts
        }
      }
    }
    if (selectedStores.length == 0)
      groupedData = Array.from(map.values());
    groupedData.sort((a, b) => {
      // Assuming LOB is a string field, use localeCompare for string comparison
      return a.LOB.localeCompare(b.LOB);
    });


    setLobTable(groupedData)

  }, [filteredData])





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
    console.log("7")

    // Set filtered data whenever salesData changes
    setFilteredData(
      salesData?.filter(
        (item) =>
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
      )
    );

    setFilteredArticleData(
      articleTable?.filter(
        (item) =>
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType) && (mains.length == 0 || mains.includes(item.MainCategory))
      )
    );

    setConstFilteredTableData(
      constTableData?.filter(
        (item) =>
          (selectedStores.length === 0 || selectedStores.includes(item.StoreName)) &&
          (selectedStoreType === 'ALL' || item.StoreType === selectedStoreType)
      )
    );

  }, [salesData, selectedMonth, selectedStores, selectedStoreType]);



  const validYearMonth = (itemYear, month) => {
    return true;
  }

  useEffect(() => {
    console.log("9")

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
  const handleLobClick = async (lobValue) => {
    setLoading2(true);
    setCurrLob(lobValue)
    const resp = await axios.post('/api/modalQuery', { startDate, endDate, selectedStoreType, selectedStores, lobValue });
    setLoading2(false);
    setModalData(resp.data.message)
    setModalVisible(true);
  };


  const columns = [
    {
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
      align: 'left'
    },
    {
      title: 'Line of Business (LOB)',
      dataIndex: 'LOB',
      key: 'LOB',
      // Event handler for clicking on LOB value
      onCell: (record) => {
        return {
          onClick: () => {
            handleLobClick(record.LOB);
          },
          style: {
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Smooth transition
            ':hover': {
              backgroundColor: 'pink', // Change color on hover
            },
          },
        };
      },
      render: (text) => (
        <span>
          {loading2 ? (
            <Typewriter
              options={{
                strings: [text],
                autoStart: true,
                loop: false,
              }}
            />
          ) : (
            text
          )}
        </span>
      ),
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
      title: 'Store Type',
      dataIndex: 'StoreType',
      key: 'StoreType',
    },
    {
      title: 'LOB Contribution (%)',
      dataIndex: 'LOB',
      key: 'LOB',
      align: "right",
      render: (text, record) => {
        const key = `${record.StoreName}_${record.LOB}_${record.MonthName}_${record.Yr}`;
        return lobContributions[key] || 0;
      },
    },
    {
      title: 'Sales Amount',
      dataIndex: 'salesAmt',
      key: 'salesAmt',
      align: "right",
      render: (text, record) => {
        return formatIndianNumber(parseFloat(text).toFixed(2));
      }
    },
  ];

  useEffect(() => {
    console.log("10")

    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(loading + 1);

    try {
      // Replace Axios post request with fetch
      const response1 = await fetch('/api/getHomeTableData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, endDate }),
      });

      const data1 = await response1.json();
      setSalesData(data1.data3);
      setArticleTable(data1.data4);

      // Replace Axios post request with fetch
      const response2 = await fetch('/api/getTableData2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, endDate }),
      });

      const data2 = await response2.json();
      setTableData(data2.data3);
    } catch (error) {
      // Handle errors if necessary
      // console.error('Error fetching data:', error);
    } finally {
      setLoading(loading + 1);
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
      align: 'left',
      title: 'Store Name',
      dataIndex: 'StoreName',
      key: 'StoreName',
    },
    {
      title: 'Line of Business (LOB)',
      align: 'left',
      dataIndex: 'LOB',
      key: 'LOB',
    },
    {
      title: 'Year',
      align: 'left',
      dataIndex: 'Yr',
      key: 'Yr',
    },
    {
      title: 'Month Name',
      align: 'left',
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

  const handleExportToExcel = () => {
    if (!lobTable || lobTable.length === 0) {
      // console.warn('No data to export.');
      return;
    }

    // Transform data for Excel format
    const excelData = lobTable.map((item) => {
      `${item.StoreName}_${item.LOB}_${item.Yr}`
      const key = `${item.StoreName}_${item.LOB}_${item.Yr}`;
      const lobContribution = lobContributions[key] || 0;

      return {
        'Store Name': item.StoreName,
        'Line of Business (LOB)': item.LOB,
        'Year': item.Yr,
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
    const fileName = `SalesData_${selectedMonth}_${selectedStoreType}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };


  const transformDataForBarChart = () => {
    if (!filteredData || filteredData.length === 0) {
      return { labels: [], datasets: [] };
    }

    // console.log("TEA FILTERED DATA", filteredData)

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

  useEffect(() => {
    if (startDate && endDate)
      fetchData()
  }, [startDate, endDate])

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
    if (!articles || articles.length === 0) {
      // console.warn('No data to export.');
      return;
    }
    const data = (selectedArticle == 'ALL' ? articles : articles.filter((item) => item.ArticleNo == selectedArticle)).filter((item) => lobs.length == 0 || lobs.includes(item.LOB)).filter((item) => mains.length == 0 || mains.includes(item.MainCategory))
    if (!data || data.length == 0) return;
    // Transform data for Excel format
    const excelData = data.map((item) => ({
      'Article No': item.ArticleNo,
      'Description': item.ArticleDesc,
      'Line of Business (LOB)': item.LOB,
      'Year': item.Yr,
      'Qty': item.Qty,
      'Sales Amt': item.SalesAmt,
    }));

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ArticleData');

    // Save the workbook as an Excel file
    const fileName = `ArticleData_${selectedMonth}_${selectedStoreType}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  const exportModalData = () => {
    if (!showModalData || showModalData.length === 0) {
      // console.warn('No data to export.');
      return;
    }

    const excelData = showModalData.map((item) => ({
      'Article No': item.ArticleNo,
      'Description': item.ArticleDesc,
      'Line of Business (LOB)': item.LOB,
      'Year': item.Yr,
      'Qty': item.Qty,
      'Sales Amt': item.SalesAmt,
      'Store Name': item.StoreName,
      'Store Type': item.StoreType
    }));

    // Create a worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Create a workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ArticleData');

    // Save the workbook as an Excel file
    const fileName = `ArticleData_${selectedMonth}_${selectedStoreType}.xlsx`;
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


  const handleLOBChange = (selectedValues) => {
    setSelectedLobs(selectedValues);
  };
  const handleDescChange = (s) => {
    setDescs(s)
  }
  const handleMainChange = (selectedValues) => {
    setSelectedMains(selectedValues)
  }


  const handleStoreChange = (value) => {
    setSelectedStores(value);
  };

  const handleStoreTypeChange = (value) => {
    setSelectedStoreType(value);
  };

  const handleStoreTypeChange2 = (value) => {
    setSelectedStoreType2(value);
  };
  const totalSalesAmt = ((selectedArticle === 'ALL' ? articles : articles.filter((item) => item.ArticleNo === selectedArticle))
    .filter((item) => lobs.length === 0 || lobs.includes(item.LOB))
    .filter((item) => mains.length === 0 || mains.includes(item.MainCategory)))
    .map((item) => item.SalesAmt)
    .reduce((acc, curr) => acc + curr, 0).toFixed(2);

  const totalSalesAmt2 = lobTable.map((item) => item.salesAmt).reduce((am, curr) => am + curr, 0).toFixed(2)

  // Styling for the button
  const buttonStyle = { backgroundColor: '#83ed7e', color: 'black', fontWeight: 'bold' };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Modal
        visible={modalVisible}
        title={null}
        onCancel={() => { setModalVisible(false) }}
        footer={null}
        width={1300}
      >
        <div style={{ marginBottom: '20px', textAlign: 'center', borderBottom: '2px solid #83ed7e', width: "20%", borderRight: '2px solid #83ed7e', borderRadius: "10px" }}>
          <Title level={3}>{`${selectedStore == 'ALL' ? "All Stores" : selectedStore} - ${selectedMonth}`}</Title>
        </div>
        <Table
          dataSource={showModalData}
          columns={modalColumns}
          bordered
        />
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between', marginTop: "20px"}}>
        <Button onClick={exportModalData} type="primary" style={{  backgroundColor: '#83ed7e', color: "black" }}>
          Export to Excel
        </Button>
                <Button  style={{marginLeft : "10px", background: '#83ed7e', color : 'black'}}> {`Total SalesAmt: ₹${formatIndianNumber(modalTotal)}`}</Button>
        </div>
    
      </Modal>


      {loading == 1 ? <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Loader size='large' /></div> : <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)', }}>


        <div style={{ display: 'flex', gap: '10px', marginLeft: '2%', marginTop: '2%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.3%' }}>
            <RangePicker
              onChange={handleDateRangeChange}
              style={{ marginBottom: "20px" }}
              defaultValue={[dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')]}
            />
          </div>

          {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select  style={{ width: 120 }} value={selectedMonth} onChange={handleMonthChange}>
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
          </div> */}

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

        <Row gutter={16} style={{ marginTop: '20px', width: '30%' }}>
          <Col span={24}>
            {selectedStores.length == 1 && <DynamicData
              totalSales={totalSales}
              NOB={NOB}
              Qty={Qty}
              ABV={ABV}
              selectedStore={selectedStore}
              ASP={ASP}
            />}
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '20px', marginTop: '20px' }}>

          <Col span={24}>
            {selectedStores.length != 1 && <Card title="Sales Data for Stores" style={{ width: '100%' }}>
              <Bar options={options} data={transformDataForStoresBarChart()} />
            </Card>}
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Main Category Wise Sales (Ghee | Oil | Tea)" style={{ height: '100%', display: 'flex', flexDirection: 'column', }}>
              <Bar options={{ ...options, maintainAspectRatio: false }} data={transformDataForBarChart()} style={{ width: "100%", height: '54vh' }} />
            </Card>
          </Col>
          <Col span={16}>
            <Card title="LOB Wise" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Bar options={{ ...options, maintainAspectRatio: false }} data={transformDataForDoughnutChart()} style={{ width: '100%' }} />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card title="Article Data">
              <Select value={selectedArticle} style={{ width: 200 }} defaultValue={'ALL'} onChange={handleSelectChange}>
                <Option value="ALL">All Articles</Option>
                {[...new Set(articles.map(article => article.ArticleNo))].map(articleNo => (
                  <Option key={articleNo} value={articleNo}>{articleNo}</Option>
                ))}
              </Select>
              <Select
                mode="multiple"
                placeholder="All Main Categories"
                style={{ minWidth: '164px', marginLeft: '20px' }}
                onChange={handleMainChange}
                value={mains}
              >
                {Array.from(new Set(articles.map(item => item.MainCategory))).map(lob => (
                  <Option key={lob}>{lob}</Option>
                ))}
              </Select>
              {/* <Select
                mode="multiple"
                placeholder="All Descriptions"
                style={{ minWidth: '140px', marginLeft: '20px' }}
                onChange={handleDescChange}
                value={descs}
              >
                {Array.from(new Set((selectedArticle == 'ALL' ? articles : articles.filter((item) => item.ArticleNo == selectedArticle)).filter((item) => lobs.length == 0 || lobs.includes(item.LOB)).filter((item)=> mains.length == 0 || mains.includes(item.MainCategory)).map(item => item.ArticleDesc))).map(lob => (
                  <Option key={lob}>{lob}</Option>
                ))}
              </Select> */}
              {/* <Select
                mode="multiple"
                placeholder="All Categories"
                style={{ minWidth: '140px', marginLeft: '20px' }}
                onChange={handleLOBChange}
                value={lobs}
              >
                {Array.from(new Set(articles.map(item => item.LOB))).map(lob => (
                  <Option key={lob}>{lob}</Option>
                ))}
              </Select> */}


              <Table pagination={mains.length != 1} dataSource={(selectedArticle == 'ALL' ? articles : articles.filter((item) => item.ArticleNo == selectedArticle)).filter((item) => lobs.length == 0 || lobs.includes(item.LOB)).filter((item) => mains.length == 0 || mains.includes(item.MainCategory))} style={{ marginTop: '20px' }} columns={articleColumns} bordered scroll={{ x: true }} />
              <div style={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold' }}>

                <Button style={buttonStyle}> {`Total SalesAmt: ₹${formatIndianNumber(totalSalesAmt)}`}</Button>
              </div>
            </Card>
            <Button onClick={handleExportToExcelArticle} type="primary" style={{ marginTop: '15px', backgroundColor: '#83ed7e', color: "black" }}>
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
              <Table dataSource={lobTable} scroll={{ x: true }} bordered columns={columns} pagination={{ pageSize: 30 }} />
              <div style={{ marginTop: '10px', textAlign: 'right', fontWeight: 'bold' }}>

                <Button style={buttonStyle}> {`Total SalesAmt: ₹${formatIndianNumber(totalSalesAmt2)}`}</Button>
              </div>
            </Card>
            <Button onClick={handleExportToExcel} type="primary" style={{ marginTop: '15px', backgroundColor: '#83ed7e', color: "black" }}>
              Export to Excel
            </Button>
          </Col>
        </Row>
        <Divider />
      </Content>}
    </Layout>
  );
};

export default Page;