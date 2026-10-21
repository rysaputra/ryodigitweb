/**
 * Ryo Digital - Single Source of Truth for Content
 * Semua teks, paket, portofolio, kontak di sini
 */
export const siteData = {
  // Brand & SEO
  brand: {
    name: "Ryo Digital",
    tagline: "Kehadiran Digital yang Membangun Kepercayaan",
    description: "Studio kreatif digital & pengembangan web. Kami bangun website bisnis, landing page, katalog digital, UI/UX, dan aset kreatif untuk UMKM, startup, dan brand lokal agar terlihat profesional, credibile, dan siap bersaing.",
    keywords: "website, landing page, katalog digital, UI/UX, aset kreatif, web development, digital agency, UMKM, startup",
    ogImage: "/assets/img/og-image.svg",
    canonical: "https://ryodigital.id"
  },

  // Contact
  contact: {
    whatsapp: "6285648983077",
    whatsappDisplay: "0856 4898 3077",
    whatsappLink: "https://wa.me/6285648983077?text=Halo%20Ryo%20Digital%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20website%20untuk%20bisnis%20saya.",
    email: "ryosaputraofficial@gmail.com",
    emailLink: "mailto:ryosaputraofficial@gmail.com?subject=Konsultasi%20Website%20Ryo%20Digital&body=Halo%20Tim%20Ryo%20Digital%2C%0A%0ASaya%20ingin%20bertanya%20tentang%3A",
    address: "Jl. Puntadewa No.12, Bunton, Sidorahayu, Kec. Wagir, Kabupaten Malang, Jawa Timur 65158",
    mapsLink: "https://maps.app.goo.gl/eiwSnTE2cq3F85We6",
    social: {
      instagram: "https://instagram.com/ryodigital",
      tiktok: "https://tiktok.com/@ryodigital"
    }
  },

  // Navigation
  nav: {
    logo: "Ryo Digital",
    links: [
      { href: "#layanan", label: "Layanan" },
      { href: "#portofolio", label: "Portofolio" },
      { href: "#proses", label: "Proses" },
      { href: "#paket", label: "Paket" },
      { href: "#lokasi", label: "Lokasi" },
      { href: "#faq", label: "FAQ" },
      { href: "#kontak", label: "Kontak" }
    ],
    cta: { label: "Konsultasi Gratis", href: "#", action: "whatsapp" }
  },

  // Hero Section
  hero: {
    headline: "Website Bukan Cuma Kode.<br>Ini <span class=\"gradient-text\">Kredibilitas</span> Bisnis Anda.",
    subheadline: "Hadirkan brand Anda dengan tampilan profesional, cepat, dan mobile-first yang mengubah pengunjung jadi pelanggan.",
    ctaPrimary: { label: "Konsultasi Gratis via WhatsApp", href: "#", action: "whatsapp", icon: "whatsapp" },
    ctaSecondary: { label: "Lihat Karya Kami", href: "#portofolio", action: "scroll", icon: "arrow-right" },
    mockup: {
      alt: "Mockup website Ryo Digital di frame browser dan mobile",
      frames: [
        { type: "browser", src: "/assets/img/mockup-hero-browser.svg" },
        { type: "mobile", src: "/assets/img/mockup-hero-mobile.svg" }
      ]
    },
    stats: [
      { value: "50+", label: "Proyek Selesai" },
      { value: "98%", label: "Kepuasan Klien" },
      { value: "< 14", label: "Hari Rata-rata" },
      { value: "100%", label: "Mobile-First" }
    ]
  },

  // Marquee
  marquee: {
    label: "Kami melayani bisnis di bidang:",
    items: [
      "Restoran & Kafe", "Kecantikan & Spa", "Fashion & Retail",
      "Properti & Real Estate", "Pendidikan & Kursus", "Kesehatan & Klinik",
      "Travel & Hospitality", "Teknologi & Startup", "Event & Entertainment",
      "Personal Brand & Kreator", "Jasa & Konsultansi", "Organisasi Nirlaba"
    ]
  },

  // Services (Bento Grid)
  services: [
    {
      id: "website-bisnis",
      title: "Website Bisnis",
      description: "Website perusahaan/profil lengkap: halaman beranda, tentang kami, layanan, galeri, blog/artikel, kontak, SEO on-page, CMS mudah kelola.",
      icon: "globe",
      features: ["Multi-halaman", "CMS (WordPress/Headless)", "SEO Ready", "Responsive"],
      category: "core"
    },
    {
      id: "landing-page",
      title: "Landing Page",
      description: "Halaman mati (one-page) konversi tinggi untuk kampanye iklan, launching produk, pendaftaran event, atau lead generation.",
      icon: "target",
      features: ["Konversi Tinggi", "A/B Test Ready", "Fast Loading", "Form Integrasi"],
      category: "core"
    },
    {
      id: "katalog-digital",
      title: "Katalog Digital",
      description: "Katalog produk/interaktif: filter kategori, pencarian, detail produk, keranjang/inquiry WhatsApp, update mudah via spreadsheet/CMS.",
      icon: "book-open",
      features: ["Filter & Search", "WhatsApp Order", "Auto-update CSV", "Offline Ready"],
      category: "core"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Riset user, wireframe, prototipe interaktif, design system, usability testing, handoff developer. Fokus pengalaman pengguna yang mulus.",
      icon: "pen-tool",
      features: ["User Research", "Prototyping", "Design System", "Usability Test"],
      category: "design"
    },
    {
      id: "aset-kreatif",
      title: "Aset Kreatif Digital",
      description: "Logo & brand identity, ilustrasi, ikon kustom, banner media sosial, presentasi pitch deck, motion graphics ringan, video pendek.",
      icon: "image",
      features: ["Brand Identity", "Social Assets", "Pitch Deck", "Motion Design"],
      category: "design"
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      description: "Integrasi AI: chatbot WhatsApp/Web, content generator, auto-reply lead, workflow automation (n8n/Make), analitik prediktif ringan.",
      icon: "cpu",
      features: ["Chatbot AI", "Content AI", "Workflow Auto", "Analytics"],
      category: "tech"
    }
  ],

  // Portfolio
  portfolio: [
    {
      id: "varval-salon",
      title: "Varval Salon & Spa",
      category: "Website Bisnis + Booking",
      description: "Website salon kecantikan dengan sistem booking online, galeri layanan, tim stylist, testimoni, dan integrasi WhatsApp.",
      image: "/assets/img/portfolio-varval.svg",
      tags: ["Website Bisnis", "Booking System", "WhatsApp API"],
      demo: true,
      demoLabel: "Demo Project",
      link: "#",
      metrics: { visitors: "2.3K/bln", conversion: "12%", speed: "92" }
    },
    {
      id: "eryna-salon",
      title: "Eryna Salon",
      category: "Landing Page + Katalog",
      description: "Landing page kampanye promosi perawatan wajah + katalog digital layanan dengan filter kategori dan order via WhatsApp.",
      image: "/assets/img/portfolio-eryna.svg",
      tags: ["Landing Page", "Katalog Digital", "Lead Gen"],
      demo: true,
      demoLabel: "Demo Project",
      link: "#",
      metrics: { visitors: "1.8K/bln", conversion: "15%", speed: "95" }
    },
    {
      id: "pandawa-city",
      title: "Pandawa City Side",
      category: "Website Properti",
      description: "Website properti dengan listing unit, filter harga/tipe, virtual tour 360°, kalkulator cicilan, dan form kunjungan.",
      image: "/assets/img/portfolio-pandawa.svg",
      tags: ["Website Bisnis", "Property Listing", "Virtual Tour"],
      demo: true,
      demoLabel: "Demo Project",
      link: "#",
      metrics: { visitors: "3.1K/bln", conversion: "8%", speed: "88" }
    },
    {
      id: "training-drone",
      title: "Training Drone",
      category: "Website Kursus + LMS",
      description: "Platform kursus drone: katalog modul, pembayaran, akses video, sertifikat digital, progress tracking, dashboard admin.",
      image: "/assets/img/portfolio-drone.svg",
      tags: ["LMS", "Pembayaran", "Sertifikat Digital"],
      demo: true,
      demoLabel: "Demo Project",
      link: "#",
      metrics: { visitors: "950/bln", conversion: "18%", speed: "90" }
    },
    {
      id: "traning-kota",
      title: "Training Kota",
      category: "Website Training & Kursus",
      description: "Website training dan kursus dengan pendaftaran online, jadwal pelatihan, dan informasi lengkap untuk peserta.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftraningkota.my.id?w=800&h=500",
      tags: ["Training", "Kursus", "Pendaftaran Online"],
      demo: false,
      demoLabel: "Live Project",
      link: "https://traningkota.my.id",
      metrics: { visitors: "Live", conversion: "Online", speed: "Fast" }
    },
    {
      id: "sertifikasi-p3k-limited",
      title: "Sertifikasi P3K Limited",
      category: "Website Sertifikasi & Training",
      description: "Platform sertifikasi P3K dengan informasi pelatihan, pendaftaran peserta, dan sertifikat digital.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsertifikasip3klimited.my.id?w=800&h=500",
      tags: ["Sertifikasi", "P3K", "Pelatihan"],
      demo: false,
      demoLabel: "Live Project",
      link: "https://sertifikasip3klimited.my.id",
      metrics: { visitors: "Live", conversion: "Online", speed: "Fast" }
    },
    {
      id: "training-ahli-k3-umum",
      title: "Training Ahli K3 Umum",
      category: "Website Training K3",
      description: "Website pelatihan Ahli K3 Umum dengan modul materi, jadwal, pendaftaran peserta, dan sertifikasi.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftrainingahlik3umum.my.id?w=800&h=500",
      tags: ["Ahli K3", "Training", "Sertifikasi"],
      demo: false,
      demoLabel: "Live Project",
      link: "https://trainingahlik3umum.my.id",
      metrics: { visitors: "Live", conversion: "Online", speed: "Fast" }
    }
  ],

  // Why Choose Us
  whyUs: [
    {
      id: "credibility",
      title: "Kredibilitas Instan",
      description: "Website profesional = bisnis dipercaya. Desain yang konsisten dengan brand Anda membangun kepercayaan pelanggan sejak detik pertama.",
      icon: "shield-check"
    },
    {
      id: "speed",
      title: "Cepat & Efisien",
      description: "Proses standar 7-14 hari. Workflow terbukti, komunikasi jelas, revisi terbatas tapi cukup. Tidak ada lama-lama tanpa kabar.",
      icon: "zap"
    },
    {
      id: "mobile-first",
      title: "Mobile-First Benar",
      description: "Bukan sekadar responsif. Dirancang dari mobile dulu: performa, UX, touch target, loading cepat di jaringan 3G/4G.",
      icon: "smartphone"
    },
    {
      id: "support",
      title: "Support Pasca Launch",
      description: "30 hari support gratis: perbaikan bug, pelatihan CMS, minor tweak. Opsi maintenance bulanan tersedia dengan harga terjangkau.",
      icon: "headphones"
    }
  ],

  // Process
  process: [
    {
      step: 1,
      title: "Konsultasi & Riset",
      description: "Panggilan 30-45 menit: paham bisnis, target audiens, kompetitor, tujuan, konten siap, timeline, budget. Output: proposal & kontrak.",
      icon: "message-square",
      duration: "1-2 Hari"
    },
    {
      step: 2,
      title: "Desain & Prototipe",
      description: "Wireframe → UI design (Figma) → prototipe interaktif. Review 2x revisi mayor. Approve desain sebelum development.",
      icon: "figma",
      duration: "3-5 Hari"
    },
    {
      step: 3,
      title: "Pengembangan",
      description: "Coding: HTML/CSS/JS vanilla atau WordPress/Headless CMS. Clean code, semantic, accessible, SEO-ready, performa 90+.",
      icon: "code",
      duration: "5-7 Hari"
    },
    {
      step: 4,
      title: "QA & Revisi",
      description: "Testing cross-browser, device, kecepatan, aksesibilitas, form, link. Revisi minor 1 ronde (termasuk di kontrak).",
      icon: "check-circle",
      duration: "1-2 Hari"
    },
    {
      step: 5,
      title: "Launching & Handover",
      description: "Deploy hosting/domain, konfigurasi SSL, analytics, search console, backup. Handover akses + video panduan CMS.",
      icon: "rocket",
      duration: "1 Hari"
    }
  ],

  // Packages
  packages: [
    {
      id: "basic",
      name: "Basic",
      subtitle: "Website Satu Halaman",
      price: "Mulai dari Rp 2.500.000",
      priceNote: "Harga final sesuai kompleksitas",
      popular: false,
      features: [
        "Landing Page 1 halaman (max 6 section)",
        "Desain custom (Figma → Code)",
        "Responsive mobile & desktop",
        "Form kontak + WhatsApp",
        "SEO on-page dasar",
        "Deploy hosting + domain 1 thn",
        "30 hari support gratis",
        "1x revisi mayor desain"
      ],
      cta: { label: "Mulai Basic", action: "whatsapp", params: "paket=Basic" }
    },
    {
      id: "starter",
      name: "Starter",
      subtitle: "Website Bisnis Multi-Halaman",
      price: "Mulai dari Rp 5.000.000",
      priceNote: "Harga final sesuai kompleksitas",
      popular: false,
      features: [
        "Website 5-8 halaman (Home, About, Service, Blog, Contact, dll)",
        "CMS WordPress / Headless (kelola konten sendiri)",
        "Blog/Artikel system",
        "Galeri foto/video",
        "SEO lengkap + Schema markup",
        "WhatsApp Business API ready",
        "Deploy hosting + domain 1 thn",
        "30 hari support gratis",
        "2x revisi mayor desain"
      ],
      cta: { label: "Mulai Starter", action: "whatsapp", params: "paket=Starter" }
    },
    {
      id: "premium",
      name: "Premium",
      subtitle: "Katalog Digital / LMS / Custom",
      price: "Mulai dari Rp 9.000.000",
      priceNote: "Harga final sesuai kompleksitas",
      popular: true,
      highlight: "Paling Direkomendasikan",
      features: [
        "Semua fitur Starter +",
        "Katalog digital interaktif / LMS / Custom App",
        "Filter, search, keranjang/inquiry otomatis",
        "Dashboard admin custom",
        "Integrasi pembayaran (Midtrans/Xendit)",
        "User account & membership",
        "Automasi email/WhatsApp (n8n/Make)",
        "Analytics & conversion tracking",
        "Priority support 60 hari",
        "3x revisi mayor desain"
      ],
      cta: { label: "Mulai Premium", action: "whatsapp", params: "paket=Premium" }
    }
  ],

  // FAQ
  faq: [
    {
      q: "Berapa lama proses pembuatan website?",
      a: "Biasanya 7-14 hari kerja tergantung paket dan kelengkapan materi (foto, teks, logo) dari Anda. Timeline pasti diberitahu di awal kontrak."
    },
    {
      q: "Apakah saya harus siapkan hosting & domain sendiri?",
      a: "Tidak perlu. Semua paket sudah include hosting cloud cepat (Indonesia/Singapura) dan domain .id/.com 1 tahun pertama. Perpanjangan tahun ke-2 dibicarakan terpisah."
    },
    {
      q: "Bisa edit konten sendiri setelah jadi?",
      a: "Ya. Paket Starter & Premium pakai CMS (WordPress/Headless) sehingga Anda bisa ganti teks, foto, artikel, produk tanpa coding. Kami beri video panduan."
    },
    {
      q: "Apakah website aman dari hacker & malware?",
      a: "Kami terapkan: SSL/TLS, header keamanan (CSP, HSTS), backup otomatis harian, update rutin, firewall WAF. Paket Premium dapat monitoring keamanan real-time."
    },
    {
      q: "Bagaimana sistem revisi & pembayaran?",
      a: "Pembayaran: 50% DP (mulai desain), 50% pelunasan (sebelum launch). Revisi mayor sudah termasuk per paket (1-3x). Revisi minor tak terbatas selama 30 hari support."
    },
    {
      q: "Apakah ada kontrak & garansi?",
      a: "Ya. Kontrak digital (TTD elektronik sah hukum) mencakup: cakupan kerja, timeline, revisi, hak cipta ( Anda punya 100%), support, SLA uptime 99.9%."
    }
  ],

  // CTA Section
  cta: {
    headline: "Siap Bangun Kehadiran Digital yang Dipercaya?",
    subheadline: "Yuk diskusikan kebutuhan bisnis Anda. Konsultasi 30 menit, gratis, tanpa komitmen. Kami jawab semua pertanyaan & kasih rekomendasi jujur.",
    button: { label: "Konsultasi Gratis Sekarang", action: "whatsapp" }
  },

  // Footer
  footer: {
    description: "Ryo Digital — Studio kreatif digital & pengembangan web. Membangun kehadiran digital profesional untuk bisnis Indonesia sejak 2024.",
    navigation: {
      layanan: ["Website Bisnis", "Landing Page", "Katalog Digital", "UI/UX Design", "Aset Kreatif", "AI & Automation"],
      perusahaan: ["Tentang Kami", "Portofolio", "Proses Kerja", "Paket & Harga", "Blog & Insight", "Karir"],
      bantuan: ["FAQ", "Kebijakan Privasi", "Syarat & Ketentuan", "Hubungi Kami"]
    },
    copyright: "© 2024 Ryo Digital. Hak cipta dilindungi.",
    madeWith: "Dibangun dengan ♥ di Bekasi, Indonesia"
  }
};

export default siteData;