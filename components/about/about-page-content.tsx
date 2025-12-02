"use client";

import { AboutOverview } from "./about-overview";
import { AboutVisionMission } from "./about-vision-mission";
import { AboutValues } from "./about-values";
import { AboutPrinciples } from "./about-principles";

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
