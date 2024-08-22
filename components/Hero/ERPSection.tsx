import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ERPSection() {
  return (
    <section className="bg-[#A100C2] text-white ">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center lg:px-28 px-4 space-x-0 md:space-x-8  md:py-0 py-14">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise Resource Planning
          </h1>
          <p className="mb-6 text-base md:text-lg">
            SAP S/4HANA Cloud is ERP for every business need – from
            mission-critical operations to business model innovation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/demo" passHref>
              <Button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg">
                Request a demo
              </Button>
            </Link>
            <Link href="/erp-news" passHref>
              <Button className="border-2 border-white text-white dark:text-blue-600 font-bold py-2 px-4 rounded-lg">
                Get the latest ERP news
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 h-full w-full transform rotate-6 rounded-md"></div>
            <Image
              src="/images/women_.webp" 
              alt="Woman"
              width={500}
              height={500}
              className="relative z-10 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
