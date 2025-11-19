# 🚀 Coolify Deployment - Schritt-für-Schritt Anleitung

## 📋 Vorbereitung

### 1. Repository prüfen
Stellen Sie sicher, dass alle Dateien im Repository sind:
- ✅ `package.json` mit allen Dependencies
- ✅ `server.js` mit Backend-Code
- ✅ `Dockerfile` mit Multi-stage Build
- ✅ `index.html` und React-Source

### 2. Environment Variables vorbereiten
Sie benötigen für Nodemailer:
```
EMAIL_USER=ihre-email@gmail.com
EMAIL_PASS=ihre-app-passwort
SMTP_HOST=smtp.gmail.com (optional)
SMTP_PORT=587 (optional)
```

## 🔧 Coolify Einrichtung

### Schritt 1: Neues Projekt erstellen
1. Coolify Dashboard öffnen
2. **"New Resource"** klicken
3. **"Application"** auswählen

### Schritt 2: Git Repository verbinden
1. **GitHub** auswählen
2. Repository: `smc1992/unternehmensgruppe-vey`
3. **Branch**: `main`
4. **"Connect"** klicken

### Schritt 3: Build Konfiguration
#### WICHTIG: Docker verwenden (NICHT Nixpacks)

1. **Build Method**: **Docker**
2. **Dockerfile Path**: `./Dockerfile` (oder leer lassen)
3. **Build Context**: `/` (Root)
4. **Port**: `3000`

### Schritt 4: Environment Variables
1. **"Environment"** Tab öffnen
2. Folgende Variablen hinzufügen:
   ```
   NODE_ENV=production
   EMAIL_USER=ihre-email@gmail.com
   EMAIL_PASS=ihre-app-passwort
   ```

### Schritt 5: Domain konfigurieren
1. **"Domains"** Tab
2. **"Add Domain"**
3. Domain: `unternehmensgruppe-vey.de`
4. **HTTPS** automatisch aktivieren

## 🚀 Deployment Prozess

### Automatisch nach Push
Nachdem Sie alles konfiguriert haben:
1. Änderungen zu `main` pushen
2. Coolify erkennt automatisch den Push
3. Startet Docker Build
4. Deployed die Anwendung

### Manuell deployen
1. Im Coolify Projekt
2. **"Deploy"** Button klicken
3. **"Force Deploy"** wählen

## 🔍 Troubleshooting

### Problem: Build schlägt fehl
**Lösung:**
1. **Build Logs** prüfen
2. Sicherstellen, dass **Docker** als Build Method gewählt ist
3. **Dockerfile Path** prüfen

### Problem: Whitescreen
**Lösung:**
1. **Browser Console** öffnen (F12)
2. Auf JavaScript Fehler prüfen
3. **Network Tab** - 404 Fehler suchen

### Problem: Backend nicht erreichbar
**Lösung:**
1. Environment Variables prüfen
2. API Health Check: `https://unternehmensgruppe-vey.de/api/health`

## 📱 Coolify Mobile App

Alternative über Mobile App:
1. Coolify App öffnen
2. Projekt auswählen
3. **"Deploy"** Button
4. **"Force Deploy"**

## 🎯 Erfolgreiches Deployment

Wenn alles funktioniert:
1. ✅ Website lädt auf `unternehmensgruppe-vey.de`
2. ✅ Alle Seiten funktionieren
3. ✅ Kontaktformular sendet E-Mails
4. ✅ Backend API antwortet: `/api/health`

## 📞 Wichtige Links

- Coolify Dashboard: Ihre Coolify URL
- Build Logs: Projekt → Logs
- Environment Variables: Projekt → Environment
- Domain Settings: Projekt → Domains

## ⚡ Quick Start (Zusammenfassung)

1. **Coolify → New Application**
2. **GitHub → smc1992/unternehmensgruppe-vey → main**
3. **Build Method: Docker**
4. **Port: 3000**
5. **Environment**: EMAIL_USER, EMAIL_PASS
6. **Domain: unternehmensgruppe-vey.de**
7. **Deploy!**

Das ist der Standard-Prozess für Docker-Anwendungen in Coolify!
