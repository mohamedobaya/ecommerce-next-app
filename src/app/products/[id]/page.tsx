import React from "react";
import Product from "@/components/Product";

// error in console on refresh: ask instructor

export default async function page({ params }: { params: { id: string } }) {
  console.log(params);
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return (
    <div className="mx-auto my-10">
      <Product key={product.id} product={product} />
    </div>
  );
}
