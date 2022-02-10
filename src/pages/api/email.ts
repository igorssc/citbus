import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOSTMAIL,
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL
    }
  })

  await transporter
    .sendMail({
      from: `Formulário Web <${process.env.USERMAIL}>`,
      to: 'contato@igsdesign.com.br',
      replyTo: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: `
      
      <b>Nome: </b> ${req.body.name},
      <br>
      <b>Email: </b> ${req.body.email},
      <br>
      ${req.body.phone ? `<b>Telefone: </b> ${req.body.phone},` : ''}

      <br><br>

      ${req.body.message}
      
      `
    })
    .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error))
}

export default sendEmail
