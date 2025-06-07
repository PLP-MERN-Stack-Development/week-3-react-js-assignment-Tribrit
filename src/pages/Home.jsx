import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <Card className="max-w-4xl mx-auto p-8 space-y-8">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Welcome to My React App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your all-in-one task management and data exploration platform built with React and Tailwind CSS.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">What You Can Do</h2>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-1">
          <li><strong>Manage your tasks:</strong> Easily add, mark complete, delete, and filter your tasks.</li>
          <li><strong>Explore public API data:</strong> Fetch and browse datasets with advanced search and pagination features.</li>
          <li><strong>Switch themes:</strong> Toggle between light and dark mode for optimal viewing experience.</li>
          <li><strong>Responsive design:</strong> Seamlessly use the app on any device, from mobile to desktop.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">Why Choose This App?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This app demonstrates modern front-end best practices using React’s component architecture and hooks, alongside Tailwind CSS for efficient styling and responsiveness.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          With state management handled via React’s <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>, and persistent storage implemented through a custom <code>useLocalStorage</code> hook, your data stays safe and in sync.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">Features at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded shadow">
            <h3 className="font-bold mb-2">Task Manager</h3>
            <p>Organize your day by creating tasks, marking them as done, deleting completed ones, and filtering tasks based on their status.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded shadow">
            <h3 className="font-bold mb-2">API Integration</h3>
            <p>Connect with external data sources, browse through fetched results with loading indicators, and handle errors gracefully.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded shadow">
            <h3 className="font-bold mb-2">Responsive Design</h3>
            <p>Access the app seamlessly on all device sizes with a clean, modern interface built on Tailwind CSS.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded shadow">
            <h3 className="font-bold mb-2">Theme Switching</h3>
            <p>Customize your viewing experience by toggling between light and dark themes using React Context and Tailwind’s dark mode utilities.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">Get Started</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Use the navigation bar above to jump to the Task Manager or explore API data. Experiment with adding tasks or searching through data fetched from public APIs.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Whether you’re managing your daily to-do list or exploring external datasets, this app is designed to provide a smooth, intuitive experience.
        </p>
      </section>

      <footer className="pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My React App. Built with React, Tailwind CSS, and ❤️
      </footer>
    </Card>
  );
}
