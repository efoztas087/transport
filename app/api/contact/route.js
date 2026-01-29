import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { company, contact, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.STRATO_EMAIL,
        pass: process.env.STRATO_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Aanvraag" <${process.env.STRATO_EMAIL}>`,
      to: process.env.STRATO_EMAIL,
      subject: "Nieuwe offerte aanvraag",
      replyTo: email,
      text: `
Bedrijfsnaam: ${company}
Contactpersoon: ${contact}
Email: ${email}

Bericht:
${message}
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
