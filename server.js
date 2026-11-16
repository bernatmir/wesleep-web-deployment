const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const { Readable } = require('stream');
const { get: getBlob } = require('@vercel/blob');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const privateDocumentsDir = path.resolve(
  process.env.PRIVATE_DOCUMENTS_DIR || path.join(__dirname, '..', 'private-documents')
);
const leadDocuments = {
  wellness: {
    en: 'wesleep-b2b-en.pdf',
    es: 'wesleep-b2b-es.pdf',
    ca: 'wesleep-b2b-ca.pdf',
  },
  'private-company': {
    en: 'wesleep-private-company-en.pdf',
    es: 'wesleep-private-company-es.pdf',
    ca: 'wesleep-private-company-ca.pdf',
  },
  b2c: {
    en: 'wesleep-b2c-en.pdf',
    es: 'wesleep-b2c-es.pdf',
    ca: 'wesleep-b2c-ca.pdf',
  },
};

app.use(cors());
app.use(express.json());

app.get(['/es/pilot', '/es/pilot.html', '/en/pilot', '/en/pilot.html'], (req, res) => {
  const defaultLanguage = req.path.startsWith('/es/') ? 'es' : 'en';
  const language = ['ca', 'es', 'en'].includes(req.query.lang) ? req.query.lang : defaultLanguage;
  res.redirect(302, `/pilot.html?lang=${language}`);
});

app.get(['/pilot', '/pilot.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'pilot.html'));
});

app.use(express.static(path.join(__dirname)));

app.post('/api/lead-download', async (req, res) => {
  const { email, sector, language } = req.body;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof email !== 'string' || !emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  if (!Object.prototype.hasOwnProperty.call(leadDocuments, sector) || !['ca', 'es', 'en'].includes(language)) {
    return res.status(400).json({ error: 'A valid sector and language are required.' });
  }

  const fileName = leadDocuments[sector][language];
  res.set('Cache-Control', 'private, no-store');
  res.set('X-Content-Type-Options', 'nosniff');

  if (process.env.VERCEL) {
    try {
      const blob = await getBlob(`documents/${fileName}`, { access: 'private' });
      if (!blob || blob.statusCode !== 200) {
        return res.status(404).json({ error: 'The requested guide is not available yet.' });
      }

      res.set('Content-Type', blob.blob.contentType || 'application/pdf');
      res.set('Content-Disposition', `attachment; filename="${fileName}"`);
      return Readable.fromWeb(blob.stream).pipe(res);
    } catch (error) {
      console.error('Failed to read private Vercel Blob:', error);
      return res.status(500).json({ error: 'Private document storage is unavailable.' });
    }
  }

  const filePath = path.join(privateDocumentsDir, fileName);
  try {
    await fs.promises.access(filePath, fs.constants.R_OK);
  } catch {
    return res.status(404).json({ error: 'The requested guide is not available yet.' });
  }

  return res.download(filePath, fileName, (error) => {
    if (error && !res.headersSent) {
      console.error('Failed to deliver private guide:', error);
      res.status(500).end();
    }
  });
});

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
