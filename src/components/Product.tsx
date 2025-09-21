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
      <div className="card bg-blue-500 text-white p-5 w-96 h-11/12 rounded m-5">
        <div className="flex justify-center my-5 size-56 mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            width={128}
            height={25}
          />
        </div>

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
