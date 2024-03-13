import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<unknown> {
  const dbs = await db.task.findMany();
  return NextResponse.json({ data: dbs });
}
export async function POST(request: Request): Promise<unknown> {
  const body = await request.json();
  const data = await db.task.create({
    data: {
      content: body.content,
    },
  });
  return NextResponse.json({ data: data });
}
