"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import LiquidHero from "@/components/LiquidHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-black overflow-x-clip">
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <LiquidHero />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ShowcaseSection />
      <ToolsSection />
      <Footer />
    </main>
  );
}
