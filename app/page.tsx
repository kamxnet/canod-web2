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
import "./home.css";

export const metadata = pageMetadata(
  "Practical Products for Canada",
  "CANOD is a Canadian-owned online retailer exploring practical products for technology, work, travel and everyday life. Read useful buying guides and explore our product interests.",
  "/",
);

export default function Home() {
  return (
    <div className="home-story">
      <SignalPath />
      <HomeHero />
      <HomeInterests />
      <HomeGuides />
      <HomePerspective />
      <HomePartners />
      <HomeMotion />
    </div>
  );
}
