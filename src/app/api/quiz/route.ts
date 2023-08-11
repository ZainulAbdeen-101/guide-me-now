
import { db, Quizdata } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest,NextResponse } from "next/server";

let dataX = {heading:""};

const resX =await db.select({heading: Quizdata.heading}).from(Quizdata).where(eq(Quizdata.heading,dataX.heading));

if(resX.length==0){
    
 async function POST(request:NextRequest){

    const req = await request.json();

    dataX.heading=req.heading
<<<<<<< HEAD
     const res=await db.insert(Quizdata).values({
=======
    
    const res=await db.insert(Quizdata).values({
>>>>>>> 50e2fe5858a97f2bfbf1227be9ce68af54fec358
        heading:req.heading,
        marks:req.marks,
        correct:req.correct
        
    })


   return NextResponse.json(res);


}


} else {
     async function PATCH(request:NextRequest){

        try{
    const req = await request.json()
    const res = await db.update(Quizdata).set({
    
    heading:req.heading,
    marks:req.marks,
    correct:req.marks
    
    }).where(eq(Quizdata.heading,req.heading))
    
    return NextResponse.json(res);
        }
        catch(error:any){
            console.log(error.message);
        }
    }
    
}


export  async function GET(request:NextRequest){

    const res  = await db.select().from(Quizdata).where(eq(Quizdata.heading,dataX.heading));
    
    return NextResponse.json(res);
    
    
    } 