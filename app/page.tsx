import {
  HomeHero,
  HomeInterests,
  HomeGuides,
  HomePerspective,
  HomeDockTool,
  HomeReading,
  HomeBrief,
  HomeFinale,
} from "@/components/home/sections";
import { HomeMotion } from "@/components/home/home-motion";
import { SignalPath } from "@/components/home/illustrations";
import { pageMetadata } from "@/lib/metadata";
import { HomeJourney } from "@/components/home/journey-provider";
import { IntentSelector } from "@/components/home/intent-selector";
import { HomeSafety } from "@/components/home/safety-section";
import "./home.css";
import "./publication.css";
import "./tools.css";
import "./safety.css";

export const metadata = pageMetadata(
  "Practical Technology for Canada",
  "CANOD helps Canadians choose practical technology that works together. Research-based guides and useful tools for work, storage and portable setups.",
  "/",
);

export default function Home() {
  return (
    <HomeJourney>
      <SignalPath />
      <HomeHero />
      <IntentSelector />
      <HomeInterests />
      <HomeGuides />
      <HomeDockTool />
      <HomeSafety />
      <HomePerspective />
      <HomeReading />
      <HomeBrief />
      <HomeFinale />
      <HomeMotion />
    </HomeJourney>
  );
}
