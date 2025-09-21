import React from "react";
import Product from "@/components/Product";
import ProductType from "@/app/types/Product";

export default async function page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const electronics = products.filter(
    (p: ProductType) => p.category === "electronics"
  );
  console.log(electronics);

  return (
    <div className="container grid grid-cols-3 mx-auto">
      {electronics.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
