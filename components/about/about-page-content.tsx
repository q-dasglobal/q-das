"use client";

import { AboutOverview } from "@/components/about/about-overview";
import { AboutVisionMission } from "@/components/about/about-vision-mission";
import { AboutValues } from "@/components/about/about-values";
import { AboutPrinciples } from "@/components/about/about-principles";

export function AboutContent() {
  return (
    <>
      <AboutOverview />
      <AboutVisionMission />
      <AboutValues />
      <AboutPrinciples />
    </>
  );
}
