import React from "react";

export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
    </div>
  );
}
