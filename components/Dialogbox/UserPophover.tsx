import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CircleUser, ExternalLink, MoveRight, MoveUpIcon, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const UserPopover = () => {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
          <CircleUser className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="w-80 p-4 bg-white dark:bg-gray-800 shadow-xl rounded-lg transition-colors duration-300"
      >
        <div className="flex items-start flex-col">
          <div className="rounded-full">
            <img
              src={
                theme === "light"
                  ? "/images/cylonoak-logo-dark.png"
                  : "/images/cylonoak_logo.png"
              }
              alt="logo"
              className="w-auto h-10"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 pt-3 py-3">
              NEED HELP SIGNING IN?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 pt-3 py-3">
              {`To access your Workday account, please reach out to your HR or IT
              department for a link to your company's unique sign-in page.`}
            </p>
            <Link
              href="#"
              className="text-blue-600 dark:text-blue-400 text-sm mt-2  flex justify-between"
            >
              More Information <MoveRight className="inline w-4 h-4 ml-1 text-blue-500 font-bold" />
            </Link>
          </div>
        </div>
        <hr className="my-4 dark:border-gray-600" />
        <h5 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
          PRODUCT & COMMUNITY LOGINS
        </h5>
        <ul className="space-y-4">
          <li>
            <Link
              href="#"
              className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Workday Adaptive Planning{" "}
              <MoveUpRight className="inline w-4 h-4 ml-1 text-blue-500 font-bold" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Workday Peakon <MoveUpRight className="inline w-4 h-4 ml-1 text-blue-500 font-bold" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Workday Extend <MoveUpRight className="inline w-4 h-4 ml-1 text-blue-500 font-bold" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Workday Community <MoveUpRight className="inline w-4 h-4 ml-1 text-blue-500 font-bold" />
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
