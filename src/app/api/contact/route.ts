import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { verify } from 'hcaptcha';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const secret = process.env.NEXT_PUBLIC_HCAPTCHA_SECRET!;

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_SERVER,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    secure: true, // SSL
    auth: {
        user: process.env.NEXT_PUBLIC_USER, // Your domain's email account
        pass: process.env.NEXT_PUBLIC_PWD, // The password for your domain's email account
    },
} as SMTPTransport.Options);

export async function POST(req: Request) {
    const body = await req.json()
    const { formData, token } = body;
    const { name, email, message } = formData

    transporter.verify(function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    try {
        const result = await verify(secret, token)
        if (!result.success) {
            return NextResponse.json({ message: 'Invalid captcha!' }, { status: 500 });
        }
        await transporter.sendMail({
            // This email needs to be owned
            from: process.env.NEXT_PUBLIC_USER,
            to: process.env.NEXT_PUBLIC_RECIPIENT,
            subject: `Contact Form Submission from ${name}`,
            text: `Message from ${name} (${email}):\n\n${message}`,
            replyTo: email
        });

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send message!' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await transporter.verify();
        return NextResponse.json({ message: "Connection to SMTP server succesful!" }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}