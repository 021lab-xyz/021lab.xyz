import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const BASE_ID = "appDlWAIxWvu2xFBM";
const TABLE_ID = "tblkBZ2JSqC3oUMXm";

export async function POST(req: NextRequest) {
  if (!AIRTABLE_TOKEN) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const { name, email, telegram, twitter, region, primaryFocus } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const res = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Name: name || "",
        Email: email,
        "Telegram Handle": telegram || "",
        "Twitter / X": twitter || "",
        Region: region || "",
        "Primary Focus": primaryFocus || "",
        Source: "website",
        Subscribed: true,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Airtable error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
