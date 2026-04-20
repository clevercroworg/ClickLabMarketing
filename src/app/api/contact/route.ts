import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message } = body;

    if (!email || !phone || !message) {
      return NextResponse.json(
        { error: 'Email, Phone, and Message are required fields.' },
        { status: 400 }
      );
    }

    // Formatting the email content
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
        <p>You have received a new inquiry from the ClickLab Marketing website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName || ''}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Required</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${service || 'N/A'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333; font-size: 16px;">Message / How we can help:</h3>
          <p style="white-space: pre-wrap; color: #475569; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `;

    // Send the email using Resend
    // Note: If domain is not verified, this will only work for sending to your own email address.
    const { data, error } = await resend.emails.send({
      from: 'ClickLab Website <onboarding@resend.dev>',
      to: ['contact@clicklabmarketing.com'],
      subject: `New Lead: ${firstName} ${lastName || ''} - ${company || 'New Inquiry'}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Internal Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
