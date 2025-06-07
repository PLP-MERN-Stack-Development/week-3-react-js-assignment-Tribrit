// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 shadow">
      <div className="flex space-x-4">
        <Link to="/" className="font-bold text-lg text-gray-900 dark:text-gray-100">
          My React App
        </Link>
        <Link to="/tasks" className="hover:underline text-gray-700 dark:text-gray-300">
          Tasks
        </Link>
        <Link to="/api-data" className="hover:underline text-gray-700 dark:text-gray-300">
          API Data
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 rounded px-3 py-1 text-gray-900 dark:text-gray-100"
      >
        {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
