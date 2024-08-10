import Link from "next/link";
import { Info, FileText, Send } from "lucide-react";

export default function StayInTheLoop() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 px-14">
      <div className="mx-auto">
        <h3 className="text-gray-600 dark:text-gray-400 font-medium text-lg mb-2">
          More from OpenText
        </h3>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-blue-600 dark:text-blue-400">Stay</span> in the
          loop
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-10">
          Across industries and around the world, OpenText is empowering
          organizations to intelligently scale operations for a digital future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/about-opentext" passHref>
            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200">
              <Info className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
              <div>
                <h4 className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  About OpenText
                </h4>
              </div>
            </div>
          </Link>

          <Link href="/opentext-blogs" passHref>
            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200">
              <FileText className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
              <div>
                <h4 className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  OpenText Blogs
                </h4>
              </div>
            </div>
          </Link>

          <Link href="/contact-us" passHref>
            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200">
              <Send className="text-blue-600 dark:text-blue-400 text-3xl mr-4" />
              <div>
                <h4 className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  Contact us
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
