import React from "react";
import NavBtn from "./NavBtn";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Category",
      href: "/category",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Cart",
      href: "/cart",
    },
  ];
  return (
    <nav>
      <ul className="flex justify-around p-5 bg-blue-900 text-white">
        {links.map(({ name, href }) => (
          <NavBtn key={name} href={href} name={name} />
        ))}
      </ul>
    </nav>
  );
}
