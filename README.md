# Xibra Web

Website portfolio publik dan dashboard privat untuk **Xibra Platform** — ekosistem digital pribadi milik Muhammad Rizky Ibrahim.

Frontend ini dibangun dengan **Nuxt 4**, **Vue 3**, **TypeScript**, dan **Tailwind CSS v4**, terhubung ke backend Laravel API (`portfolio-api`) sebagai satu sumber data.

## 📄 Tentang

`rizkyxibrahim.com` adalah website pribadi yang berisi:

- **Halaman publik:** Home, About, Projects, Blog, Contact (dapat diakses pengunjung tanpa login)
- **Dashboard privat:** Hanya dapat diakses owner setelah autentikasi melalui Laravel Sanctum

## 🛠️ Teknologi

| Teknologi | Versi | Keterangan |
|-----------|-------|------------|
| Nuxt | 4 | Framework aplikasi web |
| Vue | 3 | Framework antarmuka |
| TypeScript | | Tipe statis |
| Tailwind CSS | v4 | Styling utility-first (via `@tailwindcss/vite`) |
| Pinia | | Manajemen state |
| Pinia Plugin Persistedstate | | Persistensi state ke localStorage/cookie |
| Laravel Sanctum | | Autentikasi token (via API backend) |

## 📁 Struktur Folder

```
portfolio-web/
├── app/
│   ├── assets/            # Aset statis (CSS, gambar)
│   ├── components/        # Komponen Vue
│   ├── composables/       # Logika bisa digunakan ulang (useApi, dll.)
│   ├── layouts/           # Layout halaman (default, guest, dashboard, auth, vertical)
│   ├── middleware/        # Middleware route (proteksi dashboard)
│   ├── pages/             # Halaman Nuxt (routing otomatis)
│   │   ├── index.vue
│   │   ├── about.vue
│   │   ├── projects.vue
│   │   ├── blog/[slug].vue
│   │   ├── contact.vue
│   │   ├── login.vue
│   │   ├── register.vue
│   │   ├── forgot-password.vue
│   │   ├── reset-password.vue
│   │   └── dashboard/
│   │       ├── index.vue
│   │       └── profile.vue
│   ├── stores/            # Store Pinia (auth, layout)
│   ├── types/             # TypeScript interface (api.d.ts, layout.ts)
│   ├── app.vue
│   └── error.vue
├── public/
├── .env.example
├── .gitignore
├── nuxt.config.ts
├── package.json
└── README.md
```

## 🚀 Instalasi Lokal

### Persyaratan
- Node.js 20+
- npm atau yarn
- Backend Laravel (`portfolio-api`) sudah berjalan di `http://localhost:8000`

### Langkah-langkah

```bash
# 1. Masuk ke folder proyek
cd "D:/Projects/portfolio-web"

# 2. Install dependensi
npm install

# 3. Salin environment contoh (jika ada)
cp .env.example .env 2>/dev/null || true
# Edit .env jika perlu (default sudah menunjuk ke localhost:8000 via nuxt.config.ts)

# 4. Jalankan server pengembangan
npm run dev
```

Buka `http://localhost:3000` di browser.

## 🔐 Autentikasi

Frontend menggunakan cookie `xibra_token` untuk menyimpan token Sanctum dari backend Laravel.

| Halaman | Akses | Endpoint Backend |
|---------|-------|------------------|
| `/login` | Publik | `POST /api/v1/auth/login` |
| `/register` | Publik | `POST /api/v1/auth/register` |
| `/forgot-password` | Publik | `POST /api/v1/auth/forgot-password` |
| `/reset-password` | Publik | `POST /api/v1/auth/reset-password` |
| `/dashboard` | Privat (butuh token) | `GET /api/v1/auth/me` |
| `/dashboard/profile` | Privat (butuh token) | `GET/PUT /api/v1/profile/me` |

## 🌐 Konfigurasi API

URL backend sudah diatur di `nuxt.config.ts`:

```ts
runtimeConfig: {
  public: {
    apiBase: 'http://localhost:8000/api/v1',
  },
},
```

Untuk production, ganti dengan URL production API Anda.

## 🧪 Pengujian

Pastikan backend Laravel (`portfolio-api`) sudah dijalankan terlebih dahulu:

```bash
# Di terminal terpisah, folder xibra-api
php artisan serve
```

Lalu uji di browser:
1. Buka `http://localhost:3000/login`
2. Masuk dengan kredensial yang terdaftar di backend
3. Akses `http://localhost:3000/dashboard`

## 📦 Repository Terkait

| Repository | Deskripsi |
|------------|-----------|
| [rizkyxibrahim/portfolio-api](https://github.com/rizkyxibrahim/portfolio-api) | Backend Laravel + PostgreSQL + REST API |

## 👤 Owner

**Muhammad Rizky Ibrahim**  
GitHub: [rizkyxibrahim](https://github.com/rizkyxibrahim)  
Email: rizkyxibrahim@gmail.com  
Phone: 085179706698

## 📄 Lisensi

Proyek pribadi — tidak untuk distribusi umum.