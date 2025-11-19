# Vey Unternehmensgruppe - Deploy Branch

## 🚀 Production Deployment Branch

This branch contains **ONLY** the pre-built production files for deployment to Coolify.

### 📁 Contents:
- `/out/` - Complete production build
- `Dockerfile` - Simple nginx configuration
- `nginx.conf` - Server configuration
- `_redirects` - SPA routing rules

### 🔧 Coolify Configuration:

**Build Pack:** Docker  
**Dockerfile Path:** ./Dockerfile  
**Port:** 80  
**Branch:** deploy  

### 📋 Deployment Process:

1. Build locally on `main` branch: `npm run build`
2. Commit build files to `main`
3. Merge changes to `deploy` branch
4. Push `deploy` branch to trigger Coolify deployment

### ⚠️ Important:

- This branch has NO source code
- This branch has NO package.json
- This branch has NO build process
- Only serves pre-built static files from `/out`

### 🔄 Update Process:

```bash
# On main branch
npm run build
git add out/
git commit -m "Update build"
git push origin main

# Switch to deploy branch
git checkout deploy
git merge main
git push origin deploy
```

Coolify will automatically deploy when `deploy` branch is updated.
