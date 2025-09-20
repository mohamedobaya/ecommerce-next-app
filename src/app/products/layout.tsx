import SideNav from "@/components/SideNav";
import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex">{children}</div>;
}
