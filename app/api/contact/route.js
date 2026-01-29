import nodemailer from "nodemailer";

export async function POST(req) {
    const { naam, email, bericht } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.strato.de",
        port: 465,
        secure: true,
        auth: {
            user: process.env.STRATO_EMAIL,
            pass: process.env.STRATO_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.STRATO_EMAIL}>`,
            to: process.env.STRATO_EMAIL,
            subject: "Nieuw contactformulier bericht",
            text: `
Naam: ${naam}
Email: ${email}

Bericht:
${bericht}
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false }, { status: 500 });
    }
}
import nodemailer from "nodemailer";

export async function POST(req) {
    const { naam, email, bericht } = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.strato.de",
        port: 465,
        secure: true,
        auth: {
            user: process.env.STRATO_EMAIL,
            pass: process.env.STRATO_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.STRATO_EMAIL}>`,
            to: process.env.STRATO_EMAIL,
            subject: "Nieuw contactformulier bericht",
            text: `
Naam: ${naam}
Email: ${email}

Bericht:
${bericht}
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false }, { status: 500 });
    }
}
