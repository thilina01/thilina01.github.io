# thilina01.com – Portfolio Website

This is the official portfolio website of Thilina Ranathunga, built using **Vite**, **React**, and **Tailwind CSS**, and deployed via **GitHub Actions** to **GitHub Pages** at [www.thilina01.com](https://www.thilina01.com).

---

## 🚀 Features

- 🔁 GitHub Actions CI/CD deployment
- 🌙 Dark mode with persistence
- 📱 Responsive design with mobile hamburger menu
- 🔍 Scroll spy + back-to-top button
- 📄 Publications with live links
- ⚙️ Modular and scalable architecture

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Dropdown.jsx
│   ├── Card.jsx
│   ├── BackToTopButton.jsx
├── sections/
│   ├── HeroSection.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Publications.jsx
│   └── ContactSection.jsx
├── pages/
│   └── HomePage.jsx
```

---

## 🧰 Setup & Development

### 1. Clone the repo

```bash
git clone https://github.com/thilina01/thilina01.github.io.git
cd thilina01.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the local dev server

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

> Tip: Access via LAN IP from mobile: `http://<your-ip>:3000`

---

## 🛠️ Build for Production

```bash
npm run build
```

This outputs the final static site to `/dist`.

---

## 🧑‍💻 Deploy with GitHub Actions

This project includes a GitHub Actions workflow that:

- Builds the site
- Adds a `CNAME` for your domain
- Copies `index.html` to `404.html`
- Publishes to `gh-pages`

You just need to push to `main`:

```bash
git add .
git commit -m "Update site"
git push origin main
```

---

## 🌐 Custom Domain

Your domain is automatically preserved via a `CNAME` file in the GitHub Actions step:

```yaml
- name: Set custom domain
  run: echo 'www.thilina01.com' > dist/CNAME
```

---

## 💡 Optimization Notes

- `vite.config.js` includes:
  - `usePolling: true` for Termux/Android
  - `ignored: ['**/node_modules/**', '**/dist/**']` to reduce reload lag
- Tailwind only scans `src/**/*.{js,jsx}` and `index.html`

---

## 🔐 .gitignore

```gitignore
node_modules/
dist/
.env
.vscode/
.idea/
.DS_Store
npm-debug.log*
```

---

## ✨ Deployment Result

Visit: [https://www.thilina01.com](https://www.thilina01.com)
