import React from "react";
import Product from "@/components/Product";
import ProductType from "@/app/types/Product";

interface Props {
  filteredValue: string;
}

export default async function ProductList({ filteredValue }: Props) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log();

  const filterProducts =
    filteredValue !== "all"
      ? products.filter((p: ProductType) => p.category == filteredValue)
      : products;

  return (
    <div className="container grid grid-cols-3 gap-5 mx-auto">
      {filterProducts.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
