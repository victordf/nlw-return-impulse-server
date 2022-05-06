import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "85471c1bced6f4",
    pass: "7ff536cf224b88"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body } : SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Victor Martins Machado <victormachado90@gmail.com>',
      subject: 'Novo feedback',
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        subject,
        body,
        `<div>`,
      ].join('')
    })
  };
}