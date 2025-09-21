import Spinner from "@/components/Spinner";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center my-50 text-7xl">
      <Spinner />
    </div>
  );
}
