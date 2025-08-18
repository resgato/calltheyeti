import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Compose email HTML
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin: 0 0 12px;">New Lead Received</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Email:</strong> ${payload.email || "Not provided"}</p>
        <p><strong>Service:</strong> ${payload.service || "Not specified"}</p>
        <p><strong>ZIP:</strong> ${payload.zip || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${(payload.message || "").replace(/\n/g, "<br/>") || "No message"}</p>
        <hr style="margin: 16px 0;" />
        <p style="color:#555; font-size: 12px;">Sent from ${siteConfig.url}</p>
      </div>
    `;

    // Send email via Resend
    await resend.emails.send({
      from: `Yeti Plumbing <noreply@${new URL(siteConfig.url).hostname}>`,
      to: [siteConfig.email],
      subject: `New Lead: ${payload.service || "Service Request"} — ${payload.name}`,
      reply_to: payload.email || undefined,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead POST error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}


