# 🔥 LOS - Linux Operating System

![LOS](https://img.shields.io/badge/LOS-Linux%20Operating%20System-00eaff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Professional, dark-themed single-page website for LOS** - A developer-first Linux distribution with pre-installed AI/ML tools. Universal compatibility for all PCs.

---

## 🎯 What's Included

This website features:

✅ **Single-page scrollable design** - All content on one page  
✅ **Dark, futuristic theme** - Professional tech aesthetic  
✅ **Fully responsive** - Works on desktop, tablet, mobile  
✅ **Smooth scroll navigation** - Animated section transitions  
✅ **Active section highlighting** - Navigation updates on scroll  
✅ **Real ISO download** - Direct download functionality  
✅ **SEO-optimized** - Meta tags, semantic HTML  
✅ **Fast & lightweight** - Pure HTML/CSS/JS, no frameworks  
✅ **Deployment-ready** - Works with GitHub Pages, Netlify, Vercel

---

## 📂 Folder Structure

```
los-website/
│
├── index.html          # Single-page website (all sections)
│
├── css/
│   ├── style.css       # Main theme & layout
│   └── animations.css  # Scroll animations & effects
│
├── js/
│   └── main.js         # Smooth scroll & interactive features
│
├── assets/
│   ├── images/
│   │   ├── hero-desktop.png   ← PUT YOUR SCREENSHOT HERE
│   │   └── logo.png            ← PUT YOUR LOGO HERE
│   │
│   └── iso/
│       └── LOS.iso             ← PUT YOUR ISO FILE HERE
│
└── README.md
```

---

## 📸 Adding Your Content

### 1. Add Screenshots

Take a screenshot of your LOS desktop and save it as:

```
assets/images/hero-desktop.png
```

**Recommended size:** 1920x1080px (Full HD)

### 2. Add Logo

Save your logo as:

```
assets/images/logo.png
```

**Recommended size:** 200x200px (transparent background)

### 3. Add ISO File

Place your compiled ISO in:

```
assets/iso/LOS.iso
```

The download button will automatically serve this file.

### 4. Generate Checksum

After adding the ISO, generate SHA-256 checksum:

**On Linux:**
```bash
sha256sum assets/iso/LOS.iso
```

**On Windows (PowerShell):**
```powershell
Get-FileHash -Algorithm SHA256 assets\iso\LOS.iso
```

Then paste the checksum in `index.html` (search for "SHA-256 Checksum").

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE + EASY)

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - LOS website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/los-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Access your site:**
   ```
   https://YOUR-USERNAME.github.io/los-website/
   ```

**⚠️ Note:** GitHub Pages has 100MB file size limit. If your ISO > 100MB, use Netlify instead.

---

### Option 2: Netlify (BEST FOR LARGE FILES)

