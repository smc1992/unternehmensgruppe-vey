# 🚀 Coolify Deployment - FINALE LÖSUNG

## ✅ Problem gelöst mit Deploy-Branch

### Das Problem:
- Coolify führte immer `npm run build` aus
- Build scheiterte: "Failed to resolve /src/main.tsx"
- Nixpacks-Konfiguration wurde ignoriert

### Die Lösung:
**Separater `deploy` Branch mit NUR den Build-Dateien**

## 📋 Coolify Konfiguration

### In Coolify einstellen:

1. **Repository:** `https://github.com/smc1992/unternehmensgruppe-vey`
2. **Branch:** `deploy` ⚠️ WICHTIG: Nicht `main`!
3. **Build Pack:** Docker
4. **Dockerfile Path:** `./Dockerfile`
5. **Port:** 80
6. **Domain:** `unternehmensgruppe-vey.de`

### Was ist im `deploy` Branch:

```
deploy/
├── out/                    # Kompletter Production Build
│   ├── index.html
│   ├── assets/
│   ├── images/
│   └── fonts/
├── Dockerfile              # Einfaches nginx Setup
├── nginx.conf              # Server Konfiguration
└── README.deploy.md        # Deploy-Dokumentation
```

**KEIN Source Code, KEIN package.json, KEIN Build-Prozess!**

## 🔄 Workflow für Updates

### 1. Entwicklung auf `main` Branch:
```bash
# Änderungen machen
npm run dev

# Build erstellen
npm run build

# Committen
git add .
git commit -m "Update: ..."
git push origin main
```

### 2. Deploy auf `deploy` Branch:
```bash
# Zu deploy Branch wechseln
git checkout deploy

# Änderungen von main mergen
git merge main

# Pushen (triggert Coolify Deployment)
git push origin deploy

# Zurück zu main
git checkout main
```

## ⚡ Vorteile dieser Lösung:

✅ **Kein Build in Coolify** - nur statische Dateien servieren  
✅ **Schnelles Deployment** - keine Dependencies installieren  
✅ **Keine Build-Fehler** - Build läuft lokal  
✅ **Konsistente Builds** - getestet vor Deployment  
✅ **Weniger Ressourcen** - nur nginx Container  

## 🎯 Erwartetes Ergebnis:

1. Coolify pullt `deploy` Branch
2. Baut Docker Image mit nginx
3. Kopiert `/out` Dateien
4. Startet nginx auf Port 80
5. Website ist live! 🎉

## 📝 Wichtige Hinweise:

- **Immer auf `main` entwickeln**
- **Builds auf `main` erstellen**
- **Nur `deploy` für Production**
- **Coolify muss auf `deploy` Branch zeigen**

## 🐛 Troubleshooting:

**Problem:** Coolify baut immer noch  
**Lösung:** Branch in Coolify auf `deploy` ändern

**Problem:** Alte Dateien werden serviert  
**Lösung:** `git merge main` in deploy Branch ausführen

**Problem:** 404 Fehler  
**Lösung:** nginx.conf prüfen, `try_files` sollte auf `/index.html` zeigen

## ✨ Das war's!

Die Website sollte jetzt in Coolify funktionieren. Der `deploy` Branch enthält alles, was Coolify braucht - keine Builds, keine Komplikationen, nur statische Dateien mit nginx.
