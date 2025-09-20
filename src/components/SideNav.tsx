import React from "react";
import NavBtn from "./NavBtn";

export default function SideNav() {
  const links = [
    {
      name: "Electronics",
      href: "/category/electronics",
    },
    {
      name: "Men's clothing",
      href: "/category/men",
    },
    {
      name: "Jewelery",
      href: "/category/jewelery",
    },
  ];
  return (
    <ul className="inline-flex flex-col w-50 p-5 bg-amber-950 text-white">
      {links.map(({ name, href }) => (
        <NavBtn key={name} href={href} name={name} />
      ))}
    </ul>
  );
}
