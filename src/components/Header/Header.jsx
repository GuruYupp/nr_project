"use client"; // If you’re using Next.js App Router

import { useState } from "react";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut"; // Optional: react-icons for logout icon
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () =>{
    localStorage.removeItem('session');
    window.location.replace('/');
  }

  return (
    <header className="relative bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo CENTER (optional) */}
        <div className="text-xl font-bold text-indigo-600">MySite</div>

        {/* Nav LEFT */}
        <nav className="hidden md:flex space-x-6 flex-1 px-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Contact
          </a>
        </nav>

        {/* Logout RIGHT */}
        <div className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-red-500 cursor-pointer" onClick={handleLogout}>
          <FiLogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Logout</span>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown: absolutely positioned so it overlays content */}
      <div
        className={`absolute left-0 right-0 top-full z-50 w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="space-y-1 px-4 pb-4 pt-2">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          >
            Services
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          >
            Contact
          </a>
          <button className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-red-500 w-full" onClick={handleLogout}>
            <FiLogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
