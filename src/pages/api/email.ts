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

  const data = JSON.parse(req.body)

  await transporter
    .sendMail({
      from: `Formulário Web <${process.env.USERMAIL}>`,
      to: 'contato@igsdesign.com.br',
      replyTo: data.email,
      subject: data.subject,
      text: data.message,
      html: `
      
      <b>Nome: </b> ${data.name},
      <br>
      <b>Email: </b> ${data.email},
      <br>
      ${data.phone ? `<b>Telefone: </b> ${data.phone},` : ''}

      <br><br>

      ${data.message}
      
      `
    })
    .then(response => {
      res.send(response)
    })
    .catch(error => res.send(error))
}

export default sendEmail
