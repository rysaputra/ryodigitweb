# Ryo Digital — Website Resmi

Website resmi Ryo Digital, studio kreatif digital & pengembangan web.

## Struktur Proyek

```
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── tokens.css      # Design tokens (warna, tipografi, spacing)
│   │   ├── base.css        # Reset, typography, utilities
│   │   ├── layout.css      # Grid, flex, struktur halaman
│   │   ├── components.css  # Komponen reusable (navbar, card, btn, dll)
│   │   └── sections.css    # Style per section
│   ├── js/
│   │   ├── main.js         # Entry point, spotlight, back-to-top, smooth scroll
│   │   ├── nav.js          # Navbar, mobile menu, active link
│   │   ├── reveal.js       # Scroll reveal animation
│   │   └── counter.js      # Counter animation
│   └── img/                # Gambar & placeholder SVG
├── data/
│   └── site.js             # Single source of truth (teks, paket, portofolio, kontak)
└── README.md
```

## Menjalankan Lokal (Termux)

```bash
cd /root/ryodigitweb
python3 -m http.server 8080
# Buka http://localhost:8080 di browser
```

## Deploy Gratis

### GitHub Pages

```bash
# 1. Inisialisasi git (jika belum)
git init
git add .
git commit -m "Initial commit: Ryo Digital website"

# 2. Buat repo di GitHub, lalu push
git remote add origin https://github.com/USERNAME/ryodigitweb.git
git branch -M main
git push -u origin main

# 3. Aktifkan GitHub Pages
# Settings → Pages → Source: Deploy from a branch → Branch: main → Folder: / (root)
# URL: https://USERNAME.github.io/ryodigitweb/
```

### Vercel (Static)

```bash
# 1. Install Vercel CLI (via npm)
npm i -g vercel

# 2. Deploy
cd /root/ryodigitweb
vercel

# Ikuti prompt, pilih "Other" framework, output directory: ./
# URL akan diberikan otomatis
```

## Checklist Verifikasi

- [ ] Responsif di 360px, 768px, 1280px
- [ ] Animasi mati saat `prefers-reduced-motion: reduce` aktif
- [ ] Lighthouse score 90+ di mobile
- [ ] Semua link WhatsApp berfungsi (wa.me/6285648983077)
- [ ] Email link berfungsi (ryosaputraofficial@gmail.com)
- [ ] Navbar sticky & shrink saat scroll
- [ ] Mobile menu (hamburger) berfungsi
- [ ] Scroll reveal berfungsi
- [ ] Counter animation berfungsi
- [ ] FAQ accordion berfungsi (tanpa JS)
- [ ] Spotlight effect pada service cards
- [ ] Marquee berjalan
- [ ] Back to top button (desktop)
- [ ] WhatsApp float button (mobile)

## Kustomisasi

### Mengubah Harga Paket
Edit `data/site.js` → `packages` array → `price` field.

### Menambah Portofolio
Edit `data/site.js` → `portfolio` array → tambah objek baru.

### Mengubah Kontak
Edit `data/site.js` → `contact` object.

### Mengubah Warna
Edit `assets/css/tokens.css` → `:root` variables.

## Lisensi

© 2024 Ryo Digital. Hak cipta dilindungi.
EOF
echo "README created"