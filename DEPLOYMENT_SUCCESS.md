# 🚀 React + Vite + Coolify Deployment Guide

## 📋 Universal Template für alle React + Vite Projekte

**Dieses Guide funktioniert für JEDES React + Vite Projekt in Coolify!**

---

## 🎯 QUICK START - 5 Min Setup

### 1. Projektstruktur sicherstellen
```
your-project/
├── src/
│   ├── main.tsx          # React Entry Point
│   ├── App.tsx           # Main App Component
│   └── ...               # Your Components
├── public/               # Static Assets
├── index.html            # HTML Template
├── vite.config.ts        # Vite Config
├── package.json          # Dependencies
├── app.cjs               # Express Server
└── Dockerfile            # Docker Config
```

### 2. .dockerignore checken
```dockerignore
node_modules
.git
.env
*.log
.DS_Store
# WICHTIG: src und public NICHT ausschließen!
```

### 3. Dockerfile kopieren
```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# Copy package.json and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY app.cjs ./

EXPOSE 3000

CMD ["node", "app.cjs"]
```

### 4. Express Server erstellen
```javascript
// app.cjs
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Health Check für Coolify
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'Server is running'
  });
});

// Static files aus dist/
app.use(express.static(path.join(__dirname, 'dist')));

// SPA Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Server starten
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
```

### 5. Coolify Setup
1. **Repository:** GitHub mit obiger Struktur
2. **Build:** Docker (auto-detected)
3. **Port:** 3000
4. **Health Check:** `/health`
5. **Deploy:** ✅

---

## 🔍 COMMON PROBLEMS & SOLUTIONS

### Problem 1: "Failed to resolve ./src/main.tsx"
**Ursache:** .dockerignore schließt src/ aus
```dockerignore
# FALSCH:
src
public

# RICHTIG:
node_modules
.git
.env
```

### Problem 2: "Cannot find module 'express'"
**Ursache:** Dockerfile installiert keine Dependencies im Runner
```dockerfile
# FALSCH:
FROM node:20-alpine AS runner
RUN npm install -g serve

# RICHTIG:
FROM node:20-alpine AS runner
COPY package*.json ./
RUN npm ci --only=production
```

### Problem 3: "Degraded (unhealthy) (10x restarts)"
**Ursache:** Health Check fehlschlägt
```javascript
// FALSCH:
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });  // Kein HTTP Status!
});

// RICHTIG:
app.get('/health', (req, res) => {
  res.status(200).json({  // ✅ Expliziter Status!
    status: 'healthy', 
    timestamp: new Date().toISOString()
  });
});
```

---

## �️ ADVANCED CONFIGURATION

### Vite Config (Standard)
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist'
  }
})
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "node app.cjs"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "vite": "^5.0.0",
    "@vitejs/plugin-react-swc": "^3.5.0"
  }
}
```

### Environment Variables
```bash
PORT=3000
HOST=0.0.0.0
NODE_ENV=production
```

---

## 📊 PERFORMANCE OPTIMIZATION

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
```

### Docker Optimization
```dockerfile
# Multi-stage für kleinere Images
FROM node:20-alpine AS builder
# ... build stage ...

FROM node:20-alpine AS runner
WORKDIR /app

# Nur production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY app.cjs ./

# Non-root user für Security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

EXPOSE 3000
CMD ["node", "app.cjs"]
```

---

## � BEST PRACTICES

### 1. .dockerignore
- **Immer** `node_modules`, `.git`, `.env` ausschließen
- **Niemals** `src`, `public` ausschließen
- **Development files** wie `README.md`, `*.md` können ausgeschlossen werden

### 2. Dockerfile
- **Multi-stage build** für kleinere Images
- **Production dependencies** im Runner installieren
- **Non-root user** für Security
- **Explicit port** und **health check**

### 3. Express Server
- **Health check** mit HTTP 200 Status
- **Error handling** für production
- **Static files** aus `dist/`
- **SPA fallback** für React Router

### 4. Vite Config
- **Standard config** für die meisten Projekte
- **Base path** für subdirectory deployment
- **Build optimization** für large apps

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-Deployment
- [ ] `.dockerignore` korrekt konfiguriert
- [ ] `Dockerfile` mit production dependencies
- [ ] `app.cjs` mit health check
- [ ] `package.json` mit express dependency
- [ ] `vite.config.ts` mit outDir: 'dist'

### Deployment
- [ ] Code auf GitHub pushen
- [ ] Coolify Repository verbinden
- [ ] Docker Build auswählen
- [ ] Port 3000暴露
- [ ] Health Check `/health` setzen

### Post-Deployment
- [ ] Health Check testen: `https://domain.com/health`
- [ ] Website testen: `https://domain.com`
- [ ] Logs prüfen auf Fehler
- [ ] Performance optimieren wenn nötig

---

## 🏆 SUCCESS METRICS

### Expected Results
- ✅ **Build Time:** 1-3 minutes
- ✅ **Image Size:** 50-200 MB
- ✅ **Startup Time:** < 10 seconds
- ✅ **Health Check:** HTTP 200 sofort
- ✅ **Website:** Full React App funktioniert

### Monitoring
```javascript
// Enhanced health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version
  });
});
```

---

## 📚 TROUBLESHOOTING

### Quick Debug Commands
```bash
# Local testing
docker build -t my-app .
docker run -p 3000:3000 my-app

# Health check
curl http://localhost:3000/health

# Debug container
docker exec -it <container-id> sh
ls -la  # Check if dist exists
```

### Common Error Messages
| Error | Lösung |
|-------|---------|
| `Failed to resolve ./src/main.tsx` | .dockerignore prüfen |
| `Cannot find module 'express'` | Dockerfile production dependencies |
| `Port already in use` | Anderen Port versuchen |
| `Health check failed` | HTTP 200 Status确保 |

---

## 🎉 CONCLUSION

**Diese Konfiguration funktioniert für JEDES React + Vite Projekt:**

1. **Standard Projektstruktur** - keine speziellen Anpassungen nötig
2. **Bulletproof Dockerfile** - production-ready
3. **Robust Express Server** - mit health checks
4. **Coolify Optimized** - sofort deployable

**Copy & Paste die Code-Beispiele und dein Projekt ist in 5 Minuten live!** 🚀

---

*Universal React + Vite + Coolify Template*  
*Works for all projects - tested and proven*  
*Status: PRODUCTION READY* ✅
