import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, mobile, company } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "send@stratumdynamics.com",
      to: [process.env.EMAIL_TO!],
      subject: `Contact Request from ${name}`,
      html: `
      <p><strong>Email:</strong> ${email}  
      <p><strong>Mobile:</strong> ${mobile}
      <p><strong>Company:</strong> ${company}
      </p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
