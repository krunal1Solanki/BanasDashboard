import {connect} from '../../dbConfig/database';
import { NextRequest, NextResponse } from 'next/server';
import sql from 'mssql';
// Database connection configuration
const dbConfig = {
  server: process.env.NEXT_PUBLIC_DB_SERVER,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  options: {
    encrypt: process.env.NEXT_PUBLIC_DB_OPTIONS_ENCRYPT === 'true', // Convert to boolean
    trustServerCertificate: process.env.NEXT_PUBLIC_DB_OPTIONS_TRUST_SERVER_CERTIFICATE === 'true', // Convert to boolean
  },
};

// Function to execute the SQL query
const executeQuery = async (query) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query(query);
    return result.recordset;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Connect to the database on server start
// connect();

export async function GET(request : NextRequest) {
  try {
    // Example query to fetch data from MonthWiseSales table
    // const query = 'SELECT * FROM MonthWiseSales';
    // const result = await executeQuery(query);
  
    const result = [
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4027.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 544.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2227.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5308.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 642.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 845.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6192.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11666.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2359.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8165.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 5937.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5040.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3030.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39918.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 23293.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53778.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 89995.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 49766.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 98935.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 95.24,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 60472.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 40361.85,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 57122.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 428.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6666.78,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57961.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 28505.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 50192.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20961.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53187.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22897.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 88084.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 74788.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 120019.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 112732.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 38812.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12631.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 101349.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7366.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 24664.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55786.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11668.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.28,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 340219.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 209589.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 221089.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6166.66,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 301.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 53.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 87.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 195.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 125.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 80.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4244.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4402.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1648.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 3470.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3663.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 72019.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 329214.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 182223.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72619.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 201788.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 63360.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10733.32,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 90830.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 36302.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 17461.77,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16219.02,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 101177.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 214409.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 114325.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 222839.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 103158.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 40496.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 88546.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9848.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 60148.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 188600.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 15419.08,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 465588.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23409.56,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 388824.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 131996.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 99695.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 242452.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19195.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.47,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23971.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 17538.07,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 89428.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 137.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 137.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 54.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1627.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1733.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9106.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 626.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3271.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3567.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 7957.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21463.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13728.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9542.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 20624.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 14017.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 14533.24,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 29837.83,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 9999.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 54444.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 22104.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 48027.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 13647.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6399.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 41367.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 44401.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52146.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 26291.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44920.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 56954.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12313.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 11019.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 15106.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6333.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18768.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1123.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 118427.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 21800.04,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 133633.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35495.25,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 193853.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 80596.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 9400.02,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 109991.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 81810.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8409.56,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 122813.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 18171.5,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 88651.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 206011.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 36704.77,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26819.03,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 41338.11,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 62610.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 129.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 64.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 76.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 645.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 709.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 63.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2042.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2330.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1060.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2641.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3402.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4301.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2434.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1731.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 32431.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10363.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 8646.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 780.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6014.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 8629.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5211.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7269.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4932.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9498.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5952.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 50626.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 68940.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12999.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 57017.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 17523.67,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 88709.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 41993.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13866.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 51629.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12542.73,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 72934.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13895.12,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 78610.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19476.02,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 64744.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20152.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64495.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16971.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 60111.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 44529.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 46826,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47167.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 63909.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45728.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18163.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5623.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12204.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 12402.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4079.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7276.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 34556.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14062.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2833.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 842.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19314.3,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 189656.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 32614.3,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14200.04,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19523.86,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 159388.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 171159.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19095.26,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 292580.29,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 22955.36,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 45.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 69.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 67.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 86.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 70.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 102.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bapla",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9047.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1912.63,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4015.72,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 93.29,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 70239.01,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7552.6,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45236.18,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 8809.55,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7758.52,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2828.58,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23171.53,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5369.77,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 16782.94,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1269.82,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 136163.86,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35680.95,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 37765.48,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13342.85,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 56714.4,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30044.73,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2825.48,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1204.12,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7621.17,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4129.02,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50863.47,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 24043.26,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 74694.53,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23799.87,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27312.65,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10990.47,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 51706.33,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19616.51,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19579.72,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12857.92,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 561.9,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 842.85,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 226056.28,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 46152.45,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 111763.11,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 29971.5,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 123406.34,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 71915.22,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45.76,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 38.14,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5294.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2746.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8127.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8462.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5279.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6572.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3503.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3084.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 174.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20849.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5895.17,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12234.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2676.19,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30469.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5609.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 36091.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6333.25,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 31377.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 9590.37,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 16569.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4123.79,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 14010.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 5828.52,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16386.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7123.76,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4038.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 361.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15553.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7168.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 18697.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 16590.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 21314.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10978.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10749.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 11163.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3804.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 4250.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2495.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2454.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2358.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6422.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4977.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7744.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4327.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 791.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 39241.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 27371.49,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21046.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13733.33,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 34298.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15104.78,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 39258.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14114.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47552.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13619.05,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 32664.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14485.73,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29346.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22414.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34025.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23619.11,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9199.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8333.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14834.87,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10290.27,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19660.78,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 20691.99,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 46562.53,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9187.57,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26879.55,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 39348.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 834.83,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 26.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 118.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 16.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 118.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 323.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 172.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 487.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2312.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7612.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4457,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6479.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14004.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19661.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5199.94,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 46060.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12080.89,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 56509.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 11766.56,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10304.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20822.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29472.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6830.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8113.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 10182.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 237.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 504.76,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 37565.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 16871.43,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.18,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 91454.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 37561.94,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 78980.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29204.79,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42897.37,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 112366.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15803.64,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Chala",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2441.61,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1215.29,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1087.52,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1084.85,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30982.66,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13095.3,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41682.03,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10919.04,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22679.32,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10495.26,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31865.42,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16248.79,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15900.56,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5395,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 153539.4,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 37409.53,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 115987.42,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 37328.62,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 33437.68,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 33379.57,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 22.89,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.62,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 164.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 705.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1636.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1389.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 160.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 233.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 899.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 728.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 300,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5220.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 3091.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2100.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 137.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1402.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1530.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12189.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 340.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4250.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5396.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 7678.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 4127.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4455.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4881.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4615.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1574.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11712.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5138.08,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 23806.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10380.87,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21404.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3838.09,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5689.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5009.48,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12545.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7490.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 17636.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8828.52,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13896.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6080.93,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1630.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 16898.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 17752.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21477.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 10785.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 15268.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 19306.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19938.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 214.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1394.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4344.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2896.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1206.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2888.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2549.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1778.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1329.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 41530.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 63185.68,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 54292.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 82276.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 53377.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 23042.85,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 16081.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 48819.08,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 24420.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 54595.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 43242.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 85438.12,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 25415.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 52057.07,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 141482.14,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 96424.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 30549.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30937.52,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 54017.89,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 96656.15,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 86156.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1030.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 64.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1385.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4004.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2798.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 511.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1214.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 457.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 24009.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1872.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 80.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 356.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 27629.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 22761.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 48656.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 24247.3,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 81433.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 27866.31,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 8376.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 16171.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 23218.93,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 24514.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 21066.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3034.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33561.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 4719.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6610.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21232.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3672.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1239.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1281.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 84353,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 241.07,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 207170.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 704.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 11059.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 17941.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11838.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 56370.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 71204.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 28100.07,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9443.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 723.81,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 45592.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 26223.88,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7499,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 146410.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 307388.01,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 138785.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 55446.54,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1181.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 4658.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 242.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 30.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 209.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 475.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3275.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3199.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6896.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 355.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2251.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4413.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2524.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1038.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 2714.26,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7807.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 22410.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 24117.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1533.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1438.1,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 15925.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12495.23,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 21094.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 51910.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 20177.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 890.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 18232.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7123.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3686.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2669.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1261.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1816.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1906.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 249.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 35271.46,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 84665.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 39509.58,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 56585.73,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 17214.31,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1017.86,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12480.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 76.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 28.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 124785.42,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 147.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 4.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 17218.68,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 115134.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 139490.62,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 131736.25,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1728.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2245.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1836.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1795.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18692.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15037.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20232.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 22403.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33865.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9711.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 35489.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12320.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 110807.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45209.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 21104.77,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 119068.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 79422.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 101213.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 70553.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18216.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 23076.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2488.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24909.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1123.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 535624.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 137642.59,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 308704.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 90483.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 52104.82,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 531976.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 121800.41,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3.74,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 115347.36,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 150147.41,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 107611.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11250.07,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 466606.92,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 68.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 110.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1328.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2625.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2081.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1009.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3427.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6422.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24029.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2478.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 11800.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 478.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18892.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3609.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 138033.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 53400.18,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 78362.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 63961.89,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 41733.5,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 34708.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8476.31,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 104181.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 59085.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 82139.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 58657.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 108758.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 24501.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 35652.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 106145.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 95696.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23133.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 28183.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29463.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12941.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7738.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 846.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 170628.65,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 310636.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 149571.63,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 323465.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 445134.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 40819.01,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 160714.28,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 58.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 143.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 47.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 387.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 465.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 271,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 858.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2901.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1447.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 200.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2444.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11787.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23184.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9661.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6548.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 46170.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 30566.49,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41202.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38423.55,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 27190.46,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 41075.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 27528.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 21219.06,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41890.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 30556.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 34925.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 28580.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 40538.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12913.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 30340.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 40435.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 40556.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 37168.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10358.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 935.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10666.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4862.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 21798.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16031.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5667.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1599.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 173714.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 116093.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126576.27,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 123685.73,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 99879.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 126377.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 37504.75,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 116325.91,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 470947.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 391009.93,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 291929.11,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 485282.39,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 166107.39,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 11.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 60.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 128.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 52.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1090.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 21.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10051.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 222,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15254.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30170.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 43844.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13447.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24699.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8990.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1257.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 46180.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 38262.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 28557.1,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13223.73,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4966.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 37014.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31660.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 32666.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29552.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18918.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14467.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 5628.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9904.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 561.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11239.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7142.86,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 134632.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 145442.94,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 104829.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 100361.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 121623.89,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 137741.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 155166.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 161009.67,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.74,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 91428.59,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 151952.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 53103.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 258844.13,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 451696.8,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 560193.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 315165.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 72.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 86.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1333.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 428.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 303.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4075.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5923.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4184.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 27227.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12871.44,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 16590.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 17037.19,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 9799.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18980.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4609.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1504.76,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 29428.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15876.22,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20843.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11928.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 22271.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5639.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14633.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12563.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 22688.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 19657.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4512.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3575.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1953.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 5934.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7655.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1291.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 93390.48,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.26,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 66961.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44690.55,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3452.38,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 84235.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 85190.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 29904.84,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 40866.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10567.02,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22888.47,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 56768.03,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 834.83,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 64.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 49.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 74.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 53.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2519.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 419.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 782.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6384.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 20244.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5053.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3329.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15690.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7153.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 24861.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 17461.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 13933.28,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4366.65,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23879.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19449.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17461.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20352.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7289.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 9602.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3230.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14471.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 91684.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 49366.75,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 67752.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 42573.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 28190.49,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 15856.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 94449.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 67076.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.39,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 51352.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 81548.05,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 21666.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7276.81,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3241.08,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12464.34,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 82415.24,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 23.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 8961.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 609.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1898.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 152.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1003.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 267.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 24677.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2431.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3122.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1162.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2439.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2929.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8688.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2112.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2285.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 573.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 26771.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 13130.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 8647.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12389.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10156.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 8552.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 11919.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 12794.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10740.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18181.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16069.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16975.18,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 28787.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 48471.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 27714.19,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41634.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25752.23,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 35940.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 41761.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14904.74,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 34834.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13718.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 29688.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 8523.74,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 45011.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 30895.1,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32263.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19752.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 36417.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10967.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 143854.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 51855.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 63044.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 46448.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 53602.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 43172.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 55463.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 70794.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 47289.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15319.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12127.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9340.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8185.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12225.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 11053.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6365.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5392.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23215.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26009.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8607.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 378031.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 37788.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 154198.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 43458.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 89899.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1562.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 83281.91,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 59742.88,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.5,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 228101.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 25146.71,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 48420.09,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 80452.43,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 161486.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 145487.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27847.62,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 47.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 163611.44,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 85.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 76.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 346468.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 125058,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 711.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 45562.54,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 141142.97,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 318906.17,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 215200.81,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1203.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 84651.83,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 161.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 171584.88,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 31245.57,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 39.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 123.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 14298.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6270.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4483.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3195.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19753.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 16505.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6531.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 22957.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9348.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1830.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18095.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 180.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 71.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 956.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 3128.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1284.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3232.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3787.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13527.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 10865.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2139.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2412.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2423.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1650.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16085.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 16642.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 63804.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33885.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 17715.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69687.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29141.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 165444.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 45540.32,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 43385.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 10611.88,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 50870.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 6879.72,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 61450.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 14520.4,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 81769.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11628.5,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 13057.08,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 9266.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 42478.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 10733.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 25664.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23952.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9276.13,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 48360.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 73991.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 44021.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 59873.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53837.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 48388.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 60100.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 51870.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 31605.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6799.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 10562.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32022.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14858.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8827.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4917.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 23876.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1685.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 164735.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 204399.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 195000.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 212959.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 177779.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 52238.12,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 199925.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 91752.43,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 180063.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 170837.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 58490.5,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 139561.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 112257.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 37920.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 127947.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 67046.73,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 279772.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 243039.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 71542.9,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 66423.78,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 66214.31,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 83162.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 80.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 221459.64,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 326432.84,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 380084.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 771.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 391000.04,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 219928.45,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 316008.95,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 355.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 331700.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 966.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 915.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 638254.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 50.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 1291.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 39.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 16160.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6177.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 13191.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1851.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2542.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 432.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2266.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10338.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6921.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5576.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 488.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12446.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8715.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 54504.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38580.82,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 54816.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 29499.89,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 42874.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 27714.11,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 28167.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15459.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 56826.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27991.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17226.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9180.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2668.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2414,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 276626.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5812.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 176188.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 101879.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 24495.26,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 164218.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 125477.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30133.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 72.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 29380.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3142.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4258.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53928.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 51636.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19153.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14871.33,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12576.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53148.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 39291.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15213.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 16430,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 55666.7,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 260909.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 67614.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 33204.77,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18171.46,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 89978.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 166991.04,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 81607.15,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 64.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 198.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 594.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1687.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 809.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1619.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4378.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4409.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4514.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2863.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 235.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8191.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5542.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2222.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9074.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5870.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 10380.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8924.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10917.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 22333.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6899.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 41929.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 84985.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 17995.17,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 76642.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 20647.7,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 57695.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 55274.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15066.56,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 55475.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3980.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 49136.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3619.02,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 90728.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 16799.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 76657.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23409.49,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 68453.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19713.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 37838.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 26831.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39920.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 43007.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 40369.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 38562.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 70303.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 51504.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13048.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1121.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 1631.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4525.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 31338.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5981.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2734.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5941.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32931.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14494.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4165.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 16373.31,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 150828.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 11134.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 139604.55,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.65,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 316776.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 103371.46,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 112038.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 704.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 106814.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 316638.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 325651.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 31419.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 131781.52,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 152152.16,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 198790.96,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 237714.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 178462.4,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126058.37,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 239867.37,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 45437.75,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 154.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 190.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 236.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 223.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 95.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 69.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 122.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1670.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 809.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 809.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2414.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 10288.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 16505.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45983,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 38170.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 23488.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41930.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23076,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 49852.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 714.3,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 58992.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2352.35,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 58632.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 4885.65,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 3619.01,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2704.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2714.32,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 72117.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4885.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 51322.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23371.34,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5761.87,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 30791.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39862.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 60649.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 61686.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 31950.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 47281.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 73671.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1064.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15428.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 29098.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13580.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6837.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25186.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 153742.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 115790.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 255729.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 528.57,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 116247.84,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 311605.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 127166.38,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 325716.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 287450.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 73638.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 229817.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 179075.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 79066.63,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 193634.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 91018.22,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 242882.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 399484.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 162404.53,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2.17,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 129313.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 130018.75,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 80010.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 25120.47,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 184290.44,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 203263.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 163415.39,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 268005.24,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 185652.42,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 125.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 582.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12969.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32441.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 28946.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7259.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 46485.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10487,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12571.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10314.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33298.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 20990.22,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 24958.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 21157.07,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6771.4,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 29321.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 49936.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 37076.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 46377.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36862.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 9302.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 20961.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2672.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4932.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25570.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 104910.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 47300.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 199891.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 267.86,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 44714.14,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 123508.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 130913.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 124343.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 53257.14,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 180251.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 73833.45,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 132435.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 206077.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 60157.02,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2.85,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 59199.88,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 35330.67,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64928.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 42022.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61674.3,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 51151.9,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 161393.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 115397.65,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 54.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 77.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 320.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1081.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 754.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2325.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 794.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 339.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10005.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 9821.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 10970.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 9020.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14166.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9522.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 30520.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 48113.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 21314.21,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 34241.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18471.22,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 48013.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 18480.85,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 31469.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 15033.14,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 43430.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13590.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 49011.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 23209.31,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29640.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22628.47,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34382.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7649.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 40239.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 31074.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 38554.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 27341.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 62739.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 32550.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12941.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1927.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14272.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5469.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1435.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 28528.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16070.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3510.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 100261.94,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 174628.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 50009.61,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 84100.06,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 60176.31,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 153266.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 24357.47,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 151087.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18666.61,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 123339.69,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 156089.95,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 80241.37,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 151464.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 55076.21,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 76.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 66.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 69.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 26.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 57.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 55.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 800.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1061.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 190.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 228.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 487.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2288.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3918.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1597.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6577.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1769.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8678.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8663.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3896.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1091.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 6600.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5174.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 7443.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9131.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10250.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 11916.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7067,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12083.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18855.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8650.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 776.2,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 57286.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 60591.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 32699.55,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50028.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 46828.35,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 96056.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 73348.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 23896.05,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 55932.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 26809.36,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 63420.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 30259.73,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 93371.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 37009.35,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 57799.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25190.41,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 70685.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15767.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 48727.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 56537.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 53063.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 45950.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48947.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 71383.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 73446.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 46670.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17658.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7635.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3874.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5619.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 22924.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10361.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4059.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5545.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 13325.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26911.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10707.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 168182.02,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 174254.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 190525.74,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 168894.93,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 196852.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.09,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 176227.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 229427.53,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 218822.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 219033.27,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 185958.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 0.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 159900.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 84676.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 38.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 134388.17,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 42.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 4.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 19964.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 214960.02,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 152253.22,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 188705.75,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 252636.28,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 290182.74,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 157549.31,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 110.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 185719.48,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 32201.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 61.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 80.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 165.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 697.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 38.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 216.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7102.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 7039.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 20875.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 507.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1266.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 974.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2430.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 822.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 13483.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 39370.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30706.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 17200.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 35961.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 15842.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 65837.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 17435.88,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 86515.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 19180.71,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 130919.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12293.63,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 12832.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 40810.87,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 48149.54,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 32872.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 61124.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 38738.41,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 49717.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26061.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13476.12,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 43662.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 5046.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 48892.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 50209.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 48236.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 45855.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 49656.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 53833.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 8443.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 636.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24570.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19534.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9682.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8692.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18357.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 192389.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 528.57,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 168.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 174850.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 7809.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 212639.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 282581.03,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 231207.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 214404.95,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 283642.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 258327.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 281108.64,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 163508.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 129898.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 181291.85,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 175738.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 201494.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 285931.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 203848.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 214557.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.72,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 168090.6,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 190985.65,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 73426.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 123012.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 189669.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 76202.37,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 139230.9,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 219495.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 163857.6,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 128808.25,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1666.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6215.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10712.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8018.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2915.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13782.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7847.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4583.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2478.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 38214.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9618.94,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24894.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6419.02,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25657.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 4680.94,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18303.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4442.85,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 31090,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7776.12,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25196.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6695.25,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29753.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3138.06,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6218.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2514.28,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23835.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 14379.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14422.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9595.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18252.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 16434.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14127.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5528.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2437.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4555.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1805.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2293.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8200.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3671.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4024.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 261.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 71674.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 63757.07,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.68,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38438.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53723.83,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 36687.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 41319.04,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 19378.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 5338.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57215.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 53285.74,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 37681.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 51990.53,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 44884.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 41966.71,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12253.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27566.7,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 120004.53,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 148669.62,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 167433.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 161093.77,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 167294.67,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 141669.67,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 157629.47,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12361.6,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 46.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 54.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 35.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1018.41,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 711.17,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 206.79,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3891.62,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1205.37,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1132.73,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52573.46,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 20555.29,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7257.03,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 42658.85,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13295.23,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13186.64,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7818.99,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12660.29,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6752.33,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35489.52,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14837.58,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12167.77,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12977.2,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2926.82,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2918.61,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 200092.3,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 28604.72,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 43744.86,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4838.09,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 83181.06,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12561.9,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 121303.64,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26968.76,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 29678.62,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3.81,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 75.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 50.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 6618.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 183.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1070.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 76.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1335.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 668.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 41133.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 125312.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 148984.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 134759,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 94923.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 126943.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 147646.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 228802.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 165511.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 38488.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 8491.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 9704.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4588.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 11178.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7437.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6651.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8099.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13561.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 8601.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15540.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7029.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 14084.34,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 45065.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 81506.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 21185.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 57298.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24819.03,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 58845.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 60382.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22009.36,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 51253.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 19314.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 60949.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 22742.82,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 77434,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25809.39,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 59834.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29652.3,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 66374.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17764.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 97866.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 56917.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 60168.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 51878.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 68285.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48737.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 49296.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 54862.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53652.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19644.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3828.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5613.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6540.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20770.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7540.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5641.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5843.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23302.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14335.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3756.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 854.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 271365.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 127893.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 237188.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 137531.21,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 123238.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 880.95,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 121923.79,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 158639.47,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2.61,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 295581.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 127407.56,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 125695.52,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 180899.25,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 309689.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 303079.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 50690.33,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 180035.24,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 33.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 104.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 193905.35,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 191245.99,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 213232.82,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 249371.77,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 272986.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 286445.84,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 188308.72,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 583310.21,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 86679.02,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 39.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 67.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 94.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 116.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 171.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 74.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 66.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 62599.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 285.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 151.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 203.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 2635.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1432.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 237.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5750.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 26663.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 20806.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 162381.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 115384.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 355459.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 302602.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 7403.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12655,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19118.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 26286.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18371.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27846.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 14516.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 131034.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 22768.25,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 57155.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 21809.34,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 69629.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 15199.8,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 94616.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 17009.31,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 90178.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 20752.42,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 19290.26,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 22137.97,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 64561.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 18199.93,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47455.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26914.17,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11104.79,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 46445.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 50370.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39584.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 59846.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45319.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 52159.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 53357.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 79592.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 10843.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6670.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 15268.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12711.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 21277.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8796.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9737.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21739.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 842.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 116312.15,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 256687.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 248486.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 263819.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 274748.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 143412.6,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 345828.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 135323.45,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 299698.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 287549.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 131429.67,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 245999.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 545712.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 126299.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 287185.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 124700.2,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 204808.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 315307.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 139956.64,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3.01,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 123999.6,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 137633.33,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 98493.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 47.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 127334.41,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 254035.14,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 438436.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 149813.08,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 155588.55,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 497205.77,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 294594.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 261594.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 676.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 38.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 80.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1252.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3333.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18382.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 67681.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 24708.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 21926.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 52004.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26218.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 67643.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 29190.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 68521.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 23342.6,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 74809.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 10133.23,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 37485.51,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 31933.06,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 31799.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 90815.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 27847.44,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 49443.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 39685.41,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13657.1,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 39191.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 43879.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 60706.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 75593.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51202.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 59305.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 72464.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13235.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23514.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14979.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7999.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13858.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41916.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 164616.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1761.9,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 59357.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 149360.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 159809.58,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 279724.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 130461.93,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 151125.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 211266.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 139285.64,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 183908.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 141251.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 123495.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 199365.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 129738.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 148958.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 270787.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 160285.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 128704.62,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 171738.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 99921.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 287887.83,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 206098.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 430500.39,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 421227.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 567415.49,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 794353.44,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 422549.59,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5708.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2655.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2295.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 168.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 237.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4128.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7791.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4633.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1719.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 13797.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9865.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6739.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12884.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7499.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 13214.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14251.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10910.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34844.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22662.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 49161.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 92250.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 42847.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 76383.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 44218.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 73807.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 79120.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33095,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 58960.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 32171.19,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 72715.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 27761.74,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 94113.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 34418.79,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 80554.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 39437.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 109452.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 25914.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 49977.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 31170.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 44850.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 50761.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 57771.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 56369.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69124.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 63026,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23127.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 17452.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 13424.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6517.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23377.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6330.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8399.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4637.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36222.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 68320.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9012.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 145184.69,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 91691.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 143487.44,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 43852.44,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 175090.48,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 271634.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 145881.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1938.09,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 128585.74,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 120309.45,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 213872.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 237484.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 53476.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 297222.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 544861.93,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 408714.92,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 518675,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 401700.41,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 381401.08,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 509616.52,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 359286.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 100111.87,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 113.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14280.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14583.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 35.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 110.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 58.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2490.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1136.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 533,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1844.46,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 321.35,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 196.89,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4254.35,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41150.75,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 821.45,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 601.24,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10615.37,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14046.42,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2045.86,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1058.49,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25148.72,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3790.51,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42714.21,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2647.63,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11018.91,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 866.66,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1857.57,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 523.82,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25766.21,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26809.49,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4455.02,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3444.5,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2407.74,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5598,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 292.38,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 222.06,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 49405.11,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7061.89,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 78290.47,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18685.68,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.05,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 13860.02,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2590.46,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6405.49,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 595.24,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 36607.22,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 43910.8,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4455.39,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7678.58,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11.44,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 64.83,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 49.57,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 605.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 385.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 838.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14327.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 64007.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17406.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 22045.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69397.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25277.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 26617.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 13666.51,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 29582.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 30580.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 35344.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13933.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5971.35,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6876.11,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 47682.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6695.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 31486.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18533.31,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15152.32,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33272.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 44778.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 53779.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52134.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 38422.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 48129.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 61232.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3796.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 27763.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25867.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 10496.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13973.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27772.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1685.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 118065.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 62496.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 241719.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 211076.2,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 303355.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 220509.59,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 219413.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1233.33,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 194501.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 280518.81,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 199906.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 222748.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 188223.8,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 209938.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 216271.61,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 234178.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 376612.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 212352.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3.2,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 235642.65,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 221856.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 138043.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 211531.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 40191.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 509268.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 313374.93,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 516268.03,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 408558.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 408732.43,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 55.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 24.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 257.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 348.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4725.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1445.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1757.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11444.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3390.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1133.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 325.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8506.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4073.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6568.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12734.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4358.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 12816.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14259.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12134.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20763.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16327,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 38479.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 61017.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 22361.72,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50377.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24571.26,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39878.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 36179.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15218.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 30351.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11580.83,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 50655.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7961.8,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 80058.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26447.3,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 60021.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23809.32,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64309.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23414.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 25632.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 24881.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 41104.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 55564.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 44679.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 53657.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 64699.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55567.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19152.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4028.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5418.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11383.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20845.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7760.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3837.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4327.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 38548.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29141.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10583.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2809.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 235566.65,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 220727.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 321856.89,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 36014.36,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 257104.65,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.99,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 285086.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 320819.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 247276.06,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 880.95,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 185404.69,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 217799.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 330527.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 80681,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 450111.51,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 376120.68,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 367696.73,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 245232.46,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 522082.59,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 409240.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 307129.75,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 200330.84,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 84705.48,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 38.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 66.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 45.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 73.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1033.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 737.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 104.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 56.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1240.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3126.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1641.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 427.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5970.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11632.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3159.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 894.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 29548.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31314.23,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38066.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19266.5,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12322.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2771.41,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3995.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7961.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13055.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 17773.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6011.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2868.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5056.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8850.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2254.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 566.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 65926.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 67771.35,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 138174.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57733.26,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.66,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25585.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3690.47,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10808.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11752.42,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 355348.99,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 202371.25,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6674.17,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 25058.23,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 68.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 280.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2190.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 757.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2351.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1311.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2742.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2693.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1669.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 323.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 17136.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 78669.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17505.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 19711.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 43447.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 18788.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 38486.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4142.84,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 21476.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 27019.04,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21247.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 40302.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 28847.61,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 38217.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30818.98,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12009.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 35863.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 50012.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 46534.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 41266.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44161.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 45761.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 14151.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8202.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 10313.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9380.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12478.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 61782.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 112401.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 99499.97,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 145201.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 156671.48,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 115017.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 118992.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 250,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 62766.63,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 104389.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 136582.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 87528.6,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 102823.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 82947.61,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 92451.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 137218.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 108633.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.79,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 102338.05,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 94276.15,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 77983.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8499.96,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 311201.35,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 262338.42,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 376067.22,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 470375.66,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 453759.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13312.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7909.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 8837.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4057.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1087.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3279.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 409.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1266.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2378.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4853.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2466.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 396.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4112.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1059.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1315.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2954.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6289.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3182.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9881.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 255.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12348.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9245.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6152.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14136.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13269.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 8323.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20849.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13148.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 31929.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 46857.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 32009.27,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 79108.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41104.68,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 48436.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 48293.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25071.42,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 50004.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 20247.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 40333.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 21799.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42432.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 31704.68,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 34382.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 31681.15,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34746.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15325.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 33903.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39047.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 44583.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 33147.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 39620.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 47680.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 39206.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15246.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 6219.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 3964.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12486.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4838.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5085.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3180.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10228.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23349.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2457.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3952.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 131466.69,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.22,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 212720.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 83747.58,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 267.86,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 104352.56,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 97609.48,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 119240.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 116765.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 42271.5,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 251209.58,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 309527.45,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 429920.65,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 403432.73,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 358164.97,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 340223.77,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 551108.73,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 97004.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7040.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33952.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6310.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2158.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1711.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 149243.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 28757.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 30572.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6191.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2680.84,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 557.13,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 858.8,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12375.33,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 665.09,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 445.19,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 72056.34,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 37703.66,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17907.14,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50318.63,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15095.22,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18686.06,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8861.8,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11920.42,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4595.23,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38552.48,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24271.18,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16362.44,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18064.73,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8184.06,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6459.91,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 129252.59,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 39457.19,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42122.76,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12714.3,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 35966.36,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17647.64,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35584.9,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27116.09,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27910.76,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 61.01,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3.81,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 985.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5312.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1312.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1428.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1919.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10288.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 26388.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13494.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14475.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26506.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 13201.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 14952.24,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 39037.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8938.05,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 26743.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 17285.86,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7628.5,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 36201.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 39561.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 43483.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 34516.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 39514.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 9113.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 6581.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6746.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7116.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9659.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 94447.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 73133.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 170590.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 58133.3,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 101820.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 79247.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 63152.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 103053.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 75971.39,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 59792.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 166303.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 62238.06,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 67523.78,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 78118.95,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 67492.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 47129.6,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48834.68,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 111531.35,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 131737.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 108268.1,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1661.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 68.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 334.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 90.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1223.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2606.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 755.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11433.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 228.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2011.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 318.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9866.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14662.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5211.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12314.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7688.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39056.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 64577.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 13199.97,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 60457.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 17085.63,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 12237.99,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 36511.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14238.01,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 52949.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 9542.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69230.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 17352.24,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 44978.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 16800.05,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 52160.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 14797.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 36684.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 45600.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 28882.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 49847.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 41793.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10451.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 3289.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5482.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3695.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9295.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4711.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1904.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 74980.89,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 169267.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 71109.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 74299.93,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 125047.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 116110.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 29171.5,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 60419.74,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 93214.55,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 114781.61,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126915.49,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 505933.49,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 44334.99,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 238.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 45.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 346.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 64.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2460.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 169.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 511.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1560.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 22.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 225.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 145.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 94.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1205.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 152.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 305.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4138.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2825.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4510.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 136.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4206.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4980.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 7965.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2014.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 3845.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3291.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3242.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3501.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12185.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4676.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 2528.56,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10441.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 24337.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5537.67,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21937.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5828.52,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 15892.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 15664.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 3798.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13916.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2951.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 12105.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2276.16,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 23386,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5990.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19302.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4590.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 21257.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5391.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 18031.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 28858.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 13457.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11307.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14293.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11191.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21106.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15457.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5149.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3567.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3124.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1229.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8593.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1546.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1017.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1336.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6346.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2964.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1569.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 59823.88,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 42351.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 37149.55,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 36795.24,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 35852.42,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 106713.74,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.86,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 44656.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 73209.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1233.33,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 96426.68,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 51952.36,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 40060.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27875.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30838.15,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 23.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 15803.54,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 80.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 290.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 46535.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 19625.04,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 66334.95,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 57888.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 56955.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51285.54,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 28325.94,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 77879.71,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16053.62,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 31841.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 969.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1998.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 385.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2197.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12322.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 3377.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3076.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1873.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9108.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25742.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 16322.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4902.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19506.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11750.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 19594.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1774.23,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 29067.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4055.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 51321.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3244.04,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 45019.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1466.68,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2016.47,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1514.28,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19107.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3780.93,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11561.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6387.87,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 361.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 19670.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 22164.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7159.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 17868.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18059.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14429.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13019.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 17323.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 4378.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 6189.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 8519.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5053.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2416.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1051.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13627.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 47322.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 83155.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 40798.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 21985.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 51480.78,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 78720.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 65776.2,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 66255.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 58633.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 79353.43,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 28535.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 24869.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72476.21,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 47858.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 98819.04,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 62254.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 53443.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 79035.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.85,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 64619.09,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 62085.71,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17405.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 28669.59,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 41240.97,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 22665.22,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 187937.42,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 90611.62,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 40348.36,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 42232.21,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 95.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 144.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 128.82,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 229.67,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 178.56,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 943.6,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6296.23,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3164.3,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 8298.98,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4471.48,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7376.48,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3007.19,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6725.43,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6481.47,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1116.17,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1984.3,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 280.95,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32863.94,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1119.05,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 33723.59,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6161.9,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38968.76,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 57549.15,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3275.71,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 365.28,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5168.93,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 880.12,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 93903.48,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 141.91,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16071.15,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 84117.26,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25466.67,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8.22,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 95.24,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19310.79,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7228.56,
          "StoreType": "Franchise",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50624.71,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 115.86,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12452.59,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24668.59,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6706.81,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 264793.69,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 68318.97,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 561.69,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 104.76,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 67601.52,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 21919.07,
          "StoreType": "Franchise",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 98460.1,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23745.63,
          "StoreType": "Franchise",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 80.09,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19.06,
          "StoreType": "Franchise",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 76.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 730,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2755.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 89.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4982.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4576.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 12370.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7282.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5304.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7154.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 28825.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 54497.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19328.52,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30934.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21561.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 16072.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 20737.97,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 30856.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12237.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 55622.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11657.25,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 40430.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18895.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32975.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22199.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26820.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8235.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 14824.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 33637.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 47602.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35434.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 48267.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 31833.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8137.09,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2287.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6365.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2406.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3005.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12041.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3404.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1086.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 91037.98,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.37,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 147392.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7557.14,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 75776.19,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 48690.42,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 167287.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 118435.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18771.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 54.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 41.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 40.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 52.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 19.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 49.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 96.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6843.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25265.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 27333.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6419.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 52361.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9829.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 17104.69,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 3114.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 35386.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 20657.33,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 39426.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18347.46,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7447.63,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 32980.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 52185.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 27372.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 35730.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 47453.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4764.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 7591.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2708.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6393.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25863.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 113799.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 49145.32,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 257916.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 66457.04,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 34363.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 152664.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 134563.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 59814.22,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 144612.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 50966.69,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 111350.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 186221.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57523.59,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.07,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 46856.9,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 56299.8,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 39043.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 122.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 200.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 257.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3246.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2830.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10483.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18280.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8214.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18142.72,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4038.08,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8642.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24353.02,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20366.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5593.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6782.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 26998.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21004.74,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 128905.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42390.4,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.33,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23314.22,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27680.88,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27100.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 299750.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 186304.11,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 19.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 216.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 528.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3423.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6150.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4807.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6967.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 584.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6649.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1621.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14528.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 4095.2,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 28511.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15295.11,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 39158.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13304.67,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 30722.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 16161.75,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 36913.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6801.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26568.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20084.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5478.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 682.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4523.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3470.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 730.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 280.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9252.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 73634.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 102813.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 122857.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5419.07,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18049.16,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 161219.41,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 251438.6,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 37656.46,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9914.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 666.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15958.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 73533,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 24707.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18271.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 71345.24,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 24597.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 45303.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 32443.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14247.53,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5809.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 38124.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45297,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30882.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 40762.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19142.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 11810.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6081.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21823.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 91367.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12995.27,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 37077.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 38221.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2333.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 33574.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 97739.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21257.18,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.34,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 18838.08,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5057.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 36818.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1660.73,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3767.88,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13772.32,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15669.66,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7272.35,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 91.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 190.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 97.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8269.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2821.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4855.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 15848.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 25719.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16963.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 49431.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12871.38,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 47059.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18814.41,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 7390.43,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 36691.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 5866.65,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3361.94,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 51692.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15709.46,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 43533.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11781,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 52505.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13183.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 28985.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 26708.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42861.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 36248.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13395.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15838.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6463.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19774.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 10639.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6425.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 29361.92,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 0.61,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 103115.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2491.11,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13957.16,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11614.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7750.04,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 63374.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11071.52,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 95611.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2919.06,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9683.05,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15763.42,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8370.55,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29174.16,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2790.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 99.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 104.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 28.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 22.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Terwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10633.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 298.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 267.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 259.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2343.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 686.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 317.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3370.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 353.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 759.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11902.26,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9037.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2450.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1553.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 41816.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 13038.01,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18725.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5380.96,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13257.01,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 28307.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12237.99,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13533.24,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21362.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12399.92,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26029.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11714.35,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30487.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2801.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 32170.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35206.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27800.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34310.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5176.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 163.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19229.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6547.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8750.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16678.64,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1075.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 43447.63,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.12,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 46904.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13223.83,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 14261.9,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 69880.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 94496.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2785.72,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 540.18,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 76946.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35754.47,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 38544.68,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 75683.08,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11589.3,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 58.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 31.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 80.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 31.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38.14,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 116.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 84.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 264.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 4250.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 3403.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2212.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8564.73,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10609.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13269.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12467.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15691.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6428.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 428.58,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 31531.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 28312.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12180.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2000,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2600.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 48395.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18534.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 36741.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 31705.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6730.99,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 9363.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9298.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8743.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4913.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 154767.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6314.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 64072.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 62324.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7238.1,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 64035.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 75176.68,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 22176.2,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 0.98,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 15457.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 17214.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16150.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 83044.7,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 46232.16,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 137584.8,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 140946.5,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 34.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 72.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 931.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1753.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 407.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2618.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 55.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1242.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 542.39,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 220.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19172.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 17188,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 47174.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 6162.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 231.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1157.96,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 13033.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33647.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 103298.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 42414.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 21838.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 83726.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36636.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 118207.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 47202.57,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 48881.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 81876.4,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 45005.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 77499.47,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 73783.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 88115.67,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 57218.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 67275.7,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 94732.82,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 80582.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 67519.49,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 65132.92,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 36583.06,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 85618.4,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 41609.29,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 51268.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 58191.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 58653.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 89769.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 102498.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 53770.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 71783.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 87874.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 32142.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12552.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16953.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 48423.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 63105.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11383.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9615.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 46715.78,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1966.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 252573.93,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 297206.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2642.85,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 238394.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 215932.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 174028.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 300805.08,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 442581.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 455047.87,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 377147.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1057.14,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 325478.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 382580.11,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 269749.72,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 557091.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 317224.66,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 215610.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 325840.71,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 217007.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 565506.23,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 361633.34,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 366457.06,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 386019.21,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 244061.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 725788.41,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1027199.85,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1435391.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 728.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12991.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2476572.33,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1071959.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1598201.54,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1847.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1598095.23,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7864.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9495.52,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1074787.1,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 194.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 366.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31316.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8123.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6649.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 50.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 75.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 50.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 75.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 4618.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1299.37,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 947.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 127.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 131.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 525.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 147.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 200.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 144.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1143.43,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2352.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 836.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 36340.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2521.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 33.9,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 101.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14668.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14403.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12413.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23026.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1288.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 18989.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12323.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 10357.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13326.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8646.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 11082.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 13298.86,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9739.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 14128.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 31322.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 31737.92,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 62199.42,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39904.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 82845.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 89304.05,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 63796.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 106904.07,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 49625.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 53160.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 89513.59,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 58798.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 93246.94,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 55622.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 74170.98,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 71300.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 80835.54,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 69532,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 89980.33,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 89855.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 21350.41,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 78554.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 47645.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 54868.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 63000.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72079.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 49657.18,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 76749.56,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 98585.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 89921.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 36580.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7839.22,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 26968.04,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4624.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20742.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6834.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14864.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7114.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 61694.05,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 42355.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11721.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2445.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 216517.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 1233.33,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 371779.71,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 209548.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 438952.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 341571.89,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 2114.28,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 338498.9,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 382438.31,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1.88,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 580556.7,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 352774.72,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 294957.46,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 352.38,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 274533.53,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 325739.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 421824.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 134700.13,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 838927.63,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 879739.14,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 903697.08,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8228.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1078201.86,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1448202.29,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1095753.13,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 961512.06,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14944.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 897085.74,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 889158.26,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 372763.99,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 127.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 713.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19784.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1328.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 39.83,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 72007.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 39487.45,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 547.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35.17,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6677.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3050.94,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 304.79,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 784.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 205.74,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3639.25,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9347.95,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 14628.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 463.65,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1879.62,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6315.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 76.19,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1166.66,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3075.15,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 6829.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2875.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2981.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4574.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8402.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 613.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3446.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2565.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 39598.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7352.37,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 59112.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3438.05,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 32495.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3799.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 13199.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4704.7,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 28473.53,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10561.78,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 37068.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 12961.83,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 33.32,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 361.9,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 17820.81,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9209.42,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3385.28,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3799.95,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 17826.4,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 26521.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19976.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 27032.46,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 28303.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 29397.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1721.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 26442.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 14588.67,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1677.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2169.59,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2306.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6003.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2790.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1863.42,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 685.55,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1712.1,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 524.11,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 101776.12,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 176.19,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 48477.17,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 103129.34,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9629.52,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 57697.89,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 73865.93,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39490.49,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 196100.21,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 92800.02,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 115859.08,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 50124.76,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2939.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3428.57,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 102469.82,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 67057.19,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 41932.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 27114.28,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4.76,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 64910.49,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 28.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 40696.32,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 47.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19839.21,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 139607.1,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 235370.3,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 366071.2,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 258321.28,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 66285.76,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 642.88,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 499.98,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 22218.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9546,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50243.38,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 48240.54,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22714.03,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53314.1,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10361.88,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20624.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35810.6,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 46820.36,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15907.58,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26049.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1123.8,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 62565.77,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32214.29,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 231772.27,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 37990.46,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1.63,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32690.5,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 63333.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 56314.84,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 342223.98,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 205272.58,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 30.51,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 814.3,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 799.97,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 257.16,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3591.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15439.61,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23521.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 49500.85,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1293.48,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27626.87,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11456.2,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 43221.33,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14390.45,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 54533.29,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32504.62,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 77770.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 45094.91,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 77482.01,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 48752.04,
          "StoreType": "DCS",
          "MainCategory": "TEA"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 105910.91,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13101.31,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 56299.07,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53998.57,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9698.71,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5619.35,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23985.13,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 32806.5,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5933,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1404.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6095.25,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 199799.47,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 172569.69,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 234024.44,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12052.37,
          "StoreType": "DCS",
          "MainCategory": "OIL"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33446.48,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 332741.58,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 161719.59,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 56071.61,
          "StoreType": "DCS",
          "MainCategory": "GHEE"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 45.75,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7.63,
          "StoreType": "DCS",
          "MainCategory": "FMCG"
      }
  ]
    return NextResponse.json({
      data: result,
    });
  } catch (err : any) {
    return NextResponse.json({
      error: err.message,
    });
  }
}
