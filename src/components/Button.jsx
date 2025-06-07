// src/components/Button.jsx
import React from "react";
import clsx from "clsx";

const baseStyles =
  "px-4 py-2 rounded font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

export default function Button({ variant = "primary", children, ...props }) {
  return (
    <button className={clsx(baseStyles, variants[variant])} {...props}>
      {children}
    </button>
  );
}
