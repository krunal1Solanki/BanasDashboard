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

        const query3 = `SELECT [StoreOpenDt], ds.[StoreName], SUM(FTD) AS FTD, SUM([NOB]) AS [NOB], SUM(QTY) AS QTY,
        ABV = SUM(FTD) / SUM([NOB]),
        UPT = SUM(QTY) / SUM([NOB]),
        ASP = SUM(FTD) / SUM(QTY),
        dsm.ActMTD,
        StoreType,
        AvgSalesPerDay = dsm.ActMTD / DATEPART(dd,'${endDate}'),
        dsy.ActYTD
FROM DailySalesRpt ds
left join (Select [StoreName],SUM(FTD) as ActMTD from DailySalesRpt where MONTH(Dt) = MONTH('${startDate}') and Year(Dt) = Year('${startDate}') AND Dt <= '${endDate}' group by [StoreName]) dsm on dsm.[StoreName] = ds.[StoreName]
left join (Select [StoreName],SUM(FTD) as ActYTD from DailySalesRpt where Dt <= '${endDate}' group by [StoreName]) dsy on dsy.[StoreName] = ds.[StoreName]
WHERE Dt >= '${startDate}' AND Dt <= '${endDate}'
GROUP BY [StoreOpenDt], ds.[StoreName], StoreType, dsm.ActMTD, dsy.ActYTD
ORDER BY [StoreOpenDt], ds.[StoreName]`;


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
export const revalidate = 0;