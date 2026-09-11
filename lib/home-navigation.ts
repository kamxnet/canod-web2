import { productCategories } from "./product-categories";

export const intents = [
  { id: "workspace", label: "Build a better workspace", category: 2, place: "desk", priority: "clutter" },
  { id: "digital", label: "Organize my digital life", category: 0, place: "home", priority: "files" },
  { id: "connectivity", label: "Improve connectivity", category: 0, place: "home", priority: "connections" },
  { id: "travel", label: "Travel with less clutter", category: 3, place: "travel", priority: "clutter" },
  { id: "everyday", label: "Find technology worth buying", category: 4, place: "home", priority: "fit" },
] as const;

export type IntentId = (typeof intents)[number]["id"];
export const places = [
  { id: "desk", label: "At my workspace" },
  { id: "home", label: "Around my home" },
  { id: "travel", label: "On the move" },
] as const;
export const priorities = [
  { id: "clutter", label: "Cables, carry & clutter" },
  { id: "files", label: "Files & backups" },
  { id: "connections", label: "Connections & compatibility" },
  { id: "fit", label: "Fit & everyday usefulness" },
] as const;
export type Place = (typeof places)[number]["id"];
export type Priority = (typeof priorities)[number]["id"];
export type GuidePreview = { slug: string; title: string; description: string };

export function categoryHref(index: number) {
  const category = productCategories[index];
  return category ? `/interests/?category=${encodeURIComponent(category.name)}` : "/interests/";
}

export function startingPoint(place: Place, priority: Priority) {
  const storage = priority === "files" || priority === "connections";
  const category = storage ? 0 : place === "travel" ? 3 : place === "desk" ? priority === "fit" ? 1 : 2 : 4;
  const guide = storage
    ? place === "travel" ? null : { slug: "choosing-a-home-nas", anchor: priority === "connections" ? "network-speed" : "who-it-suits" }
    : place === "home" ? null : { slug: "choosing-a-tech-organizer", anchor: priority === "fit" ? "size-and-fit" : "start-with-your-carry" };
  return { category, guide };
}
