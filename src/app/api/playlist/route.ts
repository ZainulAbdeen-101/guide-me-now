import { db , playlistData} from "../../../lib/drizzle";
import { NextResponse,NextRequest } from "next/server";

export async function POST(request:NextRequest){

const req = await request.json();

const res = await db.insert(playlistData).values({

    id:req.id,
    url: req.url,
    heading:req.heading,
    cpercent:req.cpercent
}).returning()

return NextResponse.json(res)

}
