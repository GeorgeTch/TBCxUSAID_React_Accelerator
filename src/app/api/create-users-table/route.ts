import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE users ( Id SERIAL PRIMARY KEY, Name varchar(255) NOT NULL, Email varchar(255) UNIQUE NOT NULL );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}