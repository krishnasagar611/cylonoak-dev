"use client";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

type Props = {};

function HeroSection({}: Props) {
  const { theme } = useTheme();

  return (
    <main className="relative">
      <div className="relative h-[50vh] md:h-[75vh] lg:h-[90vh]">
        <img
          src="/images/hero.jpg"
          alt="Hero Image"
          className="object-cover w-full h-full"
        />
        <div
          className={
            theme === "light"
              ? "absolute inset-0 bg-black bg-opacity-30"
              : " absolute inset-0 bg-black bg-opacity-65"
          }
        />
        <div
          data-aos="fade-right"
          data-aos-once={true}
          className="absolute inset-0 flex flex-col items-start justify-center p-4 space-y-4 text-gray-950 dark:text-gray-300  lg:px-28 px-4"
        >
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            AI innovations at CYLONOAK
          </h1>
          <p className="max-w-md text-sm sm:text-base md:text-lg lg:text-xl">
            Discover how the latest in generative AI capabilities in the
            CYLONOAK solutions portfolio can help you revolutionize your
            business model strategy.
          </p>
          <Button
            className="bg-blue-500 hover:bg-blue-700 rounded-lg font-bold"
            variant="destructive"
          >
            Learn More
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
