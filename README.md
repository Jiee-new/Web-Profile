# 🚀 Web-Profile

Portofolio pribadi **Dhamar (Jieehar / [@Jiee-new](https://github.com/Jiee-new))** — web & Android developer. Menampilkan proyek yang sudah dirilis, keahlian, proyek yang sedang dikembangkan, serta seluruh riwayat repositori GitHub.

**Live:** [first-project-lac-theta.vercel.app](https://first-project-lac-theta.vercel.app)

## ✨ Fitur Utama

- **Dark Mode:** Toggle terang/gelap yang tersimpan di `localStorage` dan mengikuti preferensi sistem saat pertama dibuka.
- **Sepenuhnya Responsif:** Tampilan rapi di desktop, tablet, dan mobile, lengkap dengan menu hamburger.
- **Animasi Reveal:** Elemen muncul halus saat di-scroll (menghormati `prefers-reduced-motion`).
- **Featured Project:** Sorotan untuk **SIA SMKN 2 Magelang** beserta tautan langsung.
- **Showcase Proyek & Repo:** Kartu proyek dengan tech stack, live demo, dan link GitHub.
- **Coming Soon:** Section proyek *ongoing* yang datanya fleksibel — tinggal edit satu array JavaScript.
- **Riwayat Repositori:** Daftar seluruh repo publik `@Jiee-new`.
- **SEO & Social Preview:** Open Graph, Twitter Card, canonical URL, favicon, JSON-LD (`Person`), dan `og-image.png` 1200×630.
- **Aksesibilitas:** Skip link, landmark `<main>`, `aria-expanded`/`aria-pressed`, fokus keyboard yang jelas, dan dukungan `prefers-reduced-motion`.
- **Tanpa CDN CSS:** Tailwind dikompilasi saat build lalu **di-inline** ke `index.html` (satu file, tanpa runtime JIT).

## 🛠️ Tech Stack

- **HTML5** — struktur website
- **Tailwind CSS 3** — dikompilasi via CLI lalu di-inline ke `index.html`
- **JavaScript (Vanilla JS)** — dark mode, menu mobile, animasi scroll, dan render kartu Coming Soon

## 🧩 Daftar Proyek

| Proyek | Status | Link |
| --- | --- | --- |
| SIA SMKN 2 Magelang | Live | [simakademik.lunaradev.my.id](https://simakademik.lunaradev.my.id/) |
| Minimalist Launcher v1.0 | Live | [Demo](https://minimalist-l-1-0.vercel.app) · [Repo](https://github.com/Jiee-new/Minimalist-L-1.0) |
| Web-Profile | Live | [Demo](https://first-project-lac-theta.vercel.app) · [Repo](https://github.com/Jiee-new/Web-Profile) |
| To-Do List React | Repo | [Repo](https://github.com/Jiee-new/to-do-list-react-projek) |
| PeTa SKANIDA | Coming Soon | [Repo](https://github.com/massmoses25-maker/Peta-skanida) *(privat)* |

## 📦 Build CSS (Penting)

CSS Tailwind **tidak lagi memakai CDN**. Hasil build sudah di-inline di dalam `index.html` di antara marker:

```html
<!-- tailwind:start -->
<style> ...hasil build... </style>
<!-- tailwind:end -->
```

Kalau kamu mengubah atau menambah class Tailwind di `index.html`, jalankan:

```bash
npm install        # sekali saja
npm run build:css  # compile + inline otomatis ke index.html
```

Script build:

- `npm run build:css` — compile `tools/input.css` → inline ke `index.html`
- `npm run watch:css` — compile otomatis saat file berubah (lalu jalankan `npm run build:css` untuk inline, atau buka `tools/build.css` secara manual)
- `npm run serve` — server lokal di `http://localhost:8080`

> Jangan edit blok `<style>` hasil build secara manual — akan tertimpa saat build berikutnya. Edit custom CSS di `tools/input.css`.

## 📝 Cara Menambah / Merilis Proyek

Semua kartu **Coming Soon** dirender dari array `upcomingProjects` di bagian bawah `index.html`.

### Menambah proyek baru (masih dikembangkan)

1. Buka `index.html`, cari `const upcomingProjects = [` .
2. Salin satu objek `{ ... }`, tempel setelah objek sebelumnya, lalu ubah isinya:

   ```js
   {
     title: "Nama Proyek",
     subtitle: "Deskripsi singkat / instansi",
     description: "Penjelasan 1–2 kalimat tentang proyek ini.",
     icon: "🚀",
     tech: ["Next.js", "Tailwind"],
     status: "Dalam pengembangan",
     demo: "",                                  // isi URL kalau sudah live
     repo: "https://github.com/user/repo",      // isi URL repo
     repoPrivate: true                          // false kalau repo sudah public
   }
   ```

3. Jalankan `npm run build:css` (kalau ada class baru), lalu commit & push:

   ```bash
   git add .
   git commit -m "Tambah proyek: Nama Proyek"
   git push
   ```

   Vercel otomatis deploy dari branch `main`.

### Merilis proyek (dari Coming Soon → Proyek Pilihan)

1. Isi `demo` dengan URL live dan set `repoPrivate: false` agar tombolnya aktif.
2. Kalau sudah stabil dan ingin dipindah ke section utama, **hapus objeknya** dari `upcomingProjects`.
3. **Salin kartu** `<article>` di section `#projects` (misalnya kartu Minimalist Launcher), lalu ganti judul, deskripsi, tech, dan link-nya.
4. Jalankan `npm run build:css`, lalu commit & push.

> Tips: untuk proyek yang masih privat, biarkan `repoPrivate: true` supaya pengunjung tidak menekan link 404.

## 🖼️ Social Preview

`og-image.png` (1200×630) dipakai untuk preview saat link dibagikan. Sumbernya ada di `og-image.svg` — kalau perlu ubah teks, edit SVG lalu render ulang:

```bash
rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png
```

Ganti URL `og:image` dan `canonical` di `index.html` kalau nanti pindah domain.

## 📁 Struktur

```
Web-Profile/
├── index.html          # Halaman utama (CSS hasil build sudah inline)
├── og-image.png        # Gambar social preview 1200x630
├── og-image.svg        # Sumber gambar social preview
├── JieeHar-Profile.png # Foto profil
├── tailwind.config.js  # Konfigurasi Tailwind
├── package.json        # Script build
├── tools/
│   ├── input.css       # Source CSS (Tailwind + custom styles)
│   └── inline-css.mjs  # Script inline hasil build ke index.html
└── README.md
```

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/Jiee-new/Web-Profile.git
   cd Web-Profile
   ```

2. **Buka langsung di browser:**
   ```bash
   xdg-open index.html   # Linux
   open index.html       # macOS
   ```
   Atau pakai `npm run serve`.

Tidak perlu install apa pun kalau hanya ingin melihat halaman — CSS sudah inline.

## 🔗 Demo

- Live: [first-project-lac-theta.vercel.app](https://first-project-lac-theta.vercel.app)
- Proyek unggulan: [simakademik.lunaradev.my.id](https://simakademik.lunaradev.my.id/)

---

© 2026 Dhamar (Jieehar). Dibuat dengan HTML & Tailwind CSS.
