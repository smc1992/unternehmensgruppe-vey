const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check for Coolify (must be before static middleware)
app.get('/', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Static files (after API routes)
app.use(express.static(path.join(__dirname, 'out')));

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;
    
    console.log('Contact request:', { name, email, service });

    // Create transporter (configure with your email provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: 'info@unternehmensgruppe-vey.de',
      subject: `Kontaktanfrage von ${name} - ${service || 'Allgemein'}`,
      text: `
Name: ${name}
E-Mail: ${email}
Service: ${service || 'Allgemein'}

Nachricht:
${message}
      `,
    });

    res.json({ success: true, message: 'E-Mail erfolgreich gesendet' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
