import { connect } from '../../dbConfig/database';
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

export async function POST(request: NextRequest, params: any) {
    try {
        // Example query to fetch data from MonthWiseSales table
        const body = await request.json();
        const { startDate, endDate } = body;

        if (!startDate || !endDate) {
            return NextResponse.json({
                message: "Please enter complete range of date"
            })
        }
        console.log(body)

        const query3 = `SELECT [StoreOpenDt], [StoreName], SUM(FTD) AS FTD, SUM([NOB]) AS [NOB], SUM(QTY) AS QTY,
        ABV = SUM(FTD) / SUM([NOB]),
        UPT = SUM(QTY) / SUM([NOB]),
        ASP = SUM(FTD) / SUM(QTY),
        ActMTD,
        StoreType,
        AvgSalesPerDay = ActMTD / (DATEDIFF(day, '${startDate}', '${endDate}') + 1),
        ActYTD
FROM DailySalesRpt
WHERE Dt >= '${startDate}' AND Dt <= '${endDate}'
GROUP BY [StoreOpenDt], [StoreName], ActMTD, ActYTD, StoreType
ORDER BY [StoreOpenDt], [StoreName]`;


        const result3 = await executeQuery(query3);

        return NextResponse.json({

            data3: result3
        });
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
        });
    }
}
