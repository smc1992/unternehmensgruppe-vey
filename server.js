const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'out')));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'info@unternehmensgruppe-vey.de',
      subject: `Kontaktanfrage von ${name} - ${service || 'Allgemein'}`,
      text: `Name: ${name}\nE-Mail: ${email}\nService: ${service || 'Allgemein'}\n\nNachricht:\n${message}`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
