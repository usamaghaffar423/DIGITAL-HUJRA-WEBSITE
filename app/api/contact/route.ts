import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(1, "Name is required"),
  email:   z.string().email("Valid email required"),
  phone:   z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

async function notifySlack(data: { name: string; email: string; phone?: string; service?: string; message: string }) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[Slack] SLACK_WEBHOOK_URL is not set");
    return;
  }

  const serviceEmoji: Record<string, string> = {
    "POS System":             "🖥",
    "E-commerce Store":       "🌐",
    "Branding & Identity":    "🎨",
    "Social Media Marketing": "📱",
    "Product Photography":    "📸",
    "Video Editing":          "🎬",
    "Graphic Design":         "🖨",
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      blocks: [
        { type: "header", text: { type: "plain_text", text: `${serviceEmoji[data.service ?? ""] ?? "📋"} New Lead — ${data.service ?? "General Enquiry"}`, emoji: true } },
        { type: "section", fields: [
          { type: "mrkdwn", text: `*Name:*\n${data.name}` },
          { type: "mrkdwn", text: `*Email:*\n${data.email}` },
          { type: "mrkdwn", text: `*Phone:*\n${data.phone ?? "Not provided"}` },
          { type: "mrkdwn", text: `*Service:*\n${data.service ?? "Not specified"}` },
        ]},
        { type: "section", text: { type: "mrkdwn", text: `*Message:*\n${data.message}` } },
        { type: "context", elements: [{ type: "mrkdwn", text: `📍 Digital Hujra Website · ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })}` }] },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Slack webhook returned ${res.status}: ${text}`);
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten().fieldErrors }, { status: 422 });
  }

  await notifySlack(result.data).catch((err) => console.error("[Slack]", err));

  return NextResponse.json({ ok: true });
}
