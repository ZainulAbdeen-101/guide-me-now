
import { db, Quizdata } from "@/lib/drizzle";
import { NextRequest,NextResponse } from "next/server";


export  async function GET(request:NextRequest){

    const res= await db.select().from(Quizdata)

    return NextResponse.json({res})
}