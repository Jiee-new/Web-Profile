# 🚀 Web-Profile — React Edition

Portofolio pribadi **Dhamar (Jieehar / [@Jiee-new](https://github.com/Jiee-new))** — web & Android developer. Menampilkan proyek yang sudah dirilis, keahlian, proyek yang sedang dikembangkan, serta seluruh riwayat repositori GitHub.

**Live (production):** [first-project-lac-theta.vercel.app](https://first-project-lac-theta.vercel.app)

> **Branch `dev`**: versi React (Vite + Tailwind). Branch `main` masih berisi versi statis HTML selama versi React belum di-merge.

## ✨ Fitur Utama

- **React 19 + Vite 8** — UI dipecah menjadi komponen yang mudah dirawat.
- **Dark Mode** — tersimpan di `localStorage`, mengikuti preferensi sistem, dan tanpa flicker saat reload.
- **Sepenuhnya Responsif** — desktop, tablet, dan mobile, lengkap dengan menu hamburger.
- **Animasi Reveal** — komponen `Reveal` berbasis `IntersectionObserver` (menghormati `prefers-reduced-motion`).
- **Navigasi Aktif** — link navbar otomatis ter-highlight sesuai section yang terlihat.
- **Featured Project** — sorotan untuk **SIA SMKN 2 Magelang**.
- **Coming Soon** — data proyek *ongoing* terpusat di satu file.
- **Riwayat Repositori** — daftar seluruh repo publik `@Jiee-new`.
- **SEO & Social Preview** — Open Graph, Twitter Card, canonical, favicon, JSON-LD (`Person`), dan `og-image.png` 1200×630.
- **Aksesibilitas** — skip link, landmark `<main>`, `aria-expanded`/`aria-pressed`, fokus keyboard jelas, serta tutup menu dengan `Escape`.

## 🛠️ Tech Stack

- **React 19** — komponen & state
- **Vite 8** — dev server dan build
- **Tailwind CSS 3** — styling utility-first (PostCSS + Autoprefixer)
- **Vanilla JavaScript** — logika tema, observer, dan interaksi kecil

## 📁 Struktur

```
Web-Profile/
├── index.html              # Entry HTML + meta SEO/OG + JSON-LD
├── src/
│   ├── main.jsx            # Bootstrap React
│   ├── App.jsx             # Susunan section
│   ├── index.css           # Tailwind + custom styles
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ComingSoon.jsx
│   │   ├── GitHubRepos.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx
│   │   └── Icons.jsx
│   ├── data/
│   │   └── portfolio.js    # Semua data proyek, skill, repo, statistik
│   └── hooks/
│       ├── useTheme.js
│       └── useActiveSection.js
├── public/
│   ├── JieeHar-Profile.png
│   ├── og-image.png
│   └── favicon.svg
├── assets/
│   └── og-image.svg        # Sumber gambar social preview
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

## 🚀 Menjalankan

Butuh **Node.js 20.19+** (disarankan 22 LTS).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output ke dist/
npm run preview   # pratinjau hasil build
```

## 🧩 Menambah / Merilis Proyek

Semua konten proyek ada di **`src/data/portfolio.js`** — tidak perlu menyentuh komponen.

### Proyek selesai (`projects`)

Tambahkan objek baru ke array `projects`, misalnya:

```js
{
  id: 'nama-proyek',
  layout: 'banner',            // 'banner' atau 'row'
  title: 'Nama Proyek',
  eyebrow: 'Web App',
  meta: 'v1.0',
  icon: '🚀',
  bannerClass: 'bg-gradient-to-br from-slate-900 to-slate-700',
  eyebrowClass: 'text-white/50',
  metaClass: 'text-white',
  description: 'Penjelasan singkat proyek.',
  tech: ['React', 'Tailwind'],
  demo: 'https://contoh.com',
  repo: 'https://github.com/user/repo'
}
```

### Proyek ongoing (`upcomingProjects`)

Tambahkan ke array `upcomingProjects`. Kartu otomatis muncul di section **Coming Soon**:

```js
{
  id: 'proyek-baru',
  title: 'Nama Proyek',
  subtitle: 'Deskripsi singkat / instansi',
  description: 'Penjelasan 1–2 kalimat.',
  icon: '🪪',
  tech: ['Web App'],
  status: 'Dalam pengembangan',
  demo: '',                 // isi kalau sudah live
  repo: 'https://github.com/user/repo',
  repoPrivate: true         // false kalau repo sudah public
}
```

Kalau proyek sudah rilis dan ingin dipindah ke **Proyek Pilihan**: hapus dari `upcomingProjects`, lalu tambahkan ke `projects` (atau sebaliknya).

### Repo GitHub (`repos`)

Tambahkan objek ke array `repos` dengan `name`, `url`, `description`, `language`, `languageClass`, `updated`, dan `badges`.

## ▲ Deploy ke Vercel

Repo ini sudah punya `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

- Push ke **`dev`** → Vercel membuat **Preview Deployment**.
- Merge `dev` → **`main`** → jadi **Production**.
- Kalau pindah domain, ganti URL `canonical`, `og:url`, `og:image`, dan JSON-LD di `index.html`.

## 🖼️ Social Preview

`public/og-image.png` (1200×630) dipakai saat link dibagikan. Sumbernya `assets/og-image.svg`; render ulang dengan:

```bash
rsvg-convert -w 1200 -h 630 assets/og-image.svg -o public/og-image.png
```

## 🔗 Demo

- Live: [first-project-lac-theta.vercel.app](https://first-project-lac-theta.vercel.app)
- Proyek unggulan: [simakademik.lunaradev.my.id](https://simakademik.lunaradev.my.id/)

---

© 2026 Dhamar (Jieehar). Dibuat dengan React & Tailwind CSS.
