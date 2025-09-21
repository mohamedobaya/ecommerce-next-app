import React from "react";
import Product from "@/components/Product";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return (
    <div className="mx-auto my-10">
      <Product key={product.id} product={product} />
    </div>
  );
}
