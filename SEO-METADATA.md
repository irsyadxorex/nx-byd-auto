# SEO & Metadata Documentation

## 📋 Overview
Website BYD Indonesia telah dilengkapi dengan metadata lengkap untuk optimasi SEO (Search Engine Optimization).

## ✅ Fitur yang Telah Ditambahkan

### 1. **Root Layout Metadata** (`src/app/layout.tsx`)
- Title tag yang optimal dengan keywords
- Meta description yang menarik dan informatif
- 27+ keywords relevan untuk BYD dan mobil listrik
- Open Graph tags untuk social media (Facebook, LinkedIn)
- Twitter Card metadata
- Robots meta tags (hanya aktif di production)
- Google Search Console verification placeholder
- Canonical URL
- Language tag (Bahasa Indonesia)

### 2. **Dynamic Metadata untuk Halaman Detail** (`src/app/models/[slug]/layout.tsx`)
Metadata yang otomatis menyesuaikan dengan model mobil:
- Dynamic title berdasarkan nama model
- Description yang diambil dari data model
- Keywords yang di-generate otomatis dari:
  - Nama model
  - Varian model
  - Warna yang tersedia
  - Kategori
- Open Graph untuk social sharing
- Twitter Card metadata
- Canonical URL per model

### 3. **Structured Data (JSON-LD)**

#### Homepage (`src/app/page.tsx`)
- **AutomotiveBusiness Schema**: Informasi dealer lengkap
  - Nama bisnis
  - Alamat lengkap
  - Koordinat geografis
  - Jam operasional
  - Rating & review
  - Social media links

- **WebSite Schema**: Informasi website
  - Search action untuk Google

#### Detail Page (`src/app/models/[slug]/page.tsx`)
- **Product Schema**: Informasi produk
  - Nama produk
  - Gambar
  - Brand (BYD)
  - Harga
  - Availability
  - Rating
  - Category

### 4. **Sitemap** (`src/app/sitemap.ts`)
- Otomatis generate URL untuk semua halaman
- Termasuk semua model dan promo
- Set priority dan change frequency
- Akses di: `/sitemap.xml`

### 5. **Robots.txt** (`src/app/robots.ts`)
- **Development/Staging**: Block semua crawler
- **Production**: Allow semua crawler dengan pengecualian:
  - `/api/*` - API routes
  - `/_next/*` - Next.js internal
  - `/admin/*` - Admin area (jika ada)
- Link ke sitemap
- Akses di: `/robots.txt`

### 6. **Web Manifest** (`src/app/manifest.ts`)
- PWA support
- App name & description
- Theme colors
- Icons configuration
- Akses di: `/manifest.json`

## 🔧 Konfigurasi yang Perlu Disesuaikan

### 1. Domain Website
Domain telah diset ke `https://bydautoidn.com` di:
- ✅ `src/app/layout.tsx`
- ✅ `src/app/models/[slug]/layout.tsx`
- ✅ `src/app/sitemap.ts`
- ✅ `src/app/robots.ts`
- ✅ `src/app/page.tsx`
- ✅ `.env.example`

### 2. Google Search Console Verification
Di `src/app/layout.tsx` line 89-91:
```typescript
verification: {
  google: "your-google-verification-code", // Ganti dengan kode verifikasi Google
},
```

### 3. Open Graph Images
Tambahkan file `/public/og-image.jpg` (1200x630 px) untuk social media preview.

### 4. Favicon & PWA Icons
Tambahkan icons di `/public/`:
- `favicon.ico`
- `icon-192.png` (192x192 px)
- `icon-512.png` (512x512 px)

### 5. Social Media Links
Update di `src/app/page.tsx` line 50-54 dengan akun social media aktual.

### 6. WhatsApp Number
Update di `src/app/models/[slug]/page.tsx` line 47 dengan nomor WhatsApp aktual.

### 7. Koordinat Geografis
Update koordinat di `src/app/page.tsx` line 29-32 dengan lokasi dealer sebenarnya.

## 🚀 Testing

### 1. Local Testing
```bash
npm run dev
```
Cek metadata di browser DevTools (Elements > head)

### 2. Production Testing
```bash
npm run build
npm start
```

### 3. SEO Testing Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Schema.org Validator**: https://validator.schema.org/

### 4. Check Generated Files
- Sitemap: `http://localhost:3000/sitemap.xml`
- Robots: `http://localhost:3000/robots.txt`
- Manifest: `http://localhost:3000/manifest.json`

## 📊 SEO Best Practices yang Diterapkan

✅ Semantic HTML structure
✅ Meta tags optimization
✅ Open Graph & Twitter Cards
✅ Structured Data (JSON-LD)
✅ Mobile-friendly (PWA ready)
✅ Fast loading (Next.js optimization)
✅ Canonical URLs
✅ XML Sitemap
✅ Robots.txt configuration
✅ Alt text untuk images
✅ Heading hierarchy (H1, H2, H3)
✅ Internal linking
✅ Schema.org markup

## 🔐 Environment Variables

Robots indexing otomatis menyesuaikan dengan environment:
- **Development**: `NODE_ENV=development` → Robots DISALLOW
- **Production**: `NODE_ENV=production` → Robots ALLOW

## 📝 Keywords Strategy

Website telah dioptimasi untuk keywords:
- Brand: "BYD Indonesia", "dealer BYD"
- Produk: "BYD SEAL", "BYD ATTO 3", "BYD M6", "BYD DOLPHIN"
- Kategori: "mobil listrik", "EV Indonesia", "electric vehicle"
- Features: "Blade Battery", "fast charging"
- Intent: "promo BYD", "harga BYD", "test drive BYD", "kredit BYD"
- Location: "dealer resmi BYD Jakarta", "BYD Pasar Baru"

## 🎯 Next Steps

1. Submit sitemap ke Google Search Console
2. Verify website di Google Search Console
3. Setup Google Analytics 4 (GA4)
4. Setup Google Tag Manager (GTM) - optional
5. Monitor dengan Google Search Console
6. Test dengan Google PageSpeed Insights
7. Submit ke Bing Webmaster Tools

## 📞 Support

Untuk pertanyaan lebih lanjut, hubungi developer atau tim SEO.
