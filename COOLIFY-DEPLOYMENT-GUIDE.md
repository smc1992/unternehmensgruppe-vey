# 🚀 Coolify Deployment Guide - React + Vite

## ✅ Was bereits konfiguriert ist:

### 1. **Dockerfile** (Multi-Stage Build)
- ✅ Builder Stage: Installiert Dependencies und baut die App
- ✅ Runner Stage: Serviert die gebaute App
- ✅ Port 3000 exposed

### 2. **Vite Konfiguration**
- ✅ Standard `dist/` output directory
- ✅ @ alias für saubere Imports
- ✅ React SWC Plugin für schnelle Builds

### 3. **Express Server (app.cjs)**
- ✅ Serviert statische Dateien aus `dist/`
- ✅ Health Check Endpoint: `/health`
- ✅ API Endpoints: `/api/*`

### 4. **TypeScript**
- ✅ Path mapping für @ alias
- ✅ Alle TypeScript-Fehler behoben

---

## 📋 Coolify Deployment Schritte:

### **Schritt 1: Repository in Coolify hinzufügen**
1. Gehe zu Coolify Dashboard
2. Klicke auf "New Resource" → "Application"
3. Wähle "Git Repository"
4. Verbinde dein GitHub Repository: `smc1992/unternehmensgruppe-vey`
5. Branch: `main`

### **Schritt 2: Build Konfiguration**
```
Build Pack: Dockerfile
Dockerfile Location: ./Dockerfile
Build Context: .
```

### **Schritt 3: Port Konfiguration**
```
Port: 3000
Health Check Path: /health
Health Check Method: GET
```

### **Schritt 4: Environment Variables (Optional)**
```
NODE_ENV=production
PORT=3000
EMAIL_USER=deine-email@example.com (optional)
EMAIL_PASS=dein-passwort (optional)
```

### **Schritt 5: Deploy**
1. Klicke auf "Deploy"
2. Warte auf Build-Logs
3. Überprüfe Health Check Status

---

## 🔍 Erwartete Build-Ausgabe:

```bash
# Stage 1: Builder
✓ npm ci completed
✓ npm run build completed
✓ 1049 modules transformed
✓ dist/index.html created

# Stage 2: Runner
✓ Copying dist/ folder
✓ Starting node app.cjs
✓ Server running on port 3000
```

---

## ✅ Health Check Endpoints:

- **`/health`** → `{"status":"healthy","timestamp":"..."}`
- **`/api/health`** → `{"status":"ok","timestamp":"..."}`

---

## 🐛 Troubleshooting:

### Problem: "Build failed"
**Lösung:** Überprüfe Build-Logs in Coolify
- Stelle sicher, dass `package.json` und `package-lock.json` committed sind
- Überprüfe, ob alle Dependencies installiert werden

### Problem: "Container keeps restarting"
**Lösung:** 
- Überprüfe Health Check Endpoint: `/health`
- Stelle sicher, dass Port 3000 korrekt exposed ist
- Überprüfe Container-Logs für Fehler

### Problem: "Website zeigt nur Ladebildschirm"
**Lösung:**
- Überprüfe, ob `dist/` Ordner korrekt gebaut wurde
- Stelle sicher, dass `app.cjs` aus `dist/` serviert
- Überprüfe Browser Console für JavaScript-Fehler

---

## 📊 Deployment Status Checklist:

- ✅ Dockerfile vorhanden und korrekt
- ✅ Multi-Stage Build konfiguriert
- ✅ Vite baut nach `dist/`
- ✅ Express serviert aus `dist/`
- ✅ Health Check Endpoints funktionieren
- ✅ TypeScript-Fehler behoben
- ✅ @ alias konfiguriert
- ✅ Port 3000 exposed

---

## 🎯 Nächste Schritte:

1. **Commit & Push:** Alle Änderungen sind bereits committed
2. **Coolify Setup:** Folge den Schritten oben
3. **Deploy:** Klicke auf "Deploy" in Coolify
4. **Monitor:** Überprüfe Build-Logs und Health Status

---

## 📝 Wichtige Dateien:

```
.
├── Dockerfile           # Multi-Stage Build
├── app.cjs             # Express Server
├── vite.config.ts      # Vite Konfiguration
├── tsconfig.app.json   # TypeScript Config
├── package.json        # Dependencies
└── src/
    └── main.tsx        # React Entry Point
```

---

## 🔗 Hilfreiche Links:

- Coolify Docs: https://coolify.io/docs
- Vite Docs: https://vitejs.dev/guide/
- React Docs: https://react.dev/

---

**Status:** ✅ Bereit für Deployment!

Alle notwendigen Konfigurationen sind vorhanden. 
Das Projekt folgt Industry Standards und sollte problemlos in Coolify deployen.
