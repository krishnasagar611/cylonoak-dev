"use client";
import React, { useState } from "react";
import Link from "next/link";
import UserPopover from "../Dialogbox/UserPophover";
import ThemeToggle from "../Theme/Theme";
import { useTheme } from "next-themes";
import { MenuIcon, XIcon, SearchIcon } from "lucide-react";

type Props = {};

const HeaderComponent = (props: Props) => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between xl:px-28 lg:px-28 px-4 py-4 bg-white shadow-lg dark:bg-gray-800 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img
            src={
              theme === "light"
                ? "/images/cylonoak-logo-dark.png"
                : "/images/cylonoak_logo.png"
            }
            alt="Cylonoak Logo"
            className="w-auto h-10 cursor-pointer"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/all-products"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            href="/support"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Support
          </Link>
          <Link
            href="/privacy"
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
          className="hidden md:block text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Explore Cylonoak
        </Link>
        <Link
          href="#"
          className="md:hidden text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <SearchIcon className="w-6 h-6" />
        </Link>
        <UserPopover />
        <ThemeToggle />
        <button
          className="block md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 md:hidden z-40`}
      >
        <button
          className="block text-gray-700 dark:text-gray-300 focus:outline-none p-4"
          onClick={toggleMenu}
        >
          <XIcon className="w-6 h-6" />
        </button>
        <nav className="flex flex-col space-y-6 p-6">
          <Link
            href="/all-products"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/support"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Learning
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Partners
          </Link>
          <Link
            href="#"
            className="text-gray-700 text-sm dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
