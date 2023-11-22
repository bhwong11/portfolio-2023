const nodemailer = require('nodemailer');
import {NextResponse } from 'next/server'
import { MailData } from '@/app/lib/types';

export async function POST(req: Request, res: Response) {
  const body: MailData = await req.json()
  const {
    email,
    subject,
    message: emailMessage
  } =  body
  const message = {
    from: email,
    to: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
    subject: subject ?? "not subject",
    text: emailMessage ?? "no message",
    html: `<p>${emailMessage}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });
  const response = {
    status: 200,
    message: "success"
  }
  transporter.sendMail(message, (err:any, info:any) => {
    if (err) {
      response.status = 500
      response.message = `Connection refused at ${err.address}`
    } else {
      response.status = 200
      response.message = `Message delivered to ${info.accepted}`
    }
  });
  return NextResponse.json({
    message: response.message
},{ status: response.status })
}