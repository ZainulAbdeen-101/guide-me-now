import { NextRequest,NextResponse } from "next/server";


export async function POST(request:NextRequest,response:NextResponse){
const myname=await request.json()
const name =myname.name

    return NextResponse.json({
        message:`name:${name}`
    })
}