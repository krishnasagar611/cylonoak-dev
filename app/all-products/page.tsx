import SubHeader from "@/components/Header/SubHeader";
import ERPSection from "@/components/Hero/ERPSection";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <SubHeader />
      <ERPSection />
    </div>
  );
}

export default page;
