import { db, Quizdata } from "@/lib/drizzle";
import { currentUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

let dataX = { heading: "" };

export const resX = await db
  .select({ heading: Quizdata.heading })
  .from(Quizdata)
  .where(eq(Quizdata.heading, dataX.heading));
console.log(resX);

export async function POST(request: NextRequest) {
  const req = await request.json();

  dataX.heading = req.heading;
  if (resX.length === 0) {
    const res = await db.insert(Quizdata).values({
      heading: req.heading,
      marks: req.marks,
      correct: req.correct,
    });

    return NextResponse.json(res);
  }

  return NextResponse.json({});
}

export async function PATCH(request: NextRequest) {
  try {
    const req = await request.json();
    if (resX.length > 0) {
      const res = await db
        .update(Quizdata)
        .set({
          heading: req.heading,
          marks: req.marks,
          correct: req.marks,
        })
        .where(eq(Quizdata.heading, req.heading));

      return NextResponse.json(res);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function GET(request: NextRequest) {
  const user = await currentUser();
  if (user) {
    const res = await db
      .select()
      .from(Quizdata)
      .where(eq(Quizdata.heading, dataX.heading));

    return NextResponse.json(res);
  } else {
    return NextResponse.json({
      message: "UnAuthorized",
    });
  }
}
