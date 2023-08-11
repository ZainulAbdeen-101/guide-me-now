
import { db, Quizdata } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest,NextResponse } from "next/server";

let dataX = {heading:""};


export async function POST(request:NextRequest){

    const req = await request.json();

    dataX.heading=req.heading
    const res=await db.insert(Quizdata).values({
        heading:req.heading,
        marks:req.marks,
        correct:req.correct
        
    })


   return NextResponse.json(res);
}

export  async function GET(request:NextRequest){

    const res  = await db.select().from(Quizdata).where(eq(Quizdata.heading,dataX.heading));
    
    return NextResponse.json(res);
    
    
    } 