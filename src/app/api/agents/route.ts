import { NextResponse } from "next/server";
import agents from "@/data/agents.json"; // Import static JSON

export async function GET() {
  // Return the statically bundled data (works on Vercel)
  return NextResponse.json({ agents });
}
