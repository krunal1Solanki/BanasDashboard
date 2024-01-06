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
          "MonthName": "August",
          "salesAmt": 15.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4244.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4402.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1648.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 3470.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3663.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 329214.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 182223.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72619.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 201788.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 63360.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 90830.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 42969.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 71154.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 214409.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 114325.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 222839.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 103158.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 40496.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 88546.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9848.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 60148.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 204019.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 465590.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 388824.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 131996.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 99695.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 261649.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 301.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 53.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 137.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 87.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 137.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 54.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4027.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 544.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2227.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5308.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 642.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 618.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6192.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11666.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2359.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8165.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 5937.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5040.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1237.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39918.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 72019.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 23293.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53778.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 44107.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 60500.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 99030.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 100833.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 57551.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 86467.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 70649.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22067.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 101177.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 88084.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 74788.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 120019.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 112732.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 21195.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12631.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 101349.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7366.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 24664.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55786.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4421.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 363628.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 233560.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 238627.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 62962.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 195.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 125.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Annapurna",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 80.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 645.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 709.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 63.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2042.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2330.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 491.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2641.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3402.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4301.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2434.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1731.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 32431.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10363.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 8646.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 343.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6014.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 7957.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 8629.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5211.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4932.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9498.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2288.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 65160.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 81940.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 74541.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51993,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 64172.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 95039.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 98086.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 78142.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 12355.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 41367.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 60111.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 44529.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 46826,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47167.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 63909.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45728.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7749.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5623.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12204.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 12402.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4079.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7276.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 34556.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14062.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1425.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 842.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 225152.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 226467.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 89996.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 186207.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 212498.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 45688.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 86.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 70.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 102.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9047.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1627.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1733.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9106.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 626.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3271.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3567.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 21463.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13728.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9542.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7269.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 20624.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 14017.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 118546.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 68310.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 61922.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 84896.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 44401.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52146.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 26291.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44920.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 56954.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12313.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 11019.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 15106.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6333.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18768.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 140227.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 152947.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 124191.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 90220.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 140984.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 108175.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 242717.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 292580.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 22955.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 45.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 69.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 129.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 67.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 64.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bapla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 76.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1912.63,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4015.72,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 62.04,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 70239.01,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4875.32,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 54045.73,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5378.84,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23171.53,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4070.2,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 16782.94,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 790.5,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 171844.81,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30652.64,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 56714.4,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Barkhawada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16031.32,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2825.48,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 622.5,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7621.17,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2497.58,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50863.47,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9188.93,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 98494.4,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19568.56,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 51706.33,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9260.51,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19579.72,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5460.24,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 561.9,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 561.9,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 272208.73,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 73726.71,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 123406.34,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6883.95,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45.76,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "BhabharVav",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.63,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2746.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8127.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8462.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6572.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3503.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 36079.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 40967.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19838.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15553.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7168.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 18697.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10749.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2495.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2454.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2358.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4977.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 66612.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 49402.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 53373.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 61171.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 47150.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10290.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 20691.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9187.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26879.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 39348.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 26.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 118.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5294.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5279.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3084.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 119.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 26744.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 14910.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 42424.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 20693.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23509.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1733.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 16590.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 21314.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10978.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 11163.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1479.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 4250.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6422.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7744.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4327.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 387.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 34779.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 51760.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 57644.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7086.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14834.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19660.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 46562.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 16.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Bhadath",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 118.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 323.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 172.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 487.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2312.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7612.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4457,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6479.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14004.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24861.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 58141.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 68276.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10304.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20822.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29472.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6830.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8113.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 10182.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 741.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 54436.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 129016.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 108185.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42897.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 112366.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15803.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Chala",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2441.61,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 744.93,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1087.52,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 591.86,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30982.66,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5083.38,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52601.07,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16770.64,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31865.42,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6503.58,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15900.56,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1055.17,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 190948.93,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 85849.26,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 33437.68,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19852.72,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 22.89,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Dariyalal",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3.81,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Gosan",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 164.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 705.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1636.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1389.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 160.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 233.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 899.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 728.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 300,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5220.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 3091.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2100.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 137.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1402.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1530.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12189.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 340.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4250.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5396.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 7678.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 4127.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4455.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4881.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4615.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1574.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 16850.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 34186.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 25242.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 10698.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 20035.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 26465.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19977.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1630.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 16898.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 17752.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21477.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 10785.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 15268.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 19306.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19938.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 214.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1394.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4344.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2896.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1206.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2888.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2549.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1778.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1329.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 104716.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 136568.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 76420.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 64900.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 79015.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 128681.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 77472.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 141482.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 96424.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 30549.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30937.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 54017.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 96656.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 86156.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1030.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 64.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1385.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Gosan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4004.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2798.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 511.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1214.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 457.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 24009.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1872.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 80.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 356.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2524.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 50391.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 72903.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 11091.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 45628.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 15529.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33561.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 4719.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 21232.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3672.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1239.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1281.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 119865.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 264460.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 11059.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 29780.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 10167.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 72834.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19979.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 115134.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 139490.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 131736.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1181.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 4658.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 242.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 30.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 209.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 475.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3275.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3199.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6896.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 355.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2251.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4413.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1038.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 109299.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 23978.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 48631.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2971.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 36992.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 21094.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 51910.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6610.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 20177.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 890.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 18232.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7123.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3686.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2669.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1261.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1816.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1906.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 249.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 124351.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 73584.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 99304.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 146486.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 124813.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 307535.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 17223.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 138785.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jagana",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 55446.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1728.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2245.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1836.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1795.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18692.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15037.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 22403.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33865.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9711.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 35489.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12320.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 152541.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 140796.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 119068.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 79422.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 101213.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 70553.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18216.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 23076.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2488.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24909.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 706255.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 458276.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 142588.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 653780.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11250.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 466606.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 58.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 68.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 143.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 110.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1328.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2625.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2081.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 705.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3427.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6422.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24029.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2478.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 11800.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 165.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20232.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18892.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1878.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 191434.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 142324.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 43185.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 163267.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 153968.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23690.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 35652.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 106145.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 95696.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9430.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 28183.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29463.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12941.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5941.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 846.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 448278.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 438813.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 595281.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 78332.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 160714.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 47.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Jalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1090.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 21.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10051.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 222,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30170.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 43844.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13447.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24699.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8990.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 73370.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 59481.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 63506.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 37014.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31660.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 32666.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29552.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18918.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14467.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 5628.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9904.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 561.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 18382.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 308348.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 231405.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 221985.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 261426.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 316177.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 116325.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 391009.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 258844.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 560193.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 485282.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 315165.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 83058.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 11.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 60.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 72.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 387.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 223.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 271,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 858.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2901.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1447.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 147.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2444.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15254.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11787.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23184.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6324.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7805.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 76736.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 79626.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 68604.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 72447.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 69095.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13722.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4966.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 30340.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 40435.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 40556.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 37168.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5082.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 935.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10666.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4862.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 21798.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16031.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3728.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1599.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 261536.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 191308.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 278330.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 43744.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 470947.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 291929.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 451696.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 128.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 52.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "JunaDeesa",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 419.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 782.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 20244.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5053.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3329.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15690.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7153.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 34661,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 18966.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32772.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23879.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19449.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17461.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20352.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 7289.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 9602.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3230.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14471.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 185075.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 112442.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 70763.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19308.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 161525.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10567.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7276.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12464.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 56768.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 82415.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 834.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 64.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 49.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1333.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 428.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 303.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6384.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4075.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5923.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1694.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 40099.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 33627.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 23590.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 45304.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 36204.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3681.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14633.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12563.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 22688.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 19657.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1508.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3575.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1953.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 5934.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7655.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 438.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 116328.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 135587.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 166738.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7872.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 40866.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22888.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3241.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 74.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 53.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kotarwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2519.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 23.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 8961.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 609.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1898.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 152.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1003.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 120.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 24677.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2431.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3122.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1162.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2439.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2929.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8688.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2112.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2285.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 431.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 13130.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 8647.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12389.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10156.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 16642.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 8552.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 11919.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10740.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18181.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6279.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 75970.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 40415.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 76185.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 67386.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51028.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 48553.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 40421.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 75906.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 60369.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9261.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 143854.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 51855.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 63044.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 44021.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 46448.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 53602.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 43172.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 55463.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 70794.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 47289.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7224.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12127.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9340.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8185.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12225.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 11053.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6365.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5392.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23215.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26009.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1998.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 542767.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 197832.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 319853.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 205210.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 229503.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 227910.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 211702.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 46108.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 326480.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 163611.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 380170.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 346544.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 46274.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 85855.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 219928.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 316169.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 1291.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 39.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 123.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4483.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 16505.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6531.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 22957.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9348.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 732.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18095.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 180.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 71.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 956.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 3128.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1284.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3232.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3787.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13527.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 10865.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2139.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2412.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 2423.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1650.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 26771.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16085.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 63804.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 33885.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 17715.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 12794.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69687.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29141.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 210985.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 53997.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 57750.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 98745.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 48997.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 57383.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 34188.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 52016.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 48360.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 73991.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 59873.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53837.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 48388.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 60100.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 51870.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 31605.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6799.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 10562.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32022.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14858.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8827.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4917.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 23876.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 242540.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 284900.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 297803.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 230018.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 259668.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 188157.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 150178.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 194994.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 360577.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 314584.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 221540.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 125058,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 141142.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 318906.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 215200.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 391771.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 332056.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 172550.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 639169.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 16437.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 39.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 14298.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6270.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 16160.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3195.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19753.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6177.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Kumar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 13191.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3142.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4258.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53928.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 51636.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19153.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 70588.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53148.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 39291.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15213.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 16430,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 334338.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 164218.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 166991.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 125477.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 81607.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 25455.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 64.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 198.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1851.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2542.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 219.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2266.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10338.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6921.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5576.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 276.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12446.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3506.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 93085.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 84316.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 43039.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13883.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 56826.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27991.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6851.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9180.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2668.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1039.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 332293.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 209393.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 120050.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 63471.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 72.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Lakhani",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 29380.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1670.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 809.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 809.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2414.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 10288.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45983,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 38170.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 23488.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8924.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41930.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23076,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 50566.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 61345.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 60400.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 87183.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 54941.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 100066.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 30791.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 60649.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 61686.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 31950.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 47281.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 73671.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1064.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15428.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 29098.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 13580.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6837.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25186.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 170291.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 115966.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 372505.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 451211.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 341855.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 258141.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 285357.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 349696.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 561891.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 131781.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 198790.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 237714.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 178462.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 184290.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 268005.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 239867.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 185652.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23491.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 154.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 190.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 41.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 236.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 125.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 64.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 594.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1687.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 809.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1619.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4378.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4409.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4514.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2863.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 44.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8191.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5542.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2222.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9074.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 16505.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5870.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 10380.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10917.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 22333.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4897.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 63518.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 45548.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 102981.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 97289.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 57989.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 59456.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 54022.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 107528.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 91825.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11831.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 37838.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 26831.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39862.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39920.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 43007.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 40369.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 38562.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 70303.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 51504.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6810.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1121.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 1631.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4525.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 31338.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5981.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2734.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5941.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 32931.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14494.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2375.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 161962.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 443943.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 429264.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 361441.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 445952.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 455670,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 60309.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 25120.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 152152.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126058.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 203263.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 163415.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 223.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 95.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 69.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 122.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "LaxmipuraDhota",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 150.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1081.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 754.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2325.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 794.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 134.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 10005.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12969.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 9821.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 9020.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14166.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3743.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 43091.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 69427.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52712.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 46503.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 64420.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 72220.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55539.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6243.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 29321.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 40239.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 31074.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 38554.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 27341.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 62739.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 32550.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6083.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1927.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14272.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 5469.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1435.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 28528.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16070.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1957.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 219343.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 173518.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 236823.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 251346.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 33794.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 123339.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 80241.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 51151.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 26.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 57.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 55.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 582.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 32441.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 28946.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7259.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 10970.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 46485.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10487,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 58327.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 51779.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 38549.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 52269.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 49936.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 37076.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 46377.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36862.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 9302.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 20961.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2672.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 4932.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25570.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 152210.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 300423.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 215013.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 177600.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 254084.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 192612.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 266237.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 156089.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61674.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 161393.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 151464.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 115397.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 25134.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 76.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 66.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 69.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 54.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Malan",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 77.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 697.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 38.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 216.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7102.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 7039.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 20875.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 507.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1266.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 974.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2430.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 822.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 39370.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30706.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 17200.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7067,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 35961.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 15842.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 83273.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 105696.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 13608.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 144206.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 85020.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 79977.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 82989.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 43662.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 5046.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 50209.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 48236.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 45855.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 49656.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 53833.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 8443.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 636.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24570.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 19534.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9682.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 8692.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18357.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 361100.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 344097.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 7809.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 495396.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 428236.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 382331.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 311190.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 377232.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 504965.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 418407.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 214960.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 188705.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 252636.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 290182.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 76202.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 163857.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 185719.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 128808.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22732.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 61.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 800.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1061.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 190.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 228.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 208.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2288.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3918.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1597.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6577.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1769.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8678.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8663.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3896.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 152.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 6600.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5174.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 7443.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9131.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 13483.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10250.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 11916.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12083.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 18855.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4725.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 143212.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 98097.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 93291.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 96856.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 106220.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 82742.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 102158.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 130381.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 96746.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 14994.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 48727.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 56537.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 48892.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 53063.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 45950.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48947.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 71383.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 73446.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 46670.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9928.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7635.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3874.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 5619.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 22924.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 10361.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 4059.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5545.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 13325.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 26911.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6723.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 364948.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 390632.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 513069.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 539612.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 354048.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 350886.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 93936.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 123012.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 134426.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 189712.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 19968.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 152253.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 157549.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 139230.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 219605.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 80.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 165.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Mandla",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 19.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1666.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6215.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10712.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8018.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2915.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13782.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7847.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4583.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1403.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 47833.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31313.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30338.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 22745.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38866.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 31891.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 32891.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5719.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23835.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 14379.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14422.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9595.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18252.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 16434.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14127.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2727.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2437.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4555.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1805.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2293.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8200.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3671.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4024.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 99.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 135432.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 92162.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 78006.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 24716.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 110502.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 89672.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 86850.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 24512.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 120004.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 148669.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 167433.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 161093.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 167294.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 141669.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 157629.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6352.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 46.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 15.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 54.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 35.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Morwada",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1018.41,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 711.17,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 115.26,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3891.62,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1205.37,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 516.33,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52573.46,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 20555.29,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3631.06,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 55954.08,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21005.63,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9288.08,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35489.52,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14837.58,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6168.74,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12977.2,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2926.82,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1702.21,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 228697.02,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 48582.95,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 44746.99,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 121303.64,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26968.76,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 26910.75,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "MotaKapra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3.81,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 285.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 151.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 203.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 2635.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1432.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 237.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5750.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 26663.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 20806.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 162381.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 115384.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 355459.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 302602.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 8491.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 7403.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19118.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 26286.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18371.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13561.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27846.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 14516.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 153803.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 78964.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 84829.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 104262.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 78136.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 86570.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 70197.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 89487.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 46445.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 50370.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 59846.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45319.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 52159.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 53357.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 79592.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 10843.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6670.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 15268.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12711.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 21277.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 8796.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9737.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21739.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 561.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 384580.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 372077.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 386624.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 418160.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 504470.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 371694.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 672011.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 411886.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 385707.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 455266.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 127382.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 191245.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 249371.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 272986.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 286445.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 149813.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 294594.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 583310.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 261594.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 28580.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 67.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 94.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 116.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 38.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 80.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 75.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 50.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 6618.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 183.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1070.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 76.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1335.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 424.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 41133.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 125312.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 148984.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 134759,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 94923.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 126943.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 147646.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 228802.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 165511.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 17151.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 9704.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4588.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 11178.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7437.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12655,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6651.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8099.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 8601.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15540.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2519.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 111625.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 65817.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 102691.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 82117.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 82520.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 70568.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 79149.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 103243.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 93289.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13767.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 97866.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 56917.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 60168.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 39584.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 51878.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 68285.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48737.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 49296.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 54862.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53652.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10378.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3828.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5613.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6540.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20770.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7540.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5641.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5843.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23302.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 14335.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1772.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 854.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 387678.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 374719.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 430905,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 427106.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 418978.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 433689.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 440713.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 72327.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 254035.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 180068.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 438470.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 194010.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 213232.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 188308.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 155588.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 497205.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 676.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 39.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 171.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 74.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 66.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "NaniGida",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 62599.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1252.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3333.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 67681.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 24708.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 21926.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14251.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 52004.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 26218.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 96833.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 91864.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 105741.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 123910.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 77204.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 119992.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 39191.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 60706.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 75593.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51202.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 59305.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 72464.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13235.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 23514.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14979.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 7999.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13858.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41916.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 311562.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 103386.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 309522.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 454816.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 314432.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 264746.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 329103.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 269443.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 431075.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 544861.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 518675,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 401700.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 381401.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 430500.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 794353.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 359286.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 422549.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 52977.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 113.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14280.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5708.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 14583.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2655.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2295.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 168.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 189.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4128.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7791.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4633.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 836.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 13797.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9865.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6739.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12884.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18382.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7499.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 13214.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 10910.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34844.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13127.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 84942.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 86647,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 135097.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 120602.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 110920.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 91131.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 100562.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 128532.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 149138.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19709.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 49977.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 31170.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 43879.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 44850.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 50761.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 57771.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 56369.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69124.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 63026,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 10738.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 17452.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 13424.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6517.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23377.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6330.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8399.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4637.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36222.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 68320.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6323.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 235178.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 402096.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 297006.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 350552.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 342577.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 409222.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 85947.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 287887.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 297222.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 206098.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 408714.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 509616.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 421227.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 567415.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 35.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 110.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 58.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2490.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PatelvasMalotra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 761.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 533,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1844.46,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 321.35,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 128.24,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4254.35,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 41150.75,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 821.45,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 376.79,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10615.37,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14046.42,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2045.86,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1010.28,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 28939.23,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 45361.84,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11885.57,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1465.88,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25766.21,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26809.49,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4455.02,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2665.83,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2407.74,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 5598,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 292.38,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 222.06,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 56467,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 96977.2,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 16450.48,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4387.3,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 36607.22,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 43910.8,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4455.39,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7678.58,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 11.44,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 64.83,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Purnima",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 49.57,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 605.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 385.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 838.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 64007.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17406.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 22045.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14259.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 69397.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 25277.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 40284.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 60162.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 46754.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 62900.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 39448.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 83830.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33272.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 53779.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52134.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 38422.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 48129.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 61232.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 3796.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 27763.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25867.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 10496.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13973.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27772.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 353632.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 98511.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 452795.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 560460.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 447182.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 410972.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 427091.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 419582.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 588967.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 376120.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 245232.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 522082.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 409240.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 509268.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 408558.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 200330.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 408732.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 42620.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 38.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 66.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 55.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 24.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 257.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 305.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4725.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1445.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1757.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11444.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3390.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1133.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 73.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8506.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4073.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 6568.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 12734.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 14327.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4358.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 12816.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 12134.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20763.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7843.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 49277.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 44450.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 83378.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 74949.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 36531.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 41932.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 57350.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 106505.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 82842.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23427.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 25632.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 24881.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 44778.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 41104.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 55564.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 44679.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 53657.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 64699.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55567.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9226.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4028.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 5418.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11383.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20845.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 7760.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3837.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 4327.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 38548.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 29141.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5774.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2809.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 542584.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 505596.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 541465.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 475019.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 453442,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 552383.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 124689.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 211531.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 450111.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 40191.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 367696.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 307129.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 313374.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 516268.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 45.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 73.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "PurvDhakha",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1033.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 737.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 104.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1240.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3126.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1641.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 130.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5970.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11632.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3159.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 244.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 60862.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57333.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 15093.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3013.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13055.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 17773.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6011.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1062.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5056.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8850.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2254.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 500,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 133697.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 195908.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29275.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5097,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 355348.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 202371.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6674.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9745.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 68.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1033.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 737.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 104.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 18.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1240.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 3126.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1641.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 130.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5970.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11632.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3159.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 244.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 60862.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 57333.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 15093.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3013.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13055.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 17773.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6011.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1062.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5056.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8850.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2254.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 500,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 133697.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 195908.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29275.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5097,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 355348.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 202371.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6674.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9745.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 68.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Semodra",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 280.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2190.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 757.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2351.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1311.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2742.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 2693.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1669.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 323.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 78669.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 17505.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 19711.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 13269.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 43447.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 18788.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 42629.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 75456.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 65374.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 60017.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 66063.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 50012.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 46534.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 41266.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44161.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 45761.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 14151.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8202.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 10313.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9380.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 12478.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 65735.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 211901.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 276669.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 209009.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 224111.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 185770.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 190060.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 245853.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 251209.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 429920.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 403432.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 358164.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 311201.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 470375.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 551108.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 453759.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 52723.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7040.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33952.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 13312.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 2158.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1711.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7909.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 8837.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4057.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1087.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3279.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 409.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1266.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2378.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4853.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1922.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 396.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4112.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1059.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1315.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2954.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6289.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 3182.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9881.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 50.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12348.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9245.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 17136.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6152.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14136.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 8323.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20849.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5778.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 53406.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 78866.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 120213.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 69541.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 70252.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 69181.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 74137.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 65565.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11271.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 33903.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 35863.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39047.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 44583.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 33147.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 39620.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 47680.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 39206.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7529.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 6219.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 3964.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 12486.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4838.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 5085.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3180.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 10228.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23349.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1743.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 369392.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 198765.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 182009.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 221578.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 211041.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 62162.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 8499.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 309527.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 340223.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 262338.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 376067.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6310.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 149243.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 28757.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 30572.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Shihori",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6191.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2680.84,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 557.13,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 180.11,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12375.33,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 665.09,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 295.75,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 72056.34,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 37703.66,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8652.94,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 65413.85,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27547.86,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8604.72,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38552.48,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 24271.18,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6757.83,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18064.73,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8184.06,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4895.08,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 168709.78,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 54837.06,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 31378.1,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35584.9,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27116.09,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13428.6,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "ShivEntBhabhar",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 61.01,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 985.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5312.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 1312.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1428.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1919.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 26388.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13494.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14475.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14662.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26506.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 13201.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 51275.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 36286.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 61778.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 39561.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 43483.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 34516.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 39514.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 9113.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 6581.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6746.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 7116.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9659.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 167580.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 245571.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 172929.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 142399.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 179025.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 134092.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 228542.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 60419.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 114781.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 47129.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 131737.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 505933.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 108268.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 26290.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 238.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 45.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1661.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 68.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 334.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 30.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1223.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2606.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 755.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 11433.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 228.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2011.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 135.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9866.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 10288.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 5211.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12314.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3877.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 54008.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 77777.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 77543.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 50749.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 61887.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 86582.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 69446.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11558.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 36201.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 36684.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 45600.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 28882.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 49847.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 41793.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6210.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 3289.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5482.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3695.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9295.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4711.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 808.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 227400.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 192571.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 194229.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 58793.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 93214.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126915.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 48834.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 111531.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 61.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 346.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 64.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2460.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Soni",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 969.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1998.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 385.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2197.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12322.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 3377.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3076.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1873.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25742.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 16322.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 4902.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3242.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 19506.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11750.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 21368.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 33123.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 47548.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 17908.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 22905.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13837.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23892.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 19670.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 22164.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 17868.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18059.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14429.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13019.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 17323.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 4378.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 6189.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 8519.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 5053.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2416.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1051.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 13627.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 107146.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 120303.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 76650.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 73465.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 185435.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 126195.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 97345.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 146677.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 114206.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 132479.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 19625.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 57888.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 56955.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 51290.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 22665.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 40348.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 77879.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 42232.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5580.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 23.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 95.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 144.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 511.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1560.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 9.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 22.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 225.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 145.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 94.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1205.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 152.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 305.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 4138.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2825.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4510.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 4206.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 4980.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 7965.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2014.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9108.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 3845.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 3291.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3501.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 12185.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1746,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 54565.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 11908.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 29875.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 27766.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 17178.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 16867.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 15885.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 29376.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27644.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2443.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 18031.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 28858.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 7159.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 13457.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11307.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 14293.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11191.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21106.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 15457.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1746.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3567.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 3124.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1229.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8593.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1546.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1017.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1336.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6346.09,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2964.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 423.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 79501.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 110432.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 139464.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 137986.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 104679.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 89961.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 33040.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 28669.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 15827.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 41321.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 46826.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 66334.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 28325.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 187937.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 90611.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 31841.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Subapura",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 128.82,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 69.49,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 178.56,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.32,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6296.23,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1885.2,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 12770.46,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 4530.57,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6725.43,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3918.8,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1116.17,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1488.62,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 280.95,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 33982.99,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19628.31,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 38968.76,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SuccesSwaroopganj",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9633.95,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3275.71,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 91.53,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5168.93,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 471.49,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 93903.48,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 141.91,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6265.28,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 109583.93,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 103.46,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11727.44,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50624.71,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 115.86,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 6598.21,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24668.59,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3033.63,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 333112.66,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 666.45,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 48127.77,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 98460.1,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 14276.83,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 80.09,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "SurajDevi",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3.81,
          "StoreType": "Franchise"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 96.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 25265.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 27333.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6419.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 12370.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 52361.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 9829.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 19186.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 56124.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 51083.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 55175.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 52185.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 27372.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 35730.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 47453.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 4764.72,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 7591.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2708.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 6393.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 25863.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 162944.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 348955.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 228440.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 194377.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 195579.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 160040.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 243745.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 54.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 41.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 40.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 7.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 42.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 730,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 2755.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 22.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4982.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6843.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4576.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7282.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 5304.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3262.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 45929.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 73826.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 52496.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 43094.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 76279.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 59326.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 45167.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7607.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 32980.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 14824.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 33637.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 47602.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35434.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 48267.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 31833.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3461.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2287.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 6365.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2406.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 3005.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12041.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3404.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 543.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 213849.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 41920.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 214144.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 174735.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 27785.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 52.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 19.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 47.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Takarwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 49.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 122.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 200.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 257.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 3246.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10483.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 18280.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8214.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 46884.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8642.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24353.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 20366.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 5593.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6782.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 36250.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 171297.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 161219.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 299750.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 251438.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 186304.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 19906.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 11.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 19.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 216.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 528.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 13.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3423.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6150.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4807.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6967.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 129.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 2830.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6649.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 815.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18623.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 43806.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 52463.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 55056.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5727.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26568.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 20084.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3428.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 682.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 4523.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3470.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 710.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 280.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 94639.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 126127.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 150538.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15383.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 18049.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Teniwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 9914.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 142.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 97.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8269.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 2821.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 4855.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15958.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 15848.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 25719.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8336.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 62302.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 65873.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 42558.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 67402.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 66753.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 9637.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 28985.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 26708.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 42861.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 36248.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7681.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 15838.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6463.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19774.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 10639.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1801.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 118602,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 93283.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 100668.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 26390.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9683.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 8370.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 13772.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 104.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 28.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 22.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "SWEETS",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 10633.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 666.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 73533,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 24707.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 18271.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 71345.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 24597.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 52694.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35805.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 55314.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 38124.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 45297,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 30882.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 40762.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 19142.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 11810.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6081.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 21823.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 120730.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 51034.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 40554.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 45188.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 126747.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15763.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 3767.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15669.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 29174.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 7272.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2790.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 99.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Terwada",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 91.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 298.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 267.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 259.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2343.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 686.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 317.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 3370.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 166.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 759.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 8564.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 11902.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 9037.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1080.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 1981.73,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 54854.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 24106.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 40545.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 33762,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 42668.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 3036.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2600.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 32170.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35206.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 27800.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 34310.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 2015.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 163.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19229.82,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 6547.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8750.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 16678.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 387.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 53219.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 85337.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 111710.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 8660.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 76946.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 38544.68,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 46232.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 80.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 31.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 38.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 116.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 84.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 264.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 4250.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 3403.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2212.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 10609.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 13269.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 12467.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15691.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 6428.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 44788.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 41845.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 37743.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 48395.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 18534.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 36741.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 31705.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 6730.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 9363.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 9298.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 8743.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4913.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 198216.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 77296.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 69562.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 78297.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 97353.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 540.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35754.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 83044.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 137584.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 75683.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 140946.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 558.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 58.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 34.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 31.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 19.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thara",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 72.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 931.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 1753.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 407.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2618.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 55.93,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 1242.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 542.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 220.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19172.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 17188,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 47174.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 6162.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 231.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1157.96,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 18989.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 13033.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 103298.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 42414.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 21838.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9739.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 83726.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 36636.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 165410.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 130758,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 122504.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 119417.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 144358.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 157033.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 110754.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 159512.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 51268.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 58191.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 89769.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 102498.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 53770.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 71783.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 87874.92,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 32142.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 12552.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16953.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 48423.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 63105.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 11383.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 9615.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 46715.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1966.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 668986.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 580318.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 556545.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 475186.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 825021.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 564707.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 874315.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 541803.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 491540.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 927144.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 725788.41,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 903697.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1448931.08,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1095753.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 961512.06,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 2489563.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1599942.64,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 897022.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 1084282.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 178987.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 713.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 19784.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 31316.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 39.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 72007.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 8123.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 6649.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 50.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 75.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 50.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 75.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "Assets",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 25.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 4618.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1299.37,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 947.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 127.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 131.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 525.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 147.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 200.83,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 144.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 1143.43,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 2352.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 496.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 36340.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2521.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 33.9,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 101.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 14668.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 14403.32,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 12413.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 23026.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1012.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 12323.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 10357.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 13326.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 8646.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33647.47,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 11082.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 13298.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 14128.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 31322.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 15155.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 161898.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 107180.24,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 172149.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 170700.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 133743.39,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 152045.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 120755.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 152135.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 175473.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 37223.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 78554.34,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 47645.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 54868.29,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 58653.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 63000.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 72079.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 49657.18,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 76749.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 98585.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 89921.77,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 20374.99,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 7839.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 26968.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 4624.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20742.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 6834.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 14864.8,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7114.94,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 61694.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 42355.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 7293.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 2445.7,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 470324.56,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 651143.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1035604.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 730979.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 708058.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 692196.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 807843.52,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 244656.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1027199.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 838927.63,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 1435391.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 879739.14,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 1086430.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "July",
          "salesAmt": 912030.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1071959.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 1598201.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "August",
          "salesAmt": 366.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 127.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2022",
          "MonthName": "September",
          "salesAmt": 16.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1328.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 39487.45,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 547.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 35.17,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 6677.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Thaver",
          "LOB": "STATIONARY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1443.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 304.79,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 784.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "BAKERY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 205.74,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3639.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 9347.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 14628.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 463.65,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 1879.62,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 6315.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 76.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1166.66,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 3075.15,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 6829.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2875.27,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 2981.53,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 4574.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 8402.21,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 613.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 3446.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 2565.44,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 46950.69,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 62550.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 36295.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 17904.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 39035.31,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 50030.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 395.22,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 27030.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 7185.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 17826.4,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 26521.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19976.71,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 27032.46,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 28303.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 29397.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 1721.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 26442.12,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 14588.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 1677.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 2169.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 2306.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 6003.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 2790.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 1863.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 685.55,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 1712.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 524.11,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 150429.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 112758.86,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 57697.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 113356.42,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 288900.23,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 165983.84,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "June",
          "salesAmt": 6368.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 169527.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 69046.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "December",
          "salesAmt": 64915.25,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "November",
          "salesAmt": 40724.89,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2022",
          "MonthName": "October",
          "salesAmt": 19886.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "April",
          "salesAmt": 139607.1,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "February",
          "salesAmt": 235370.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "January",
          "salesAmt": 366071.2,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "March",
          "salesAmt": 258321.28,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Uttampur",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "May",
          "salesAmt": 66285.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 642.88,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 499.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 22218.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 50243.38,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 48240.54,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 22714.03,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 126234.05,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 20624.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 35810.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 46820.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 15907.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 26049.16,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 280.95,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 68661.02,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 269764.36,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 332741.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 342223.98,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 161719.59,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 205272.58,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 23290.26,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 45.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 30.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 30.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 30.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 814.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 799.97,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "BAKERY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 214.3,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 3591.33,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 15439.61,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23521.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 49500.85,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "DAIRY",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 690.51,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 9546,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 27626.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FASHION",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5137.87,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 57611.78,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 87037.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 122865.04,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 159225.01,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 11666.6,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 56299.07,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 53998.57,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "FMCG NON FOOD",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 5272.67,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 5619.35,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 23985.13,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 32806.5,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "GENERAL MERCHANDISE",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 1756.91,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLE",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 1404.75,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "December",
          "salesAmt": 232013.76,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "October",
          "salesAmt": 205260.19,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2023",
          "MonthName": "September",
          "salesAmt": 297357.81,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES",
          "Yr": "2024",
          "MonthName": "January",
          "salesAmt": 35423.49,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STAPLES DAIRY",
          "Yr": "2023",
          "MonthName": "August",
          "salesAmt": 33446.48,
          "StoreType": "DCS"
      },
      {
          "StoreName": "Vachhadal",
          "LOB": "STATIONARY",
          "Yr": "2023",
          "MonthName": "November",
          "salesAmt": 7.63,
          "StoreType": "DCS"
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
