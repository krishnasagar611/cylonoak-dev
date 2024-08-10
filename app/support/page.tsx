import SubHeader from "@/components/Header/SubHeader";
import SupportSection from "@/components/Hero/Support";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <SubHeader />
      <SupportSection />
    </div>
  );
}
