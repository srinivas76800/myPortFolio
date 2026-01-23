import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstname, lastname,  email, message } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"${lastname}" <${email}>`, // sender details
            to: process.env.MAIL_USER,    // your inbox
            subject: `📩 New message from ${lastname}`,
            text: message, // plain text
            html: `
        <div style="font-family: sans-serif; padding: 10px;">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${firstname}${lastname}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        </div>
      `,
        });
   return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
