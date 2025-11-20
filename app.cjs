const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Health check for Coolify - MUST work!
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'Server is running',
    port: port
  });
});

// Additional health endpoints
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'API is working'
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({ 
    status: 'running', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Serve static files (React app)
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server with detailed logging
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server started successfully on port ${port}`);
  console.log(`📱 Health check: http://0.0.0.0:${port}/health`);
  console.log(`🌐 Website: http://0.0.0.0:${port}/`);
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

console.log('🔧 Starting server...');
