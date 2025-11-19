# 🚀 Coolify Nixpacks Deployment

## 📋 Konfiguration

### Coolify Einstellungen:
```
Build Pack: Nixpacks (Standard)
Branch: main
Port: 3000
```

### Environment Variables:
```
NODE_ENV=production
EMAIL_USER=ihre-email@gmail.com
EMAIL_PASS=ihre-app-passwort
```

## 🔧 Was .nixpacks.toml tut:

1. **Setup:** Node.js 20 installieren
2. **Install:** `npm ci` ausführen
3. **Build:** `npm run build` (React App)
4. **Start:** Frontend + Backend gleichzeitig

## 📁 Struktur nach Build:

```
/app/
├── out/           # React Build
├── server.js      # Backend API
├── node_modules/  # Dependencies
└── package.json   # Konfiguration
```

## 🚀 Start Kommando:

```bash
npx serve -s out -l 3000 & node server.js
```

- Frontend: Port 3000 (React App)
- Backend: Port 3001 (Express API)

## ✅ Vorteile:

- Kein Docker nötig
- Automatische Dependency-Installation
- Korrekter Node.js Build
- Frontend + Backend zusammen
