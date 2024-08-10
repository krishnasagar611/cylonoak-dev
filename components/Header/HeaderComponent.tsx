"use client";
import React from "react";
import Link from "next/link";
import UserPopover from "../Dialogbox/UserPophover";
import ThemeToggle from "../Theme/Theme";
import { useTheme } from "next-themes";

type Props = {};

const HeaderComponent = (props: Props) => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-14 py-4 bg-white shadow-lg dark:bg-gray-800 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <img
          src={
            theme === "light"
              ? "/images/cylonoak-logo-dark.png"
              : "/images/cylonoak_logo.png"
          }
          alt="Cylonoak Logo"
          className="w-auto h-10"
        />
        <nav className="hidden space-x-4 md:flex">
          {/* Updated menu links with hover effects */}
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Support
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Learning
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Partners
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="#"
          className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Explore Cylonoak
        </Link>
        <UserPopover />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default HeaderComponent;
