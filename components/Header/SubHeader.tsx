import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function SubHeader() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-14">
        <div className="flex space-x-8 items-center h-16">
          <div className="text-sm">
            <Link
              href="/all-products"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 flex items-center text-sm"
            >
              <span className="mr-2">
                <ChevronDown className="text-sm h-5 w-5 text-gray-500 dark:text-gray-400" />
              </span>
              / All Products
            </Link>
            <h2 className="text-gray-700 dark:text-gray-200 font-semibold">
              Enterprise Resource Planning (ERP)
            </h2>
          </div>
          <div>
            <hr className="border-t border-gray-500 dark:border-gray-600 my-4" />
          </div>
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
    </nav>
  );
}
