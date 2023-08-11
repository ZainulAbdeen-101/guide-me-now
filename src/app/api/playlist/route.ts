import { db, playlistData } from "../../../lib/drizzle";
import { NextResponse, NextRequest } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    const existingRecord = await db
      .select({ heading: playlistData.heading })
      .from(playlistData)
      .where(eq(playlistData.heading, req.heading));
    console.log(existingRecord);

    if (existingRecord.length == 0) {
      const res = await db.insert(playlistData).values({
        id: req.id,
        url: req.url,
        heading: req.heading,
        userid: req.userid,
        cpercent: req.cpercent,
      });
      return NextResponse.json(res, {
        status: 200,
        statusText: "Enrolled in course",
      });
    }

    return NextResponse.json({ message: "already enrolled in course" });
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const req = await request.json();

    const res = await db
      .update(playlistData)
      .set({
        cpercent: req.cpercent,
      })
      .where(eq(req.heading, playlistData.heading));

    return NextResponse.json(res);
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function GET(request: NextRequest) {
  try {
    const res = await db.select().from(playlistData);

    return NextResponse.json(res);
  } catch (error: any) {
    console.error(error.message);
  }
}
