import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import LatestInsightsMobile from "./LatestInsideMobile";

export default function LatestInsights() {
  return (
    <section className="px-4 lg:px-28 bg-gray-100 dark:bg-gray-900">
      <h2
        data-aos="fade-right"
        className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100"
      >
        Latest insights
      </h2>
      <div className="hidden lg:grid lg:grid-cols-6 lg:gap-6 ">
        <div className="col-span-6 md:col-span-3 cursor-pointer transform transition-transform duration-300 hover:-translate-x-2">
          <div className="flex-1 flex flex-col justify-between bg-white dark:bg-slate-800 py-4 px-4 h-[280px]">
            <div>
              <span className="inline-block bg-black text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
                Tool
              </span>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Haiven™ team assistant: accelerate GenAI adoption across your
                software delivery lifecycle
              </h3>
            </div>
            <Link href="/learn-more">
              <div className="text-blue-500 hover:underline mt-4 cursor-pointer dark:text-blue-400 dark:hover:text-blue-600 font-bold">
                Learn more <ChevronRight className="inline w-4 h-4" />
              </div>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/insight_lights.jpg"
              alt="AI Adoption"
              className="w-full h-[295px] object-cover"
              width={200}
              height={150}
              quality={100}
              loading="lazy"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="col-span-6 md:col-span-3 flex flex-col">
          <div className="flex justify-center gap-6 mb-4">
            <div className="space-y-4">
              <div className="bg-teal-600 dark:bg-teal-700 text-white p-6 flex flex-col justify-between h-[280px] w-[285px] transform transition-transform duration-300 hover:-translate-x-2 cursor-pointer">
                <div>
                  <span className="inline-block bg-black text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
                    E-Book
                  </span>
                  <h3 className="text-xl font-semibold mb-4">
                    Engineering Intelligence Platform
                  </h3>
                </div>
                <Link href="/get-ebook">
                  <div className="text-white hover:underline mt-4 cursor-pointer font-bold">
                    Get the e-book <ChevronRight className="inline w-4 h-4" />
                  </div>
                </Link>
              </div>
              <div className="bg-orange-600 dark:bg-orange-700 text-white p-6 flex flex-col justify-between w-[285px] h-[280px] transform transition-transform duration-300 hover:-translate-x-2 cursor-pointer">
                <div>
                  <span className="inline-block bg-black text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
                    Publication
                  </span>
                  <h3 className="text-xl font-semibold mb-4">
                    Holistic cybersecurity
                  </h3>
                </div>
                <Link href="/read-edition">
                  <div className="text-white hover:underline mt-4 cursor-pointer font-bold">
                    Read this edition{" "}
                    <ChevronRight className="inline w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col transform transition-transform duration-300 hover:-translate-x-2 cursor-pointer">
              <div className="flex-shrink-0">
                <Image
                  src="/images/insight_2nd_img.jpg"
                  alt="AI Adoption"
                  className="w-full h-[280px] object-cover"
                  width={200}
                  height={150}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between bg-white dark:bg-slate-800 px-4 py-4">
                <div>
                  <span className="inline-block bg-black text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
                    Tool
                  </span>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Haiven™ team assistant: accelerate GenAI adoption across
                    your software delivery lifecycle
                  </h3>
                </div>
                <Link href="/learn-more">
                  <div className="text-blue-500 hover:underline mt-4 cursor-pointer dark:text-blue-400 dark:hover:text-blue-600 font-bold">
                    Learn more <ChevronRight className="inline w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <LatestInsightsMobile />
      </div>
    </section>
  );
}
