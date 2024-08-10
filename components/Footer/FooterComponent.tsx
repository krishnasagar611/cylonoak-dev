"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterComponent = (props: Props) => {
  const { theme } = useTheme();

  return (
    <footer className="bg-white dark:bg-gray-900 py-2 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-14 border-b border-gray-200 dark:border-gray-700 pb-8 mt-5">
        <img
          src={
            theme === "light"
              ? "/images/cylonoak-logo-dark.png"
              : "/images/cylonoak_logo.png"
          }
          alt="Cylonoak Logo"
          className="w-auto h-10"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-sm">
          <div className="mt-4">
            <h5 className="font-bold mb-4 text-gray-800 dark:text-white">
              Products
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/for-finance" className="hover:text-blue-500">
                  For Finance
                </Link>
              </li>
              <li>
                <Link href="/for-hr" className="hover:text-blue-500">
                  For HR
                </Link>
              </li>
              <li>
                <Link href="/for-planning" className="hover:text-blue-500">
                  For Planning
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-blue-500">
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/artificial-intelligence"
                  className="hover:text-blue-500"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/why-workday" className="hover:text-blue-500">
                  Why Workday
                </Link>
              </li>
              <li>
                <Link
                  href="/small-midsize-business"
                  className="hover:text-blue-500"
                >
                  Solutions for Small & Midsize Business
                </Link>
              </li>
              <li>
                <Link href="/enterprise-cloud" className="hover:text-blue-500">
                  Enterprise Management Cloud
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-blue-500">
                  Marketplace<span className="inline-block ml-1">↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-experience"
                  className="hover:text-blue-500"
                >
                  Customer Experience
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-blue-500">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold mb-4 text-gray-800 dark:text-white">
              Industries
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/financial-services"
                  className="hover:text-blue-500"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="hover:text-blue-500">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/higher-education" className="hover:text-blue-500">
                  Higher Education
                </Link>
              </li>
              <li>
                <Link
                  href="/professional-services"
                  className="hover:text-blue-500"
                >
                  Professional & Business Services
                </Link>
              </li>
              <li>
                <Link href="/public-sector" className="hover:text-blue-500">
                  Public Sector
                </Link>
              </li>
              <li>
                <Link href="/retail" className="hover:text-blue-500">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-blue-500">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/more-industries" className="hover:text-blue-500">
                  See More Industries
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold mb-4 text-gray-800 dark:text-white">
              Learn
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/customer-stories" className="hover:text-blue-500">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="hover:text-blue-500">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/demos" className="hover:text-blue-500">
                  Demos
                </Link>
              </li>
              <li>
                <Link href="/resource-library" className="hover:text-blue-500">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="/education-training"
                  className="hover:text-blue-500"
                >
                  Education & Training
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-500">
                  Blog<span className="inline-block ml-1">↗</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="font-bold mb-4 text-gray-800 dark:text-white">
              Company
            </h5>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About Workday
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-responsibility"
                  className="hover:text-blue-500"
                >
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-relations"
                  className="hover:text-blue-500"
                >
                  Investor Relations<span className="inline-block ml-1">↗</span>
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="hover:text-blue-500">
                  Newsroom<span className="inline-block ml-1">↗</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/login-help" className="hover:text-blue-500">
                  Login Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center space-x-2 space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <Link href="/legal" className="hover:text-blue-500">
              Legal
            </Link>
            <span>&middot;</span>
            <Link href="/privacy" className="hover:text-blue-500">
              Privacy
            </Link>
            <span>&middot;</span>
            <Link href="/accessibility" className="hover:text-blue-500">
              Accessibility
            </Link>
            <span>&middot;</span>
            <Link href="/subscriptions" className="hover:text-blue-500">
              Subscriptions
            </Link>
            <span>&middot;</span>
            <Link href="/your-privacy-choices" className="hover:text-blue-500">
              Your Privacy Choices
            </Link>
            <span>&middot;</span>
            <Link href="/cookie-preferences" className="hover:text-blue-500">
              Cookie Preferences
            </Link>
          </div>
          <p className="text-gray-700 dark:text-gray-400 space-y-4  md:mt-0">
            © 2024 Cylonoak, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
