import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const payload = (await request.json()) as Partial<LeadPayload>;

    // Validate required fields
    if (!payload.name || !payload.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate field formats
    if (payload.name.length > 200) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 });
    }

    const phoneDigits = payload.phone.replace(/[\s\-().+]/g, "");
    if (!/^\d{7,15}$/.test(phoneDigits)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (payload.zip && !/^\d{5}(-\d{4})?$/.test(payload.zip)) {
      return NextResponse.json({ error: "Invalid ZIP code" }, { status: 400 });
    }

    if (payload.message && payload.message.length > 5000) {
      return NextResponse.json({ error: "Message is too long" }, { status: 400 });
    }

    // Compose email HTML with escaped user input
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin: 0 0 12px;">New Lead Received</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(payload.service || "Not specified")}</p>
        <p><strong>ZIP:</strong> ${escapeHtml(payload.zip || "Not provided")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(payload.message || "No message").replace(/\n/g, "<br/>")}</p>
        <hr style="margin: 16px 0;" />
        <p style="color:#555; font-size: 12px;">Sent from ${siteConfig.url}</p>
      </div>
    `;

    // Send email via Resend if available
    if (resend) {
      await resend.emails.send({
        from: "Yeti Plumbing <help@resgato.com>",
        to: [siteConfig.email],
        subject: `New Lead: ${escapeHtml(payload.service || "Service Request")}, ${escapeHtml(payload.name)}`,
        replyTo: payload.email || undefined,
        html,
      });
    } else {
      console.log("New lead (Resend not configured):", payload);
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully"
    });
  } catch (err) {
    console.error("Lead POST error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
