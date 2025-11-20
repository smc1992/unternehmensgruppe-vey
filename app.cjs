const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Health check for Coolify - ALWAYS works!
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'Server is running',
    port: port,
    dist_exists: fs.existsSync('./dist')
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'API is working'
  });
});

// Debug endpoint to check file structure
app.get('/debug', (req, res) => {
  const files = {
    root: fs.readdirSync('.'),
    dist_exists: fs.existsSync('./dist'),
    dist_contents: fs.existsSync('./dist') ? fs.readdirSync('./dist') : []
  };
  res.status(200).json(files);
});

// Check if dist exists before serving static files
if (fs.existsSync('./dist')) {
  console.log('✅ dist folder found, serving static files');
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // SPA fallback - serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  console.log('❌ dist folder not found, serving fallback page');
  
  // Fallback route when dist doesn't exist
  app.get('*', (req, res) => {
    res.send(`
      <html>
        <head><title>Vey Unternehmensgruppe</title></head>
        <body>
          <h1>🔄 Vey Unternehmensgruppe</h1>
          <p>Server is running but dist folder not found.</p>
          <p>Please check build process.</p>
          <a href="/health">Health Check</a> | 
          <a href="/debug">Debug Info</a>
        </body>
      </html>
    `);
  });
}

// Start server with detailed logging
console.log('🔧 Starting server...');
console.log(`📁 Working directory: ${process.cwd()}`);
console.log(`📁 dist exists: ${fs.existsSync('./dist')}`);

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server started successfully on port ${port}`);
  console.log(`📱 Health check: http://0.0.0.0:${port}/health`);
  console.log(`🌐 Website: http://0.0.0.0:${port}/`);
  console.log(`🐛 Debug: http://0.0.0.0:${port}/debug`);
});

// Error handling
server.on('error', (err) => {
  console.error('❌ Server failed to start:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});

console.log('🎯 Server ready to start...');
