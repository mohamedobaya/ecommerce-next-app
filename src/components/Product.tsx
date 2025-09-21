"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Product({ product }: { product: Product }) {
  const router = useRouter();

  const handleAddCart = (id: number) => {
    router.replace("/cart");
  };

  return (
    <div className="card bg-blue-500 text-white p-5 h-11/12 rounded m-5 relative">
      <div className="flex justify-center my-5 size-56 mx-auto">
        <Image
          src={product.image}
          alt={product.title}
          width={128}
          height={25}
        />
      </div>

      <h3 className="text-2xl">{product.title.slice(0, 20)}</h3>
      <ul>
        <li>{product.category}</li>
        <li>{product.price}$</li>
        <li className="text-green-400 underline">
          <Link href={`/products/${product.id}`}>More Details</Link>
        </li>
        {/* <li>{product.description}</li> */}
      </ul>
      <button
        onClick={() => handleAddCart(product.id)}
        className="absolute bottom-5 right-5 btn rounded-2xl py-1 px-4 cursor-pointer bg-amber-300 hover:bg-amber-500"
      >
        Add to cart
      </button>
    </div>
  );
}
