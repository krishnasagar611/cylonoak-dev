"use client";
import React, { useState, useEffect } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import SubHeader from "@/components/Header/SubHeader";
import ERPSection from "@/components/Hero/ERPSection";

type Props = {};

function Page({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <HeaderComponent />
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "sticky top-0 z-50" : ""
        }`}
      >
        <SubHeader />
      </div>

      <ERPSection />
      <FooterComponent />
    </div>
  );
}

export default Page;
