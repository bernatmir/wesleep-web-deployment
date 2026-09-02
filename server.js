const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/contact', async (req, res) => {
  const { name, email, company, plan, message } = req.body;

  if (!name || !email || !company || !plan || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `WeSleep Contact Form <${process.env.SMTP_USER}>`,
      to: 'bernat@wesleep.pro',
      subject: `Nuevo contacto de WeSleep: ${company} (${plan})`,
      text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nPlan: ${plan}\n\nMensaje:\n${message}`,
      html: `
        <h2>Nuevo contacto desde WeSleep</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Contact backend running on http://localhost:${port}`);
});
