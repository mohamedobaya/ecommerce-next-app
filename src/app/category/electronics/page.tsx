import React from "react";
import Product from "@/components/Product";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const electronics = products.filter(
    (p: Product) => p.category === "electronics"
  );
  console.log(electronics);

  return (
    <div className="container grid grid-cols-3 mx-auto">
      {electronics.map((product: Product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
