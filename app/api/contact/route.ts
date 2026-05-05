import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  return NextResponse.json({ message: "Contact API is reachable" }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY:", body);
    console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend inside the handler to prevent process scope issues
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'InfyNex <noreply@infynex.org>',
      // Fallback test email added for debugging per instructions
      to: ['contact@infynex.org', 'vaibhavnevase7700@gmail.com'],
      replyTo: email,
      subject: 'New Contact Form Submission – InfyNex',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
