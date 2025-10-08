import { Metadata } from "next";
import modelsData from "@/data/models.json";
import promosData from "@/data/promos.json";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Find model from both models and promos data
  const allProducts = [...modelsData, ...promosData];
  const model = allProducts.find((m) => m.slug === slug);

  if (!model) {
    return {
      title: "Model Tidak Ditemukan - BYD Indonesia",
      description: "Halaman yang Anda cari tidak ditemukan.",
    };
  }

  // Check if it's a promo item
  const isPromo = "discount" in model;

  // Generate dynamic keywords
  const baseKeywords = [
    model.name,
    `${model.name} Indonesia`,
    `harga ${model.name}`,
    `spesifikasi ${model.name}`,
    `${model.name} dealer resmi`,
    `promo ${model.name}`,
    `test drive ${model.name}`,
    `kredit ${model.name}`,
    `cicilan ${model.name}`,
    model.category,
    "mobil listrik BYD",
    "BYD Indonesia",
    "dealer BYD",
    "EV Indonesia",
    "electric vehicle",
    "Blade Battery",
    "fast charging",
    "mobil ramah lingkungan",
  ];

  // Add variant-specific keywords
  if (model.variants) {
    model.variants.forEach((variant: { name: string }) => {
      baseKeywords.push(`${model.name} ${variant.name}`);
    });
  }

  // Add color keywords
  if (model.colors) {
    model.colors.forEach((color: string) => {
      baseKeywords.push(`${model.name} warna ${color}`);
    });
  }

  // Type guard untuk promo
  const promoModel = isPromo ? model as typeof promosData[0] : null;

  const title = isPromo && promoModel
    ? `${model.name} - Promo Spesial ${promoModel.discountPercent}% OFF | BYD Indonesia`
    : `${model.name} ${model.price} - ${model.tagline} | BYD Indonesia`;

  const description = isPromo && promoModel
    ? `Promo spesial ${model.name}! Hemat ${promoModel.discount}. ${model.description.substring(0, 100)}... Dapatkan penawaran terbaik di dealer resmi BYD Indonesia.`
    : `${model.name} ${model.tagline}. ${model.description.substring(0, 150)}... Harga mulai ${model.price}. Test drive & konsultasi gratis di dealer resmi BYD Indonesia.`;

  return {
    title,
    description,
    keywords: baseKeywords,
    authors: [{ name: "BYD Indonesia" }],
    creator: "BYD Indonesia",
    publisher: "BYD Indonesia",
    robots: {
      index: process.env.NODE_ENV === "production",
      follow: process.env.NODE_ENV === "production",
      googleBot: {
        index: process.env.NODE_ENV === "production",
        follow: process.env.NODE_ENV === "production",
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: `https://bydautoidn.com/models/${slug}`,
      siteName: "BYD Indonesia",
      title,
      description,
      images: [
        {
          url: model.image,
          width: 1200,
          height: 630,
          alt: `${model.name} - BYD Indonesia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [model.image],
    },
    alternates: {
      canonical: `https://bydautoidn.com/models/${slug}`,
    },
    category: "Automotive",
  };
}

export default function ModelDetailLayout({ children }: Props) {
  return <>{children}</>;
}
