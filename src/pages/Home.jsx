import React from "react";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import ToolsWeUse from "@/components/ToolsWeUse";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyOutsource from "@/components/WhyOutsource";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO();

  return (
    <>
      <HomeHero />
      <p className="description">
        Grandeur Advisors LLP has years of expertise in International Accounting
        and Taxation with established clients across the USA, UK, Canada,
        Australia and India. We are actively providing bookkeeping, payroll,
        management reporting and accounting services across major countries of
        the world to a wide variety of businesses.
      </p>
      <WhyOutsource />
      <ToolsWeUse />
      <WhyChooseUs />
      <Services />
      <Testimonials />
    </>
  );
}
