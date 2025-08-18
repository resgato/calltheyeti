import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  zip?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Partial<LeadPayload>;
    if (!payload.name || !payload.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real app, forward to CRM/email. For now, log to server and return 200.
    console.log("New lead:", payload);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


