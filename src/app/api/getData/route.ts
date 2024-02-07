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

    export async function GET(request : NextRequest, params : any) {
    try {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth, 0);
        const startDateString = `${currentYear}-${currentMonth}-01`;
        const endDateString = `${currentYear}-${currentMonth}-${lastDayOfMonth.getDate()}`;

        // Example query to fetch data from MonthWiseSales table
        console.log(params);
        const query = 'SELECT * FROM MonthWiseSales';
        const result = await executeQuery(query);
    
        const query2 = 'select * from [MonthWisePAndL]';
        const result2 = await executeQuery(query2);


        const query3 = `
        SELECT [StoreOpenDt], [StoreName], SUM(FTD) AS FTD, SUM([NOB]) AS [NOB], SUM(QTY) AS QTY,
        ABV = SUM(FTD) / SUM([NOB]),
        UPT = SUM(QTY) / SUM([NOB]),
        ASP = SUM(FTD) / SUM(QTY),
        ActMTD,
        StoreType,
        AvgSalesPerDay = ActMTD / (DATEDIFF(day, '${startDateString}', '${endDateString}') + 1),
        ActYTD
        FROM DailySalesRpt
        WHERE Dt >= '${startDateString}' AND Dt <= '${endDateString}'
        GROUP BY [StoreOpenDt], [StoreName], ActMTD, ActYTD, StoreType
        ORDER BY [StoreOpenDt], [StoreName]`;

        const query4 = 'select * from [CategorWiseSales]'
        const result4 = await executeQuery(query4);
        const result3 = await executeQuery(query3);
        console.log(result3.length)

        return NextResponse.json({
        data: result,
        data2 : result2,
        data3 : result3,
        data4 : result4
        });
    } catch (err : any) {
        return NextResponse.json({
        error: err.message,
        });
    }
    }
