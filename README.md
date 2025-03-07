# Next.js Portfolio Deployment Guide

## 🖥️ Frontend: Next.js (Static Export Mode)
- **Framework:** Next.js 15 (React-based)
- **Mode:** `output: 'export'` (Static site)
- **CSS Handling:** Global styles via `globals.css` (served as static assets)
- **Build Process:** 
  - `npm run build` generates a **static site** in the `out/` folder.
  - No need for a Node.js server (`next start` does **not** work).

## 🌍 Hosting & Deployment
### 1️⃣ VPS (Ubuntu with PM2 & Nginx)
- **VPS Provider:** Hostinger (or your preferred VPS)
- **OS:** Ubuntu (20.04+ LTS)
- **Process Manager:** PM2 (Keeps `npx serve` running)
- **Reverse Proxy:** Nginx (Handles domain routing and HTTPS)

## 🚀 Deployment Workflow
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Build Process:**
   ```bash
   npm install
   npm run build  # Generates static files in 'out/'
   ```

3. **Serve Static Files:**
   - **Locally:**
     ```bash
     npx serve -s out -l 3000
     ```
   - **On VPS with PM2:**
     ```bash
     pm2 start "npx serve -s out -l 3000" --name "portfolio"
     pm2 save
     ```

4. **Set Up Nginx as a Reverse Proxy:**
   - Edit the Nginx config:
     ```bash
     sudo nano /etc/nginx/sites-available/portfolio
     ```
   - Add the following:
     ```nginx
     server {
         listen 80;
         server_name yourdomain.com www.yourdomain.com;

         location / {
             proxy_pass http://localhost:3000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```
   - Enable the config and restart Nginx:
     ```bash
     sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
     sudo systemctl restart nginx
     ```

## 🛠️ Key Commands for Maintenance
| Task | Command |
|------|---------|
| **Pull latest changes** | `git pull origin main` |
| **Rebuild static site** | `npm run build` |
| **Serve site locally** | `npx serve -s out -l 3000` |
| **Run site persistently on VPS** | `pm2 start "npx serve -s out -l 3000" --name "portfolio"` |
| **Restart site** | `pm2 restart portfolio` |
| **Check PM2 logs** | `pm2 logs portfolio` |
| **Check Nginx status** | `sudo systemctl status nginx` |
| **Restart Nginx** | `sudo systemctl restart nginx` |
