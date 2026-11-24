
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(25).optional().default(""),
  company: z.string().trim().min(2).max(150),
  website: z.string().trim().max(300).optional().default(""),
  service: z.string().trim().min(2).max(150),
  budget: z.string().trim().max(100).optional().default(""),
  description: z.string().trim().min(10).max(5000),
  website_check: z.string().optional().default("")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your form fields and try again." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website_check) {
      // Do not reveal honeypot detection to automated submissions.
      return NextResponse.json({ success: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;
    const sender = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      return NextResponse.json(
        { error: "Contact service is not configured yet." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `New TRIGXUS Inquiry: ${data.service}`,
      text: `
New website inquiry

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company: ${data.company}
Website: ${data.website || "Not provided"}

Service: ${data.service}
Budget: ${data.budget || "Not specified"}

Project Description:
${data.description}
      `
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Unable to deliver your inquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully."
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
