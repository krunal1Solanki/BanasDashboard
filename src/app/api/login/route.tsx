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

export async function POST(request: NextRequest) {
    try {
        // Example query to fetch data from MonthWiseSales table
        // 1030 123const body = await request.json();
        const body = await request.json();
        const { UserName, Password } = body;

        // Using parameterized query to prevent SQL injection
        const query = `SELECT * FROM Users WHERE UserName = '${UserName}' and Password = '${Password}'`;

        const resp = await executeQuery(query);
        if (resp.length > 0) {
            const token = jwt.sign({ user: resp[0] }, 'PIKACHU', { expiresIn: '1h' });
            console.log("TOKEN",token)

            const response = NextResponse.json({
                success: true,
                user: resp[0]
            })
            response.cookies.set("banasToken", token, { httpOnly: true });

            return response;
        } else {
            return NextResponse.json({
                success: false
            })
        }
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
            success: false
        });
    }
}