1. **Sign up:** [netlify.com](https://netlify.com)

2. **Deploy via drag & drop:**
   - Compress entire folder to `.zip`
   - Drag & drop on Netlify dashboard
   - Done! Site goes live instantly

3. **Or deploy via Git:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

4. **Custom domain (optional):**
   - Buy domain (e.g., `los-linux.com`)
   - Add to Netlify: Site settings → Domain management
   - Update DNS records

**Benefits:**
- ✅ Free SSL certificate
- ✅ CDN (fast worldwide)
- ✅ No file size limits
- ✅ Instant deploys

---

## 🎨 Customization Guide

### Change Color Scheme

Edit `css/style.css` lines 1-6:

```css
:root {
  --bg: #0b0f14;        /* Background color */
  --card: #121821;      /* Card background */
  --accent: #00eaff;    /* Primary accent (cyan) */
  --text: #e6edf3;      /* Text color */
  --muted: #8b949e;     /* Secondary text */
}
```

**Example alternatives:**
- Purple theme: `--accent: #a855f7;`
- Green theme: `--accent: #10b981;`
- Orange theme: `--accent: #f97316;`

### Disable Animations

Comment out in `index.html`:

```html
<!-- <link rel="stylesheet" href="css/animations.css"> -->
```

### Update Content

All content is in `index.html` - edit text directly:
- Hero section: Lines 20-40
- Tech specs: Lines 45-110
- Comparison: Lines 115-180
- Download: Lines 185-290

---

## 🧪 Testing Locally

### Simple Python Server

```bash
cd los-website
python3 -m http.server 8000
```

Open: `http://localhost:8000`

### Node.js Server

```bash
npm install -g http-server
http-server -p 8000
```

### VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📊 Performance Optimization

### Compress Images

```bash
# Use online tools:
- TinyPNG.com
- Squoosh.app
- ImageOptim (Windows/Mac)
```

### Minify CSS/JS (Optional)

**Online tools:**
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

---

## 🐛 Troubleshooting

### Images Not Loading

**Check:**
1. Files exist in `assets/images/`
2. File names match exactly (case-sensitive)
3. File extensions correct (`.png` not `.PNG`)

### Download Not Working

**Ensure:**
1. ISO file in `assets/iso/LOS.iso`
2. File permissions (Linux): `chmod 644 assets/iso/LOS.iso`

**Alternative:** Host ISO on external service and update link in `index.html`:

```html
<a href="https://your-storage.com/LOS.iso" class="button">Download ISO</a>
```

### Smooth Scroll Not Working

Check that `scroll-behavior: smooth;` is in `css/style.css` on the `html` element.

---

## 📄 License

MIT License - Feel free to modify and use for your own OS projects!

---

## 🤝 Contributing

Want to improve this website?

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Open Pull Request

---

**Built with 💙 for developers, students, and enthusiasts | LOS - Engineered for Intelligence**

---

## 🎯 What's Included

This website features:

✅ **Dark, futuristic design** - Professional tech aesthetic  
✅ **Fully responsive** - Works on desktop, tablet, mobile  
✅ **Smooth animations** - Scroll effects, hover states, typing effects  
✅ **4 Complete Pages** - Landing, Specs, Compare, Download  
✅ **Real ISO download** - Direct download functionality  
✅ **SEO-optimized** - Meta tags, semantic HTML  
✅ **Fast & lightweight** - Pure HTML/CSS/JS, no frameworks  
✅ **Deployment-ready** - Works with GitHub Pages, Netlify, Vercel

---

## 📂 Folder Structure

```
lokeshos-website/
│
├── index.html          # Landing page with hero section
├── specs.html          # Technical specifications
├── compare.html        # Comparison with Windows/macOS/Linux
├── download.html       # ISO download + installation guide
│
├── css/
│   ├── style.css       # Main theme & layout
│   └── animations.css  # Scroll animations & effects
│
├── js/
│   └── main.js         # Interactive features
│
├── assets/
│   ├── images/
│   │   ├── hero-desktop.png   ← PUT YOUR SCREENSHOT HERE
│   │   ├── logo.png            ← PUT YOUR LOGO HERE
│   │   └── chart.png           ← (Optional)
│   │
│   └── iso/
│       └── LokeshOS-Pro.iso    ← PUT YOUR ISO FILE HERE
│
└── README.md
```

---

## 📸 Adding Your Content

### 1. Add Screenshots

Take a screenshot of your LokeshOS desktop and save it as:

```
assets/images/hero-desktop.png
```

**Recommended size:** 1920x1080 or 1600x900

### 2. Add Logo

Save your logo as:

```
assets/images/logo.png
```

**Recommended size:** 200x200 (transparent background)

### 3. Add ISO File

Place your compiled ISO in:

```
assets/iso/LokeshOS-Pro.iso
```

The download button will automatically serve this file.

### 4. Generate Checksum

After adding the ISO, generate SHA-256 checksum:

**On Linux/macOS:**
```bash
sha256sum assets/iso/LokeshOS-Pro.iso
```

**On Windows (PowerShell):**
```powershell
Get-FileHash -Algorithm SHA256 assets\iso\LokeshOS-Pro.iso
```

Then paste the checksum in `download.html` (line 35).

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE + EASY)

1. **Create GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/lokeshos-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Access your site:**
   ```
   https://YOUR-USERNAME.github.io/lokeshos-website/
   ```

**⚠️ Note:** GitHub Pages has 100MB file size limit. If your ISO > 100MB, use Netlify instead.

---

### Option 2: Netlify (BEST FOR LARGE FILES)

