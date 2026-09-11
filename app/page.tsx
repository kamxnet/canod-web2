import {
  HomeHero,
  HomeInterests,
  HomeGuides,
  HomePerspective,
  HomePartners,
} from "@/components/home/sections";
import { HomeMotion } from "@/components/home/home-motion";
import { SignalPath } from "@/components/home/illustrations";
import { pageMetadata } from "@/lib/metadata";
import { guides } from "@/lib/guides";
import { HomeJourney } from "@/components/home/journey-provider";
import { IntentSelector } from "@/components/home/intent-selector";
import { StartingPoint } from "@/components/home/starting-point";
import "./home.css";

export const metadata = pageMetadata(
  "Practical Products for Canada",
  "CANOD is a Canadian-owned online retailer exploring practical products for technology, work, travel and everyday life. Read useful buying guides and explore our product interests.",
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
      <StartingPoint guides={guides.map(({ slug, title, description }) => ({ slug, title, description }))} />
      <HomePerspective />
      <HomePartners />
      <HomeMotion />
    </HomeJourney>
  );
}
