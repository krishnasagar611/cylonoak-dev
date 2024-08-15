import React from "react";
import Link from "next/link";
import { FlagOffIcon, FlagTriangleLeft, MinusIcon, Tally1 } from "lucide-react";

const Solutions = () => {
  const cards = [
    {
      title: "Enterprise Resource Planning",
      description:
        "SAP S/4HANA Cloud is complete, modular, and award-winning ERP. Embedded with AI and analytics, it can help your business run anywhere, in real time.",
      linkText: "Get started with SAP S/4HANA Cloud",
      linkHref: "/sap-s4hana-cloud",
    },
    {
      title: "CRM and Customer Experience",
      description:
        "With our CX solutions, you can connect e-commerce, marketing, sales, and service data – and use AI to personalise the customer experience at every touchpoint.",
      linkText: "Explore CRM and CX solutions",
      linkHref: "/crm-cx-solutions",
    },
    {
      title: "Financial Management",
      description:
        "With the latest finance technology, you can innovate new business models, grow revenue, and automate anything from FP&A and accounting to GRC.",
      linkText: "Browse financial management software",
      linkHref: "/financial-management",
    },
    {
      title: "Spend Management",
      description:
        "Reduce costs and risks as you automate and control all types of spend with market-leading source-to-pay, external workforce management, and T&E solutions.",
      linkText: "Discover SAP Ariba, SAP Fieldglass, and SAP Concur",
      linkHref: "/spend-management",
    },
    {
      title: "Spend Management",
      description:
        "Reduce costs and risks as you automate and control all types of spend with market-leading source-to-pay, external workforce management, and T&E solutions.",
      linkText: "Discover SAP Ariba, SAP Fieldglass, and SAP Concur",
      linkHref: "/spend-management",
    },
    {
      title: "Spend Management",
      description:
        "Reduce costs and risks as you automate and control all types of spend with market-leading source-to-pay, external workforce management, and T&E solutions.",
      linkText: "Discover SAP Ariba, SAP Fieldglass, and SAP Concur",
      linkHref: "/spend-management",
    },
  ];

  return (
    <div className="py-12 px-14 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6 ">
        <h2 data-aos="fade-right" className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <span className="bg-gray-900 dark:bg-gray-100  dar h-6 w-1 rounded-sm"></span> Solutions built for you
        </h2>
        {/* <Link href="/products-a-z">
          <span className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-medium border border-blue-500 dark:border-blue-400 px-4 py-2 rounded cursor-pointer">
            View products A-Z
          </span>
        </Link> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
          data-aos="fade-up"
          // data-aos-once={true}
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {card.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {card.description}
            </p>
            <Link href={card.linkHref}>
              <span className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 font-medium cursor-pointer">
                {card.linkText} &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
