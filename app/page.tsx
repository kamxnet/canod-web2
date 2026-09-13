import {
  HomeHero,
  HomeShopCategories,
  HomeProblemSolver,
  HomeDockTool,
  HomeGuides,
  HomeSolutions,
  HomeSelectedProducts,
  HomePerspective,
  HomeReading,
  HomeBrief,
  HomeFinale,
} from "@/components/home/sections";
import { HomeMotion } from "@/components/home/home-motion";
import { SignalPath } from "@/components/home/illustrations";
import { pageMetadata } from "@/lib/metadata";
import { HomeJourney } from "@/components/home/journey-provider";
import { HomeSafety } from "@/components/home/safety-section";
import "./home.css";
import "./publication.css";
import "./tools.css";
import "./safety.css";
import "./solutions.css";
import "./shop.css";

export const metadata = pageMetadata(
  "Practical Technology for Canada",
  "CANOD helps Canadians choose practical technology that works together. Research-based guides, curated shop, and setup solutions for work, storage and portable setups.",
  "/",
);

export default function Home() {
  return (
    <HomeJourney>
      <SignalPath />
      <HomeHero />
      <HomeShopCategories />
      <HomeProblemSolver />
      <HomeDockTool />
      <HomeGuides />
      <HomeSolutions />
      <HomeSelectedProducts />
      <HomeSafety />
      <HomePerspective />
      <HomeReading />
      <HomeBrief />
      <HomeFinale />
      <HomeMotion />
    </HomeJourney>
  );
}
