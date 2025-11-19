# Vey Unternehmensgruppe - Coolify Deployment Anleitung

## 🚨 WICHTIG: Coolify Konfiguration

### Problem: Whitescreen nach Deployment
Die Website funktioniert lokal, aber zeigt in Coolify nur einen Whitescreen.

### ✅ LÖSUNG: Richtige Coolify-Einstellungen

## Coolify Projekt-Einstellungen:

### 1. Build Settings
```
Build Command: npm run build
Publish Directory: out
```

### 2. Dockerfile verwenden (EMPFOHLEN)
Coolify sollte das `Dockerfile` im Repository verwenden:
- ✅ Dockerfile vorhanden
- ✅ Nginx als Webserver
- ✅ Korrekte MIME-Types für JavaScript-Module
- ✅ SPA-Routing konfiguriert

### 3. Environment Variables
```
NODE_VERSION=18
NPM_VERSION=9
VITE_SITE_URL=https://unternehmensgruppe-vey.de
```

### 4. Port Configuration
```
Port: 80 (intern)
```

## 🔧 Deployment-Schritte in Coolify:

1. **Repository verbinden:** `https://github.com/smc1992/unternehmensgruppe-vey`
2. **Branch:** `main`
3. **Build Pack:** Docker (Dockerfile verwenden)
4. **Port Mapping:** 80 → 80 oder 443
5. **Domain:** `unternehmensgruppe-vey.de`

## 📋 Checkliste nach Deployment:

- [ ] Website lädt (kein Whitescreen)
- [ ] JavaScript wird ausgeführt
- [ ] Bilder werden angezeigt
- [ ] Routing funktioniert (z.B. `/brennholz`)
- [ ] Schriftarten laden korrekt

## 🐛 Debugging:

### Browser Console öffnen (F12):
Suchen Sie nach:
- ❌ MIME-Type Fehler: `Refused to execute script... MIME type`
- ❌ 404 Fehler: Assets nicht gefunden
- ❌ CORS Fehler: Externe Ressourcen blockiert

### Häufige Probleme:

**Problem:** JavaScript wird nicht ausgeführt (MIME-Type Error)
**Lösung:** Dockerfile verwenden (bereits vorhanden)

**Problem:** Assets nicht gefunden (404)
**Lösung:** Publish Directory auf `out` setzen

**Problem:** Routing funktioniert nicht
**Lösung:** `_redirects` Datei ist vorhanden (bereits im Build)

## 📁 Dateistruktur nach Build:

```
out/
├── index.html          # Haupt-HTML mit Loading-Indikator
├── _redirects          # SPA-Routing Regeln
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── assets/
│   ├── index-TjXRht_U.js    # React App (1.5MB)
│   └── index-mXrXT9q6.css   # Styles (38KB)
├── fonts/
│   ├── fonts.css
│   ├── pacifico-regular.woff
│   └── pacifico-regular.woff2
└── images/
    └── [alle lokalisierten Bilder]
```

## ✅ Was bereits implementiert ist:

- ✅ Alle externen CDN-Dependencies entfernt
- ✅ Lokale Schriftarten (Pacifico)
- ✅ Lokale Bilder (32 Dateien)
- ✅ SPA-Routing (_redirects)
- ✅ Dockerfile mit Nginx
- ✅ Loading-Indikator
- ✅ Error Boundary für Fehlerbehandlung

## 🚀 Nach dem Deployment:

Die Website sollte sofort laden und funktionieren. Falls nicht:

1. Überprüfen Sie die Coolify-Logs
2. Prüfen Sie die Browser Console
3. Testen Sie: `https://unternehmensgruppe-vey.de/assets/index-TjXRht_U.js`
   (sollte JavaScript-Code zeigen, nicht 404)

## 📞 Support:

Falls weiterhin Probleme auftreten, prüfen Sie:
- Coolify Build-Logs
- Nginx Error-Logs in Coolify
- Browser Network Tab (F12)
