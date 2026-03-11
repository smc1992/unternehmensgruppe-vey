const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Global error handler to prevent crashes
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Health check for Coolify
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Debug endpoint to check env vars (no secrets)
app.get('/api/debug', (req, res) => {
  res.json({
    smtp_host: process.env.SMTP_HOST || 'NOT SET (using default)',
    smtp_port: process.env.SMTP_PORT || 'NOT SET (using 465)',
    email_user: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
    email_pass: process.env.EMAIL_PASS ? 'SET (' + process.env.EMAIL_PASS.length + ' chars)' : 'NOT SET',
    node_env: process.env.NODE_ENV || 'not set',
    timestamp: new Date().toISOString()
  });
});

// SMTP Transporter with fallback (587 STARTTLS → 465 SSL)
function createTransporter(usePort = null) {
  const port = usePort || parseInt(process.env.SMTP_PORT || '587');
  const isSecure = port === 465;
  
  console.log(`Creating SMTP transporter: ${process.env.SMTP_HOST || 'w014bcc1.kasserver.com'}:${port} (${isSecure ? 'SSL' : 'STARTTLS'})`);
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'w014bcc1.kasserver.com',
    port: port,
    secure: isSecure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    auth: {
      user: process.env.EMAIL_USER || 'info@unternehmensgruppe-vey.de',
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

async function sendMailWithFallback(mailOptions) {
  // Try configured port first (default 587)
  try {
    const transporter = createTransporter();
    return await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(`SMTP port ${process.env.SMTP_PORT || '587'} failed:`, err.message);
    
    // Fallback: try the other port
    const fallbackPort = (parseInt(process.env.SMTP_PORT || '587') === 587) ? 465 : 587;
    console.log(`Trying fallback port ${fallbackPort}...`);
    
    try {
      const transporter = createTransporter(fallbackPort);
      return await transporter.sendMail(mailOptions);
    } catch (err2) {
      console.error(`SMTP fallback port ${fallbackPort} also failed:`, err2.message);
      throw err2;
    }
  }
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

    await sendMailWithFallback({
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

    const urgencyLabels = {
      'sofort': 'So schnell wie möglich',
      'bald': 'In den nächsten Wochen',
      'geplant': 'Geplant für später',
      'flexibel': 'Zeitlich flexibel'
    };

    const budgetLabels = {
      'bis-1000': 'Bis 1.000 €',
      'bis-5000': '1.000 – 5.000 €',
      'bis-15000': '5.000 – 15.000 €',
      'ueber-15000': 'Über 15.000 €',
      'unsicher': 'Noch unsicher',
      'erstmal-schauen': 'Erstmal informieren'
    };

    const urgencyDisplay = urgencyLabels[urgency] || urgency;
    const budgetDisplay = budgetLabels[budget] || budget;
    const now = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    const emailHtml = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr><td style="background:linear-gradient(135deg,#ea580c,#dc2626);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">🔔 Neue Service-Anfrage</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Eingegangen am ${now}</p>
        </td></tr>
        <tr><td style="padding:28px 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="background:#fff7ed;border:2px solid #fed7aa;border-radius:10px;padding:20px 24px;text-align:center;">
              <p style="margin:0 0 4px;color:#9a3412;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Dienstleistung</p>
              <p style="margin:0;color:#c2410c;font-size:22px;font-weight:700;">${service}</p>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 40px 0;">
          <h2 style="margin:0 0 16px;color:#1f2937;font-size:16px;font-weight:700;border-bottom:2px solid #f3f4f6;padding-bottom:8px;">📋 Projektdetails</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
            <tr><td style="padding:10px 0;color:#6b7280;width:140px;">Projekttyp</td><td style="padding:10px 0;color:#1f2937;font-weight:600;">${projectType}</td></tr>
            <tr style="background:#f9fafb;"><td style="padding:10px 8px;color:#6b7280;">Dringlichkeit</td><td style="padding:10px 8px;color:#1f2937;font-weight:600;">${urgencyDisplay}</td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;">Budget</td><td style="padding:10px 0;color:#1f2937;font-weight:600;">${budgetDisplay}</td></tr>
            ${location ? `<tr style="background:#f9fafb;"><td style="padding:10px 8px;color:#6b7280;">Standort / PLZ</td><td style="padding:10px 8px;color:#1f2937;font-weight:600;">${location}</td></tr>` : ''}
          </table>
        </td></tr>
        <tr><td style="padding:24px 40px 0;">
          <h2 style="margin:0 0 16px;color:#1f2937;font-size:16px;font-weight:700;border-bottom:2px solid #f3f4f6;padding-bottom:8px;">👤 Kontaktdaten</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
            <tr><td style="padding:10px 0;color:#6b7280;width:140px;">Name</td><td style="padding:10px 0;color:#1f2937;font-weight:600;">${name}</td></tr>
            <tr style="background:#f9fafb;"><td style="padding:10px 8px;color:#6b7280;">E-Mail</td><td style="padding:10px 8px;"><a href="mailto:${email}" style="color:#ea580c;font-weight:600;text-decoration:none;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#6b7280;">Telefon</td><td style="padding:10px 0;"><a href="tel:${phone}" style="color:#ea580c;font-weight:600;text-decoration:none;">${phone}</a></td></tr>
          </table>
        </td></tr>
        ${message ? `<tr><td style="padding:24px 40px 0;">
          <h2 style="margin:0 0 12px;color:#1f2937;font-size:16px;font-weight:700;border-bottom:2px solid #f3f4f6;padding-bottom:8px;">💬 Nachricht</h2>
          <div style="background:#f9fafb;border-radius:8px;padding:16px;color:#374151;font-size:14px;line-height:1.6;border-left:4px solid #ea580c;">${message.replace(/\n/g, '<br>')}</div>
        </td></tr>` : ''}
        <tr><td style="padding:28px 40px;text-align:center;">
          <a href="mailto:${email}?subject=Re: Ihre Anfrage – ${service}" style="display:inline-block;background:#ea580c;color:#ffffff;padding:14px 32px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;">✉️ Dem Kunden antworten</a>
        </td></tr>
        <tr><td style="background:#1f2937;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#9ca3af;font-size:12px;">Vey Unternehmensgruppe · Frankfurter Straße 3 · 36419 Buttlar</p>
          <p style="margin:4px 0 0;color:#6b7280;font-size:11px;">Automatisch generiert über unternehmensgruppe-vey.de</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const emailText = `NEUE SERVICE-ANFRAGE\n\nDienstleistung: ${service}\nProjekttyp: ${projectType}\nDringlichkeit: ${urgencyDisplay}\nBudget: ${budgetDisplay}\n${location ? 'Standort/PLZ: ' + location + '\n' : ''}\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n${message ? '\nNachricht:\n' + message : ''}`;

    await sendMailWithFallback({
      from: `"Vey Webseite" <${process.env.EMAIL_USER || 'info@unternehmensgruppe-vey.de'}>`,
      replyTo: email,
      to: 'info@unternehmensgruppe-vey.de',
      subject: `🔔 Service-Anfrage: ${service} – ${name}`,
      text: emailText,
      html: emailHtml,
    });

    res.json({ success: true, message: 'Anfrage erfolgreich gesendet' });
  } catch (error) {
    console.error('Funnel email error:', error);
    res.status(500).json({ error: 'Fehler beim Senden: ' + error.message });
  }
});

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
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