1. **Sign up:** [netlify.com](https://netlify.com)

2. **Deploy via drag & drop:**
   - Compress entire folder to `.zip`
   - Drag & drop on Netlify dashboard
   - Done! Site goes live instantly

3. **Or deploy via Git:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

4. **Custom domain (optional):**
   - Buy domain (e.g., `lokeshos.com`)
   - Add to Netlify: Site settings → Domain management
   - Update DNS records

**Benefits:**
- ✅ Free SSL certificate
- ✅ CDN (fast worldwide)
- ✅ No file size limits
- ✅ Instant deploys

---

### Option 3: Vercel

Similar to Netlify:

```bash
npm install -g vercel
vercel login
vercel
```

---

### Option 4: Self-Host (VPS/Server)

**Requirements:** Linux server with Nginx/Apache

1. **Upload files via SFTP/SCP:**
   ```bash
   scp -r lokeshos-website/* user@your-server.com:/var/www/html/
   ```

2. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name lokeshos.com;
       root /var/www/html/lokeshos-website;
       index index.html;
   }
   ```

3. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

---

## 🎨 Customization Guide

### Change Color Scheme

Edit `css/style.css` lines 1-6:

```css
:root {
  --bg: #0b0f14;        /* Background color */
  --card: #121821;      /* Card background */
  --accent: #00eaff;    /* Primary accent (cyan) */
  --text: #e6edf3;      /* Text color */
  --muted: #8b949e;     /* Secondary text */
}
```

**Example alternatives:**
- Purple theme: `--accent: #a855f7;`
- Green theme: `--accent: #10b981;`
- Orange theme: `--accent: #f97316;`

### Disable Animations

Comment out in `index.html`:

```html
<!-- <link rel="stylesheet" href="css/animations.css"> -->
```

### Add Google Fonts

In `<head>` of each HTML file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## 🧪 Testing Locally

### Simple Python Server

```bash
cd lokeshos-website
python3 -m http.server 8000
```

Open: `http://localhost:8000`

### Node.js Server

```bash
npm install -g http-server
http-server -p 8000
```

### VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🔧 Advanced Features You Can Add

### 1. Contact Form (using Formspree)

```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit" class="button">Send</button>
</form>
```

### 2. Google Analytics

In `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Download Counter (Firebase)

See: [Firebase Realtime Database](https://firebase.google.com/docs/database)

### 4. Terminal Animation

Add in `index.html`:

```html
<div class="terminal">
  <span class="typing">$ sudo apt install lokeshos-pro</span>
</div>
```

---

## 📊 Performance Optimization

### Compress Images

```bash
# Install ImageMagick
sudo apt install imagemagick

# Compress hero image
convert hero-desktop.png -quality 85 -strip hero-desktop.png
```

### Minify CSS/JS

**Online tools:**
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

**Or use build tools:**
```bash
npm install -g clean-css-cli uglify-js
cleancss -o style.min.css style.css
uglifyjs main.js -o main.min.js
```

### Enable Caching (Netlify)

Create `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

---

## 🐛 Troubleshooting

### Images Not Loading

**Check:**
1. Files exist in `assets/images/`
2. File names match exactly (case-sensitive)
3. File extensions correct (`.png` not `.PNG`)

**Fix:** Add `onerror` fallback:

```html
<img src="assets/images/logo.png" 
     onerror="this.src='placeholder.png'">
```

### Download Not Working

**Ensure:**
1. ISO file in `assets/iso/LokeshOS-Pro.iso`
2. File permissions (Linux): `chmod 644 assets/iso/LokeshOS-Pro.iso`
3. Server allows large file downloads

**Alternative:** Host ISO on Google Drive/Dropbox and link:

```html
<a href="https://drive.google.com/..." class="button">Download ISO</a>
```

### Animations Laggy

**Solutions:**
1. Reduce animations in `css/animations.css`
2. Remove parallax effect from `js/main.js` (line 48)
3. Disable on mobile: Add in `style.css`:

```css
@media (max-width: 768px) {
  .fade-in, .slide-in-left, .slide-in-right {
    animation: none !important;
  }
}
```

---

## 📄 License

MIT License - Feel free to modify and use for your own OS projects!

---

## 🤝 Contributing

Want to improve this website?

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Open Pull Request

---

## 📞 Support

**Questions?** Open an issue or contact:

- GitHub: [@lokeshyadav](https://github.com/lokeshyadav)
- Email: lokesh@lokeshos.dev
- Discord: [Join community](https://discord.gg/lokeshos)

---

## ⭐ Showcase

Using this template? Share your OS website! Add to this list:

- [LokeshOS Pro](https://lokeshos.pro) - Original
- Your OS here...

---

**Built with 💙 by Lokesh | Engineered for Intelligence**
