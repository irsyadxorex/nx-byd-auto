import { Metadata } from "next";
import productsData from "@/data/products.json";
import { generateProductMetadata } from "@/config/metadata";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Find product from products data
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Model Tidak Ditemukan | BYD Indonesia",
      description: "Model yang Anda cari tidak ditemukan. Lihat model BYD lainnya.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Use centralized metadata generator
  return generateProductMetadata(product);
}

export default function ModelDetailLayout({ children }: Props) {
  return <>{children}</>;
}
