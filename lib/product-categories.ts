import { Cable, HardDrive, Laptop, Luggage, ShoppingBag } from "lucide-react";

export const productCategories = [
  { name: "Storage & connectivity", description: "Drives, storage systems, cables and adapters.", icon: HardDrive },
  { name: "Tech accessories", description: "Stands, sleeves and everyday device essentials.", icon: Laptop },
  { name: "Desk & cable", description: "A place for work tools and the cables between them.", icon: Cable },
  { name: "Travel", description: "Pouches, packing cubes and things that travel well.", icon: Luggage },
  { name: "Everyday", description: "Useful carry and organization for daily routines.", icon: ShoppingBag },
] as const;
