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
connect();

export async function GET(request : NextRequest) {
  try {
    // Example query to fetch data from MonthWiseSales table
    const query = 'SELECT * FROM MonthWiseSales';
    const result = await executeQuery(query);
//     const result = [{
//       "StoreName": "John",
//       "LOB": "ELECTRONICS",
//       "Yr": "2022",
//       "MonthName": "JAN",
//       "salesAmt": 120.50
//   },
//   {
//       "StoreName": "John",
//       "LOB": "CLOTHING",
//       "Yr": "2022",
//       "MonthName": "JAN",
//       "salesAmt": 89.75
//   },
//   {
//       "StoreName": "John",
//       "LOB": "GROCERY",
//       "Yr": "2022",
//       "MonthName": "FEB",
//       "salesAmt": 45.30
//   },
//   {
//     "StoreName": "Itachi",
//     "LOB": "SHARINGHAN",
//     "Yr": "2000",
//     "MonthName": "JULY",
//     "salesAmt": 99
// },
// {
//   "StoreName": "Obito",
//   "LOB": "SHARINGHAN",
//   "Yr": "2000",
//   "MonthName": "JULY",
//   "salesAmt": 100
// },
//   {
//       "StoreName": "Jane",
//       "LOB": "BOOKS",
//       "Yr": "2023",
//       "MonthName": "MAR",
//       "salesAmt": 67.80
//   },
//   {
//       "StoreName": "Jane",
//       "LOB": "TOYS",
//       "Yr": "2023",
//       "MonthName": "MAR",
//       "salesAmt": 32.40
//   },
//   {
//       "StoreName": "Jane",
//       "LOB": "GROCERY",
//       "Yr": "2023",
//       "MonthName": "APR",
//       "salesAmt": 55.90
//   },
//   {
//       "StoreName": "Robert",
//       "LOB": "FURNITURE",
//       "Yr": "2022",
//       "MonthName": "MAY",
//       "salesAmt": 180.25
//   },
//   {
//       "StoreName": "Robert",
//       "LOB": "CLOTHING",
//       "Yr": "2022",
//       "MonthName": "MAY",
//       "salesAmt": 98.50
//   },
//   {
//       "StoreName": "Robert",
//       "LOB": "ELECTRONICS",
//       "Yr": "2022",
//       "MonthName": "JUN",
//       "salesAmt": 135.75
//   },
//   {
//       "StoreName": "Sarah",
//       "LOB": "JEWELRY",
//       "Yr": "2023",
//       "MonthName": "JUL",
//       "salesAmt": 42.90
//   },
//   {
//       "StoreName": "Sarah",
//       "LOB": "CLOTHING",
//       "Yr": "2023",
//       "MonthName": "JUL",
//       "salesAmt": 75.60
//   },
//   {
//       "StoreName": "Sarah",
//       "LOB": "GROCERY",
//       "Yr": "2023",
//       "MonthName": "AUG",
//       "salesAmt": 89.30
//   },
//   {
//     "StoreName": "Kumar",
//     "LOB": "DAIRY",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 1.09
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "FASHION",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 0.59
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "FOOD",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 6.1
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "GM",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 0.87
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "NON FOOD",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 3.73
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STAPLES",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 14.67
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STAPLES DAIRY",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 12.04
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STATIONARY",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 0.03
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "SWEETS",
//     "Yr": "2022",
//     "MonthName": "AUG",
//     "salesAmt": 0
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "DAIRY",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 0.58
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "FASHION",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 0.44
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "FOOD",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 4.5
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "GM",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 0.59
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "NON FOOD",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 2.5
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STAPLES",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 14.01
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STAPLES DAIRY",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 16.84
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "STATIONARY",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 0
// },
// {
//     "StoreName": "Kumar",
//     "LOB": "SWEETS",
//     "Yr": "2022",
//     "MonthName": "SEP",
//     "salesAmt": 0
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "Pikachu",
//     "Yr": "2023",
//     "MonthName": "MAY",
//     "salesAmt": 198
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "Electronics",
//     "Yr": "2023",
//     "MonthName": "MAY",
//     "salesAmt": 120.5
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "Books",
//     "Yr": "2023",
//     "MonthName": "MAY",
//     "salesAmt": 75.2
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "Stationery",
//     "Yr": "2023",
//     "MonthName": "MAY",
//     "salesAmt": 45.7
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "DAIRY",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 3.5
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "FASHION",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 7.2
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "FOOD",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 15.8
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "GM",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 2.3
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "NON FOOD",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 5.6
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "STAPLES",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 11.9
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "STAPLES DAIRY",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 9.2
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "STATIONARY",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 1.8
// },
// {
//     "StoreName": "Prakash",
//     "LOB": "SWEETS",
//     "Yr": "2023",
//     "MonthName": "JAN",
//     "salesAmt": 0.5
// },
// {
//   "StoreName": "Michael",
//   "LOB": "HOME APPLIANCES",
//   "Yr": "2024",
//   "MonthName": "JAN",
//   "salesAmt": 210.75
// },
// {
//   "StoreName": "Michael",
//   "LOB": "FURNITURE",
//   "Yr": "2024",
//   "MonthName": "JAN",
//   "salesAmt": 150.20
// },
// {
//   "StoreName": "Michael",
//   "LOB": "ELECTRONICS",
//   "Yr": "2024",
//   "MonthName": "FEB",
//   "salesAmt": 180.50
// },
// {
//   "StoreName": "Emma",
//   "LOB": "CLOTHING",
//   "Yr": "2025",
//   "MonthName": "MAR",
//   "salesAmt": 95.80
// },
// {
//   "StoreName": "Emma",
//   "LOB": "ACCESSORIES",
//   "Yr": "2025",
//   "MonthName": "MAR",
//   "salesAmt": 32.40
// },
// {
//   "StoreName": "Emma",
//   "LOB": "TOYS",
//   "Yr": "2025",
//   "MonthName": "APR",
//   "salesAmt": 45.90
// },
// {
//   "StoreName": "Daniel",
//   "LOB": "BOOKS",
//   "Yr": "2024",
//   "MonthName": "MAY",
//   "salesAmt": 67.25
// },
// {
//   "StoreName": "Daniel",
//   "LOB": "STATIONERY",
//   "Yr": "2024",
//   "MonthName": "MAY",
//   "salesAmt": 32.50
// },
// {
//   "StoreName": "Daniel",
//   "LOB": "HOME DECOR",
//   "Yr": "2024",
//   "MonthName": "JUN",
//   "salesAmt": 105.75
// },
// {
//   "StoreName": "Olivia",
//   "LOB": "JEWELRY",
//   "Yr": "2025",
//   "MonthName": "JUL",
//   "salesAmt": 85.90
// },
// {
//   "StoreName": "Olivia",
//   "LOB": "BEAUTY",
//   "Yr": "2025",
//   "MonthName": "JUL",
//   "salesAmt": 75.60
// },
// {
//   "StoreName": "Olivia",
//   "LOB": "GROCERY",
//   "Yr": "2025",
//   "MonthName": "AUG",
//   "salesAmt": 120.30
// },
// {
//   "StoreName": "David",
//   "LOB": "HOME DECOR",
//   "Yr": "2019",
//   "MonthName": "JAN",
//   "salesAmt": 98.25
// },
// {
//   "StoreName": "David",
//   "LOB": "GROCERY",
//   "Yr": "2019",
//   "MonthName": "JAN",
//   "salesAmt": 120.50
// },
// {
//   "StoreName": "David",
//   "LOB": "ELECTRONICS",
//   "Yr": "2019",
//   "MonthName": "FEB",
//   "salesAmt": 180.75
// },
// {
//   "StoreName": "Sophia",
//   "LOB": "CLOTHING",
//   "Yr": "2020",
//   "MonthName": "MAR",
//   "salesAmt": 75.80
// },
// {
//   "StoreName": "Sophia",
//   "LOB": "ACCESSORIES",
//   "Yr": "2020",
//   "MonthName": "MAR",
//   "salesAmt": 42.40
// },
// {
//   "StoreName": "Sophia",
//   "LOB": "TOYS",
//   "Yr": "2020",
//   "MonthName": "APR",
//   "salesAmt": 65.90
// },
// {
//   "StoreName": "Christopher",
//   "LOB": "BOOKS",
//   "Yr": "2019",
//   "MonthName": "MAY",
//   "salesAmt": 87.25
// },
// {
//   "StoreName": "Christopher",
//   "LOB": "STATIONERY",
//   "Yr": "2019",
//   "MonthName": "MAY",
//   "salesAmt": 52.50
// },
// {
//   "StoreName": "Christopher",
//   "LOB": "HOME APPLIANCES",
//   "Yr": "2019",
//   "MonthName": "JUN",
//   "salesAmt": 120.75
// },
// {
//   "StoreName": "Oliver",
//   "LOB": "JEWELRY",
//   "Yr": "2020",
//   "MonthName": "JUL",
//   "salesAmt": 95.90
// },
// {
//   "StoreName": "Oliver",
//   "LOB": "BEAUTY",
//   "Yr": "2020",
//   "MonthName": "JUL",
//   "salesAmt": 85.60
// },
// {
//   "StoreName": "Oliver",
//   "LOB": "GROCERY",
//   "Yr": "2020",
//   "MonthName": "AUG",
//   "salesAmt": 150.30
// },
// {
//   "StoreName": "Oliver",
//   "LOB": "GROCERY",
//   "Yr": "1980",
//   "MonthName": "AUG",
//   "salesAmt": 150.30
// }
// ]
    return NextResponse.json({
      data: result,
    });
  } catch (err : any) {
    return NextResponse.json({
      error: err.message,
    });
  }
}
