import { connect } from '../../dbConfig/database';
import { NextRequest, NextResponse } from 'next/server';
import sql from 'mssql';
import jwt from 'jsonwebtoken'
import moment from 'moment';
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        let { startDate, endDate, selectedStoreType, selectedStores, lobValue } = body;

        if (!startDate && !endDate) {
            const { startDateString, endDateString } = getLastFirstDateOfPreviousMonth();
            startDate = startDateString;
            endDate = endDateString;
        }

        console.log(startDate, endDate, selectedStoreType, selectedStores, lobValue);

        let query = `
            SELECT * 
            FROM [ArticleWiseSales] 
            WHERE Dt >= '${startDate}' AND Dt <= '${endDate}'
            AND LOB = '${lobValue}'
        `;

        if (selectedStoreType !== 'ALL') {
            query += ` AND StoreType='${selectedStoreType}'`;
        }

        if (selectedStores.length > 0) {
            const storesCondition = selectedStores.map(store => `StoreName='${store}'`).join(' OR ');
            query += ` AND (${storesCondition})`;
        }

        console.log(query)
        const result = await executeQuery(query);

        return NextResponse.json({
            message: result
        });

    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
            success: false
        });
    }
}
