import type { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  console.log("Generating static params for about page");
  return [{ productId: "1" }, { productId: "2" }, { productId: "3" }];
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Product ${resolvedParams.productId}`,
  };
}

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params;
  return <h1>Details about product {resolvedParams.productId}</h1>;
}
