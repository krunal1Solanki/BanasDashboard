import { connect } from '../../dbConfig/database';
import { NextRequest, NextResponse } from 'next/server';
import sql from 'mssql';
const moment = require('moment');

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

function getLastFirstDateOfPreviousMonth() {
const today = moment(); // Get today's date
const firstDayOfPreviousMonth = today.clone().subtract(1, 'months').startOf('month');
const lastDayOfPreviousMonth = today.clone().subtract(1, 'months').endOf('month');

const startDateString = firstDayOfPreviousMonth.format('YYYY-MM-DD');
const endDateString = lastDayOfPreviousMonth.format('YYYY-MM-DD');

console.log("AFTERRR", startDateString, endDateString);

return {
    startDateString,
    endDateString
};
}



export async function POST(request: NextRequest, params: any) {
    try {
        // Example query to fetch data from MonthWiseSales table
        console.log("INN")
        const body = await request.json();
        let { startDate, endDate } = body;

        if(!startDate && !endDate) {
            const { startDateString, endDateString } = getLastFirstDateOfPreviousMonth();
            startDate = startDateString;
            endDate = endDateString;
        }


        if (!startDate || !endDate) {
            return NextResponse.json({
                message: "Please enter complete range of date"
            })
        }
        console.log("HOME",{startDate, endDate})

        // const query3 = 'SELECT * FROM MonthWiseSales order by StoreOpenDt'
        const query3 = `SELECT * FROM MonthWiseSales WHERE Dt >= '${startDate}' AND Dt <= '${endDate}' order by StoreOpenDt`;

        // const query4 = 'SELECT * FROM [CategorWiseSales] ORDER BY ArticleNo'
        const query4 = `SELECT * FROM [CategorWiseSales] WHERE Dt >= '${startDate}' AND Dt <= '${endDate}' ORDER BY ArticleNo`


        const result3 = await executeQuery(query3);
        const data4 = await executeQuery(query4);

        return NextResponse.json({

            data3: result3,
            data4 
        });
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
        });
    }
}
