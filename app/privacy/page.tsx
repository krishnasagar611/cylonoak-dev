import FooterComponent from "@/components/Footer/FooterComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import SubHeader from "@/components/Header/SubHeader";
import PrivacySection from "@/components/Hero/PriivacyHero";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
       <HeaderComponent />
      <SubHeader />
      <PrivacySection />
      <FooterComponent/>
    </div>
  );
}

export default page;
