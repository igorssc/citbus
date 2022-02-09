import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USERMAIL, // generated ethereal user
      pass: process.env.PASSMAIL // generated ethereal password
    }
  })

  await transporter
    .sendMail({
      from: `'Como criar 👻' <${process.env.USERMAIL}>`,
      to: 'igorsantoscosta@gmail.com',
      replyTo: req.body.email,
      subject: 'Hello ✔',
      text: req.body.message,
      html: `<b>${req.body.message}</b>`
    })
    .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error))
}

export default sendEmail
