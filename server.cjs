const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Global error handler to prevent crashes
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

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

// SMTP Transporter (reusable)
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'w01a6b04.kasserver.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || 'info@unternehmensgruppe-vey.de',
      pass: process.env.EMAIL_PASS,
    },
  });
}

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;
    
    console.log('Contact request:', { name, email, service });

    if (!process.env.EMAIL_PASS) {
      console.log('EMAIL_PASS missing - skipping email send');
      return res.json({ 
        success: true, 
        message: 'Anfrage erhalten (E-Mail-Konfiguration fehlt)' 
      });
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Vey Webseite" <${process.env.EMAIL_USER || 'info@unternehmensgruppe-vey.de'}>`,
      replyTo: email,
      to: 'info@unternehmensgruppe-vey.de',
      subject: `Kontaktanfrage von ${name} - ${service || 'Allgemein'}`,
      text: `Name: ${name}\nE-Mail: ${email}\nService: ${service || 'Allgemein'}\n\nNachricht:\n${message}`,
    });

    res.json({ success: true, message: 'E-Mail erfolgreich gesendet' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Fehler beim Senden der E-Mail' });
  }
});

// Funnel endpoint
app.post('/api/funnel', async (req, res) => {
  try {
    const { name, email, phone, service, projectType, urgency, budget, location, message } = req.body;
    
    console.log('Funnel request:', { name, email, phone, service });

    if (!process.env.EMAIL_PASS) {
      console.log('EMAIL_PASS missing - skipping email send');
      return res.json({ success: true, message: 'Anfrage erhalten' });
    }

    const transporter = createTransporter();

    const emailText = [
      `=== NEUE ANFRAGE ÜBER DEN SERVICE-FUNNEL ===\n`,
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Dienstleistung: ${service}`,
      `Projekttyp: ${projectType}`,
      `Dringlichkeit: ${urgency}`,
      `Budget: ${budget}`,
      location ? `Standort/PLZ: ${location}` : '',
      message ? `\nNachricht:\n${message}` : '',
    ].filter(Boolean).join('\n');

    await transporter.sendMail({
      from: `"Vey Webseite" <${process.env.EMAIL_USER || 'info@unternehmensgruppe-vey.de'}>`,
      replyTo: email,
      to: 'info@unternehmensgruppe-vey.de',
      subject: `Service-Anfrage: ${service} - ${name}`,
      text: emailText,
    });

    res.json({ success: true, message: 'Anfrage erfolgreich gesendet' });
  } catch (error) {
    console.error('Funnel email error:', error);
    res.status(500).json({ error: 'Fehler beim Senden der Anfrage' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

// Process-level error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Don't exit the process
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit the process
});
