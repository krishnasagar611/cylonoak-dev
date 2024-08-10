import FooterComponent from "@/components/Footer/FooterComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import HeroSection from "@/components/Hero/HeroSection";
import LatestInsights from "@/components/Latestinsights/LatestInsights";
import Solutions from "@/components/Solutioncard/SolutionCard";
import StayInTheLoop from "@/components/Stayinloop/StayInloop";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Solutions />
      <LatestInsights/>
      <StayInTheLoop />
    </>
  );
}
