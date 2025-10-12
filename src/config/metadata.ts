import { Metadata } from "next";

/**
 * Metadata Configuration
 * Centralized configuration for all website metadata
 * Update these values to change SEO metadata across the entire application
 */

// Check if domain is production domain (bydautoidn.com)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bydautoidn.com";
const isProductionDomain = baseUrl.includes("bydautoidn.com");

export const siteConfig = {
  name: "BYD Indonesia",
  description: "Dealer resmi BYD Indonesia menyediakan mobil listrik BYD SEAL, ATTO 3, M6, dan DOLPHIN. Dapatkan promo menarik, test drive gratis, dan layanan purna jual terpercaya. Fast charging, ramah lingkungan, garansi resmi.",
  url: baseUrl,
  ogImage: "/images/byd-logo.png",
  logo: "/images/byd-logo.png",
  locale: "id_ID",
  author: "BYD Indonesia",
};

export const baseKeywords = [
  "BYD Indonesia",
  "dealer BYD",
  "mobil listrik BYD",
  "BYD SEAL",
  "BYD ATTO 3",
  "BYD M6",
  "BYD DOLPHIN",
  "BYD Sealion 7",
  "BYD Atto 1",
  "mobil listrik Indonesia",
  "EV Indonesia",
  "electric vehicle",
  "mobil ramah lingkungan",
  "promo BYD",
  "harga BYD",
  "test drive BYD",
  "Blade Battery",
  "fast charging",
  "mobil listrik murah",
  "dealer resmi BYD Jakarta",
  "jual BYD",
  "kredit BYD",
  "cicilan BYD",
  "spesifikasi BYD",
  "BYD terbaru",
  "mobil hybrid",
  "kendaraan listrik",
  "showroom BYD",
  "mobil listrik terbaik",
  "harga mobil listrik",
  "mobil listrik keluarga",
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya | BYD SEAL, ATTO 3, M6, DOLPHIN",
    template: "%s | BYD Indonesia",
  },
  description: siteConfig.description,
  keywords: baseKeywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  icons: {
    icon: [
      { url: siteConfig.logo },
      { url: siteConfig.logo, sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: siteConfig.logo },
      { url: siteConfig.logo, sizes: "180x180", type: "image/png" },
    ],
    shortcut: [siteConfig.logo],
  },
  robots: {
    index: isProductionDomain,
    follow: isProductionDomain,
    googleBot: {
      index: isProductionDomain,
      follow: isProductionDomain,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYD Indonesia - Dealer Resmi Mobil Listrik Terpercaya",
    description: "Dealer resmi BYD Indonesia. Mobil listrik dengan teknologi Blade Battery terdepan.",
    images: [siteConfig.ogImage],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Automotive",
};

/**
 * Helper function to generate product metadata
 */
export function generateProductMetadata(product: {
  nama: string;
  slug: string;
  tagline: string;
  deskripsi: string;
  kategori: string;
  varian: Array<{ tipe: string; rangeType: string; hargaFormatted: string }>;
  warna: string[];
  hargaMulaiFormatted: string;
  lokasiOtr: string;
  gambar: { mobil: string };
  spesifikasi: {
    jarakMengemudiNedc: string;
    kapasitasBaterai: string;
    akselerasi0100?: string;
    akselerasi050?: string;
  };
}): Metadata {
  const variantNames = product.varian.map((v) => v.tipe).join(", ");
  const priceRange = `${product.varian[0].hargaFormatted} - ${product.varian[product.varian.length - 1].hargaFormatted}`;

  // Generate dynamic keywords
  const productKeywords = [
    product.nama,
    `BYD ${product.nama}`,
    `${product.nama} Indonesia`,
    `harga ${product.nama}`,
    `harga ${product.nama} ${new Date().getFullYear()}`,
    `spesifikasi ${product.nama}`,
    `${product.nama} dealer resmi`,
    `promo ${product.nama}`,
    `test drive ${product.nama}`,
    `kredit ${product.nama}`,
    `cicilan ${product.nama}`,
    `${product.nama} OTR Jakarta`,
    `${product.nama} ${product.lokasiOtr}`,
    ...product.varian.map((v) => `${product.nama} ${v.tipe}`),
    ...product.varian.map((v) => `${product.nama} ${v.rangeType}`),
    ...product.warna.map((w) => `${product.nama} warna ${w}`),
    product.kategori,
    `${product.kategori} listrik`,
    "mobil listrik BYD",
    "BYD Indonesia",
    "dealer BYD",
    "EV Indonesia",
    "electric vehicle",
    "Blade Battery",
    "fast charging",
    "mobil ramah lingkungan",
    `jarak tempuh ${product.spesifikasi.jarakMengemudiNedc}`,
    `baterai ${product.spesifikasi.kapasitasBaterai}`,
  ];

  const title = `${product.nama} - Harga, Spesifikasi & Promo Terbaru ${new Date().getFullYear()}`;

  const description = `${product.nama} ${product.tagline}. ${product.deskripsi} Tersedia ${product.varian.length} varian (${variantNames}) dengan harga ${priceRange}. Spesifikasi: Jarak tempuh ${product.spesifikasi.jarakMengemudiNedc}, Baterai ${product.spesifikasi.kapasitasBaterai}, Akselerasi ${product.spesifikasi.akselerasi0100 || product.spesifikasi.akselerasi050}. Blade Battery Technology. Test drive gratis & promo menarik di dealer resmi BYD Indonesia.`;

  return {
    title,
    description,
    keywords: productKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: isProductionDomain,
      follow: isProductionDomain,
      googleBot: {
        index: isProductionDomain,
        follow: isProductionDomain,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: `${siteConfig.url}/models/${product.slug}`,
      siteName: siteConfig.name,
      title: `${product.nama} - ${product.tagline}`,
      description: `${product.deskripsi} Harga mulai ${product.hargaMulaiFormatted}. ${product.varian.length} varian tersedia. Jarak tempuh ${product.spesifikasi.jarakMengemudiNedc}. Blade Battery Technology.`,
      images: [
        {
          url: product.gambar.mobil,
          width: 1200,
          height: 630,
          alt: `${product.nama} - Mobil Listrik ${product.kategori} BYD Indonesia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nama} - ${product.tagline}`,
      description: description.substring(0, 200),
      images: [product.gambar.mobil],
    },
    alternates: {
      canonical: `${siteConfig.url}/models/${product.slug}`,
    },
    category: "Automotive",
  };
}
