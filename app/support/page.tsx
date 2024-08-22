import FooterComponent from "@/components/Footer/FooterComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import SubHeader from "@/components/Header/SubHeader";
import SupportSection from "@/components/Hero/Support";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
       <HeaderComponent />
      <SubHeader />
      <SupportSection />
      <FooterComponent/>
    </div>
  );
}
