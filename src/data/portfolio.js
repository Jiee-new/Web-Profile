export const navItems = [
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Skill' },
  { id: 'projects', label: 'Proyek' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Kontak' },
];

export const skills = [
  {
    title: 'HTML5',
    icon: '🧱',
    iconClass: 'bg-orange-50 dark:bg-orange-500/10',
    description: 'Struktur website yang semantik, rapi, dan ramah SEO.',
  },
  {
    title: 'CSS3 / Tailwind',
    icon: '🎨',
    iconClass: 'bg-sky-50 dark:bg-sky-500/10',
    description: 'Tampilan responsif dan modern dengan utility-first CSS.',
  },
  {
    title: 'JavaScript',
    icon: '⚡',
    iconClass: 'bg-yellow-50 dark:bg-yellow-500/10',
    description: 'Interaksi, DOM manipulation, dan logika aplikasi di sisi klien.',
  },
  {
    title: 'React & Next.js',
    icon: '⚛️',
    iconClass: 'bg-cyan-50 dark:bg-cyan-500/10',
    description: 'Membangun antarmuka berbasis komponen dan aplikasi full-stack ringan.',
  },
  {
    title: 'Java / Android',
    icon: '📱',
    iconClass: 'bg-emerald-50 dark:bg-emerald-500/10',
    description: 'Aplikasi Android native, termasuk optimasi performa di perangkat low-end.',
  },
  {
    title: 'Git & Deploy',
    icon: '🚀',
    iconClass: 'bg-violet-50 dark:bg-violet-500/10',
    description: 'Version control dengan Git/GitHub dan deployment ke Vercel & Cloudflare.',
  },
];

export const featuredProject = {
  title: 'SIA SMKN 2 Magelang',
  subtitle: 'Sistem Informasi Akademik',
  description:
    'Sistem informasi akademik terpadu untuk presensi mengajar, rekapitulasi jurnal, validasi nilai, serta penerbitan rapor digital. Memiliki portal terpisah untuk siswa, guru, kepala sekolah, dan administrator — lengkap dengan verifikasi tahun ajaran.',
  features: [
    '4 portal peran: Siswa, Guru, Kepala Sekolah, Admin',
    'Presensi, jurnal KBM, nilai, dan rapor digital',
    'Arsitektur Next.js dengan render server & caching',
  ],
  tech: ['Next.js', 'React', 'Tailwind CSS', 'Cloudflare'],
  demo: 'https://simakademik.lunaradev.my.id/',
};

export const projects = [
  {
    id: 'minimalist-launcher',
    layout: 'banner',
    title: 'Minimalist Launcher',
    eyebrow: 'Android App',
    meta: 'v1.0',
    icon: '📱',
    bannerClass:
      'bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-900',
    eyebrowClass: 'text-white/50',
    metaClass: 'text-white',
    description:
      'Launcher Android minimalis yang ringan: monitor RAM & penyimpanan real-time, antarmuka bebas gangguan, dan dioptimalkan untuk perangkat berspesifikasi rendah. Dikembangkan langsung dari HP menggunakan AIDE.',
    tech: ['Java', 'Gradle', 'AIDE'],
    demo: 'https://minimalist-l-1-0.vercel.app',
    repo: 'https://github.com/Jiee-new/Minimalist-L-1.0',
  },
  {
    id: 'web-profile',
    layout: 'banner',
    title: 'Web-Profile',
    eyebrow: 'Portfolio Site',
    meta: 'Neobrutalism',
    icon: '🎨',
    bannerClass: 'bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500',
    eyebrowClass: 'text-black/50',
    metaClass: 'text-black/80',
    description:
      'Website portofolio pribadi bergaya neobrutalism dengan warna kontras dan bayangan tegas. Sepenuhnya responsif, animasi transisi halus, plus galeri proyek yang terstruktur.',
    tech: ['HTML', 'Tailwind', 'JavaScript'],
    demo: 'https://first-project-lac-theta.vercel.app',
    repo: 'https://github.com/Jiee-new/Web-Profile',
  },
  {
    id: 'todo-list-react',
    layout: 'row',
    title: 'To-Do List React',
    icon: '✅',
    iconClass: 'bg-cyan-50 dark:bg-cyan-500/10',
    description:
      'Aplikasi pencatatan tugas berbasis React untuk latihan state management, komponen, dan interaksi UI. Proyek eksplorasi React pertama yang jadi fondasi pemahaman Next.js.',
    tech: ['React', 'CSS'],
    repo: 'https://github.com/Jiee-new/to-do-list-react-projek',
  },
];

/**
 * Proyek yang sedang dikembangkan.
 * Tinggal tambah objek baru di array ini — kartu akan otomatis muncul.
 * Set `repoPrivate: false` dan isi `demo` kalau proyek sudah dirilis.
 */
export const upcomingProjects = [
  {
    id: 'peta-skanida',
    title: 'PeTa SKANIDA',
    subtitle: 'Pengelolaan Tamu SMK Negeri 2 Magelang',
    description:
      'Sistem pengelolaan tamu untuk mencatat kunjungan, menerbitkan buku tamu digital, dan merapikan administrasi tamu sekolah. Masih dalam tahap pengembangan dan akan segera dirilis.',
    icon: '🪪',
    tech: ['Web App', 'Sistem Informasi', 'SMKN 2 Magelang'],
    status: 'Dalam pengembangan',
    demo: '',
    repo: 'https://github.com/massmoses25-maker/Peta-skanida',
    repoPrivate: true,
  },
];

export const repos = [
  {
    name: 'Minimalist-L-1.0',
    url: 'https://github.com/Jiee-new/Minimalist-L-1.0',
    description:
      'Simple, fast, and minimalist Android launcher — dibangun dengan vibe coding lewat AIDE.',
    language: 'Java',
    languageClass: 'bg-orange-500',
    updated: 'Okt 2026',
    badges: [
      {
        label: 'Live di Vercel',
        className: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
  {
    name: 'Web-Profile',
    url: 'https://github.com/Jiee-new/Web-Profile',
    description:
      'Portofolio pribadi bergaya neobrutalism — responsif, interaktif, dan ringan.',
    language: 'HTML',
    languageClass: 'bg-red-500',
    updated: 'Okt 2026',
    badges: [
      {
        label: 'Live di Vercel',
        className: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      },
      {
        label: '★ 1',
        className: 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
      },
    ],
  },
  {
    name: 'to-do-list-react-projek',
    url: 'https://github.com/Jiee-new/to-do-list-react-projek',
    description: 'Web to-do list yang dibuat dengan React.',
    language: 'CSS',
    languageClass: 'bg-purple-500',
    updated: 'Nov 2026',
    badges: [
      {
        label: 'Fork',
        className: 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400',
      },
    ],
  },
];

export const stats = [
  { value: String(repos.length), label: 'Repo Publik' },
  { value: '3', label: 'Aplikasi Live' },
  { value: String(projects.length + 1), label: 'Proyek Selesai' },
  { value: String(upcomingProjects.length), label: 'Coming Soon' },
];
