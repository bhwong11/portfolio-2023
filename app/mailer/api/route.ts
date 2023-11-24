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
    html: `<p>from:${email} ${emailMessage}</p>`,
  };
  console.log('EMAIL!!',process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (err: any, success:any) {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});
  const response = {
    status: 200,
    message: "success"
  }
  await new Promise((resolve, reject) => {
    transporter.sendMail(message, (err:any, info:any) => {
      if (err) {
        response.status = 500
        response.message = `Connection refused at ${err.address}`
        reject(err)
      } else {
        response.status = 200
        response.message = `Message delivered to ${info.accepted}`
        resolve(info);
      }
    });
  });
  return NextResponse.json({
      message: response.message
  },{ status: response.status })
}