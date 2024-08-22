"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SubHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 absolute z-50 w-full">
      <div className="mx-auto px-4 lg:px-28 flex flex-col lg:flex-row">
        <div className="flex justify-between items-center h-16 lg:h-auto">
          <h2 className="text-gray-700 dark:text-gray-200 font-semibold">
            {'Enterprise Resource Planning (ERP)'}
          </h2>
          <button
            className="block lg:block xl:hidden 2xl:hidden"
            onClick={toggleSubMenu}
          >
            {isMenuOpen ? (
              <ChevronUp className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <ChevronDown className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 items-start lg:items-center h-auto lg:h-16 `}
        >
          <hr className="border-t border-gray-500 dark:border-gray-600 my-4 hidden lg:block" />
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <Link
              href="/overview"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Overview
            </Link>
            <Link
              href="/benefits"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Benefits
            </Link>
            <Link
              href="/customers"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Customers
            </Link>
            <Link
              href="/innovations"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Innovations
            </Link>
            <Link
              href="/additional-solutions"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Additional ERP Solutions
            </Link>
            <Link
              href="/analysts"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
            >
              Analysts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
