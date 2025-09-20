"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  href: string;
  name: string;
}

export default function NavBtn({ href, name }: props) {
  const path = usePathname();
  //   console.log(path);

  return (
    <li
      className={`
    mx-auto
    px-5
    py-2
    ${href === path ? "bg-amber-400 rounded-2xl" : ""}`}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
}
