import { db, profiledata } from "@/lib/drizzle"
import { profile } from "console"
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

export  async function POST(request:NextRequest){

const req=await request.json()

const res=await db.insert(profiledata).values({
    userid:req.userid,
    about:req.about,
    education:req.education,
    skills:req.communication
})

return NextResponse.json(res)

}

export async function GET(request:NextRequest,){

    const res=await db.select().from(profiledata)
    return NextResponse.json(res)

}

export async function PATCH(request:NextRequest,){
const req=await request.json()
    const res=await db.update(profiledata).set({
about:req.about,
education:req.education,
skills:req.communication
    }).where(eq(req.userid,profiledata.userid))
    return NextResponse.json(res)

}