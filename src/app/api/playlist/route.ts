import { db , playlistData} from "../../../lib/drizzle";
import { NextResponse,NextRequest } from "next/server";
import { eq, not } from "drizzle-orm";

export async function POST(request:NextRequest){

const req = await request.json();
const existingRecord =await db.select().from(playlistData).where(not(eq(req.heading , playlistData.heading)))
if(!existingRecord){

    const res = await db.insert(playlistData).values({
    
        id:req.id,
        url: req.url,
        heading:req.heading,
        userid:req.userid,
        cpercent:req.cpercent
    })
    return NextResponse.json(res)
}
return NextResponse.json({}) 

}

export async function PATCH(request:NextRequest) {
    
const req = await request.json();
const res =  await db.update(playlistData).set({

    cpercent:req.cpercent
}).where(eq(playlistData.heading,playlistData.heading))

return NextResponse.json(res);

}

export async function GET(request:NextRequest) {
    
   const res= await db.select().from(playlistData)
    
    return NextResponse.json(res);
    
    }


