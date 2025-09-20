import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Product({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card w-96 bg-blue-500 text-white p-5 rounded m-5">
        <Image
          src={product.image}
          alt={product.title}
          width={128}
          height={25}
        />
        <h3 className="text-2xl">{product.title}</h3>
        <ul>
          <li>category: {product.category}</li>
          <li>{product.price}$</li>
          <li>{product.description}</li>
        </ul>
      </div>
    </Link>
  );
}
