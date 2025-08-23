import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log("Incoming:", name, email, message);
        // 1. Create a transporter
        const transporter = nodemailer.createTransport({
            service: "Gmail", // you can also use: 'Outlook', 'Yahoo', or custom SMTP
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        console.log(process.env.MAIL_USER, 'FROM API ')
        // 2. Send mail
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender details
            to: process.env.MAIL_USER,    // your inbox
            subject: `📩 New message from ${name}`,
            text: message, // plain text
            html: `
        <div style="font-family: sans-serif; padding: 10px;">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
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
