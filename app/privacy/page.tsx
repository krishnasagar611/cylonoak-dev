import SubHeader from "@/components/Header/SubHeader";
import PrivacySection from "@/components/Hero/PriivacyHero";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <SubHeader />
      <PrivacySection />
    </div>
  );
}

export default page;
