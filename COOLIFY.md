# Vey Unternehmensgruppe - Coolify Deployment

## 🚀 Coolify-spezifische Konfiguration

### Problem: Whitescreen in Coolify
Lokal funktioniert die Seite, aber in Coolify wird nur ein Whitescreen angezeigt.

### Lösungen implementiert:

#### 1. SPA Routing Konfiguration
- `netlify.toml` - SPA Routing Regeln
- `coolify.toml` - Coolify-spezifische Konfiguration  
- `_redirects` - Fallback für Client-Seiten-Routing

#### 2. Asset-Handling
- Statische Asset-Pfade optimiert
- Konsistente Dateinamen für Caching
- Debug-Skript zur Asset-Überprüfung

#### 3. Build-Konfiguration
- Base Path auf `/` gesetzt (Coolify-kompatibel)
- Assets in `assets/` Verzeichnis
- Source Maps für Debugging

## 🔧 Coolify Einstellungen

### Build Command:
```bash
npm run build
```

### Publish Directory:
```bash
out
```

### Environment Variables:
```bash
NODE_VERSION=18
NPM_VERSION=9
```

## 🐛 Debugging in Coolify

1. **Browser Console öffnen** (F12)
2. **Debug-Meldungen prüfen:**
   - "=== COOLIFY DEBUG INFO ==="
   - Asset-Loading Status
   - JavaScript-Fehler

3. **Wichtige URLs testen:**
   - `/` - Hauptseite
   - `/assets/index-TjXRht_U.js` - JavaScript
   - `/assets/index-mXrXT9q6.css` - CSS
   - `/fonts/fonts.css` - Schriftarten

## 📋 Häufige Probleme & Lösungen

### Problem: Assets nicht gefunden
**Lösung:** `_redirects` Datei sorgt für SPA-Fallback

### Problem: Router funktioniert nicht  
**Lösung:** `BrowserRouter basename="/"` verwenden

### Problem: Environment Variables
**Lösung:** `.env` Datei mit `VITE_SITE_URL=https://unternehmensgruppe-vey.de`

## 🚀 Deployment Checkliste

- [ ] `netlify.toml` vorhanden
- [ ] `_redirects` im Build-Ordner
- [ ] `coolify-debug.js` aktiv
- [ ] Build-Verzeichnis: `out`
- [ ] Environment Variables gesetzt
- [ ] Asset-Pfade überprüft

## 📞 Support

Falls Probleme weiterhin bestehen:
1. Browser Console prüfen
2. Network Tab für Asset-Fehler
3. Debug-Skript-Ausgabe analysieren
