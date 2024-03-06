import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    console.log("PATHHHHH",path)
    const isPublic = path == '/login';
    
    const token = request.cookies.get("banasToken")?.value  || '';
    console.log("BANAS TOKEN", token)
    if(!isPublic && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    } 

}
 
export const config = {
  matcher: ['/year-dashboard', '/dashboard', '/pivot', '/', ],
}