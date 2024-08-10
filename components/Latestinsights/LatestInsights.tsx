import Link from "next/link";
import Image from "next/image"; // Assuming you'll use Image component for the image

export default function LatestInsights() {
  return (
    <section className="px-14 py-14 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Latest insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Row: Three Cards */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mb-4">
              Tool
            </span>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Haiven™ team assistant: accelerate GenAI adoption across your software delivery lifecycle
            </h3>
          </div>
          <Link href="/learn-more">
            <div className="text-blue-500 hover:underline mt-4 cursor-pointer dark:text-blue-400 dark:hover:text-blue-600">
              Learn more &rarr;
            </div>
          </Link>
        </div>

        <div className="bg-teal-600 dark:bg-teal-700 text-white p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mb-4">
              E-Book
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Engineering Intelligence Platform
            </h3>
          </div>
          <Link href="/get-ebook">
            <div className="text-white hover:underline mt-4 cursor-pointer">
              Get the e-book &rarr;
            </div>
          </Link>
        </div>

        <div className="">
          <Image
            src="/images/insight_2nd_img.jpg" // Replace with your image path
            alt="AI Adoption"
            className="w-full h-auto"
            width={500}
            height={500}
          />
        </div>

        {/* Second Row: Image and One Card */}
        <div className="col-span-2">
          <Image
            src="/images/insight_lights.jpg" // Replace with your image path
            alt="AI Adoption"
            className="w-full h-auto"
            width={1000}
            height={500}
          />
        </div>

        <div className="bg-green-500 dark:bg-green-600 text-white p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mb-4">
              Podcast
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Leveraging generative AI at Bosch
            </h3>
          </div>
          <Link href="/listen-podcast">
            <div className="text-white hover:underline mt-4 cursor-pointer">
              Listen to this podcast &rarr;
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
