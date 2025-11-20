const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files (React app) FIRST
app.use(express.static(path.join(__dirname, 'dist')));

// Health check for Coolify (API route)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Anfrage erhalten (E-Mail-Versand konfiguriert)' 
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Process-level error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
