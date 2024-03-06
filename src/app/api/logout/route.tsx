import { connect } from "../../dbConfig/database";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest,) {
    try {
       
        const response = NextResponse.json({
            message: "Logged out!",
        });

        response.cookies.set("banasToken", "", {httpOnly : true,expires : new Date(0)});
        
        return response;
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
        });
    }
}
