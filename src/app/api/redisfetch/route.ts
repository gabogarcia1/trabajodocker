import { NextResponse } from "next/server";
import redis from "../actions";

export async function GET() {
  const count = await redis.incr("contador");
  return NextResponse.json({ count });
}