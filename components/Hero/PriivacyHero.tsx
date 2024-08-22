import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PrivacySection() {
  return (
    <section className="bg-[#EBF8FF] text-gray-950 relative">
      <div className=" mx-auto flex flex-col md:flex-row items-center lg:px-28 px-4 space-x-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">SAP Privacy Statement</h1>
          <p className="mb-6 text-lg">
            SAP S/4HANA Cloud is ERP for every business need – from
            mission-critical operations to business model innovation.
          </p>
          <div className="flex space-x-4">
            <Link href="/demo" passHref>
              <Button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg">
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 h-full w-full transform rotate-6 rounded-md"></div>
            <Image
              src="/images/contact.webp"
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
