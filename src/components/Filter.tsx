"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", filter);

    router.replace(`${pathName}?${params}`);
  };
  return (
    <div className="text-amber-400 text-xl flex gap-5">
      <button
        className="hover:underline cursor-pointer"
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className="hover:underline cursor-pointer"
        onClick={() => handleFilter("men's clothing")}
      >
        Men
      </button>
      <button
        className="hover:underline cursor-pointer"
        onClick={() => handleFilter("women's clothing")}
      >
        Women
      </button>
      <button
        className="hover:underline cursor-pointer"
        onClick={() => handleFilter("electronics")}
      >
        Electronics
      </button>
      <button
        className="hover:underline cursor-pointer"
        onClick={() => handleFilter("jewelery")}
      >
        Jewelery
      </button>
    </div>
  );
}
