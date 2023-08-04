
import { db, Quizdata } from "@/lib/drizzle";
import { NextRequest,NextResponse } from "next/server";


export  async function GET(request:NextRequest){

    const res= await db.select().from(Quizdata)

    return NextResponse.json({res})
}

export async function POST(request:NextRequest){
    const req=await request.json()

    // const res=await db.insert()
}
