# 🚀 Web-Profile

Portofolio pribadi **Dhamar (Jieehar / [@Jiee-new](https://github.com/Jiee-new))** — web & Android developer. Menampilkan proyek nyata yang sudah dirilis, keahlian, proyek yang sedang dikembangkan, serta seluruh riwayat repositori GitHub.

## ✨ Fitur Utama

- **Dark Mode:** Toggle terang/gelap yang tersimpan di `localStorage` dan mengikuti preferensi sistem saat pertama dibuka.
- **Sepenuhnya Responsif:** Tampilan rapi di desktop, tablet, dan mobile, lengkap dengan menu hamburger.
- **Animasi Reveal:** Elemen muncul halus saat di-scroll (menghormati `prefers-reduced-motion`).
- **Featured Project:** Sorotan untuk **SIA SMKN 2 Magelang** beserta tautan langsung.
- **Showcase Proyek & Repo:** Kartu proyek dengan tech stack, live demo, dan link GitHub.
- **Coming Soon:** Section proyek *ongoing* yang datanya fleksibel — tinggal edit satu array JavaScript.
- **Riwayat Repositori:** Daftar seluruh repo publik `@Jiee-new`.
- **Ringan:** Satu file HTML, tanpa build step maupun dependensi Node.js.

## 🛠️ Tech Stack

- **HTML5** — struktur website
- **CSS3 / Tailwind CSS (CDN)** — styling dan tata letak responsif
- **JavaScript (Vanilla JS)** — dark mode, menu mobile, animasi scroll, dan render kartu Coming Soon

## 🧩 Daftar Proyek

| Proyek | Status | Link |
| --- | --- | --- |
| SIA SMKN 2 Magelang | Live | [simakademik.lunaradev.my.id](https://simakademik.lunaradev.my.id/) |
| Minimalist Launcher v1.0 | Live | [Demo](https://minimalist-l-1-0.vercel.app) · [Repo](https://github.com/Jiee-new/Minimalist-L-1.0) |
| Web-Profile | Live | [Demo](https://first-project-lac-theta.vercel.app) · [Repo](https://github.com/Jiee-new/Web-Profile) |
| To-Do List React | Repo | [Repo](https://github.com/Jiee-new/to-do-list-react-projek) |
| PeTa SKANIDA | Coming Soon | [Repo](https://github.com/massmoses25-maker/Peta-skanida) *(privat)* |

## 📝 Cara Menambah / Merilis Proyek

Semua kartu **Coming Soon** dirender dari array `upcomingProjects` di bagian bawah `index.html` (di dalam `<script>`).

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

3. Simpan, lalu commit & push:

   ```bash
   git add index.html
   git commit -m "Tambah proyek: Nama Proyek"
   git push
   ```

   Vercel akan otomatis deploy dari branch `main`.

### Merilis proyek (dari Coming Soon → Proyek Pilihan)

1. Isi `demo` dengan URL live dan set `repoPrivate: false` agar tombolnya aktif.
2. Kalau sudah stabil dan ingin dipindah ke section utama, **hapus objeknya** dari `upcomingProjects`.
3. **Salin kartu** `<article>` di section `#projects` (misalnya kartu Minimalist Launcher), lalu ganti judul, deskripsi, tech, dan link-nya.
4. Commit & push kembali.

> Tips: untuk proyek yang masih privat, biarkan `repoPrivate: true` supaya pengunjung tidak menekan link 404.

## 📸 Preview

Buka `index.html` di browser untuk melihat tampilan terbaru.

## 🚀 Cara Menjalankan Secara Lokal

Tidak perlu instalasi dependensi.

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/Jiee-new/Web-Profile.git
   cd Web-Profile
   ```

2. **Buka langsung di browser:**
   ```bash
   xdg-open index.html   # Linux
   open index.html       # macOS
   ```
   Atau jalankan server statis sederhana:
   ```bash
   python3 -m http.server 8080
   ```
   Lalu buka `http://localhost:8080`.

## 📁 Struktur

```
Web-Profile/
├── index.html          # Seluruh halaman portofolio
├── JieeHar-Profile.png # Foto profil
└── README.md
```

## 🔗 Demo

- Live: [first-project-lac-theta.vercel.app](https://first-project-lac-theta.vercel.app)
- Proyek unggulan: [simakademik.lunaradev.my.id](https://simakademik.lunaradev.my.id/)

---

© 2026 Dhamar (Jieehar). Dibuat dengan HTML & Tailwind CSS.
