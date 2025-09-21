"use client";
import React from "react";

interface Props {
  error: { message: string };
}

export default function error({ error }: Props) {
  return (
    <div className="text-6xl text-center my-50 text-red-600">
      Error: {error.message}
    </div>
  );
}
