export type LaptopOption =
  | "none"
  | "macbook-air"
  | "macbook-pro-14"
  | "macbook-pro-16"
  | "pc-thin"
  | "pc-gaming";

export type PhoneOption =
  | "none"
  | "iphone"
  | "samsung-pixel"
  | "other-phone";

export type TabletOption =
  | "none"
  | "ipad-pro"
  | "ipad-basic"
  | "kindle";

export type ChargerAnswers = {
  laptop: LaptopOption;
  phone: PhoneOption;
  tablet: TabletOption;
  simultaneous: "all" | "one";
  useCase: "travel" | "desk";
};

export const defaultChargerAnswers: ChargerAnswers = {
  laptop: "macbook-air",
  phone: "iphone",
  tablet: "none",
  simultaneous: "all",
  useCase: "travel",
};

export type ChargerRecommendation = {
  tierWatts: number;
  headline: string;
  verdict: string;
  breakdown: { label: string; watts: string; reason: string }[];
  portSplitExample: string;
  shoppingTips: string[];
  cableNote: string;
};

export function calculateChargerWattage(answers: ChargerAnswers): ChargerRecommendation {
  const { laptop, phone, tablet, simultaneous, useCase } = answers;

  // Base individual wattage needs
  let laptopWatts = 0;
  let laptopDesc = "";
  switch (laptop) {
    case "macbook-air":
      laptopWatts = 45; // 30W idle, 45W–65W fast
      laptopDesc = "MacBook Air (needs 30W to 45W)";
      break;
    case "macbook-pro-14":
      laptopWatts = 70; // 67W–96W
      laptopDesc = "MacBook Pro 14\" (needs 67W to 70W)";
      break;
    case "macbook-pro-16":
      laptopWatts = 100; // 96W–140W
      laptopDesc = "MacBook Pro 16\" (needs 96W to 100W under load)";
      break;
    case "pc-thin":
      laptopWatts = 65; // Standard USB-PD 65W
      laptopDesc = "Windows Thin & Light (Dell XPS, ThinkPad, Surface — 65W)";
      break;
    case "pc-gaming":
      laptopWatts = 100;
      laptopDesc = "High-Power / Gaming Laptop (100W USB-C minimum)";
      break;
    default:
      laptopWatts = 0;
      laptopDesc = "No laptop";
  }

  let phoneWatts = 0;
  let phoneDesc = "";
  switch (phone) {
    case "iphone":
      phoneWatts = 25;
      phoneDesc = "iPhone (fast charges at 20W to 27W)";
      break;
    case "samsung-pixel":
      phoneWatts = 30;
      phoneDesc = "Samsung Galaxy / Google Pixel (needs 25W to 45W PPS)";
      break;
    case "other-phone":
      phoneWatts = 20;
      phoneDesc = "Smartphone (standard 18W to 20W fast charging)";
      break;
    default:
      phoneWatts = 0;
      phoneDesc = "No phone";
  }

  let tabletWatts = 0;
  let tabletDesc = "";
  switch (tablet) {
    case "ipad-pro":
      tabletWatts = 30;
      tabletDesc = "iPad Pro / iPad Air (fast charges at 30W)";
      break;
    case "ipad-basic":
      tabletWatts = 20;
      tabletDesc = "Standard iPad / iPad mini (charges at 20W)";
      break;
    case "kindle":
      tabletWatts = 10;
      tabletDesc = "E-reader / small accessory (5W to 10W)";
      break;
    default:
      tabletWatts = 0;
      tabletDesc = "No tablet";
  }

  // Determine total combined requirement
  const breakdown: { label: string; watts: string; reason: string }[] = [];
  if (laptopWatts > 0) breakdown.push({ label: "Laptop", watts: `${laptopWatts}W`, reason: laptopDesc });
  if (phoneWatts > 0) breakdown.push({ label: "Phone", watts: `${phoneWatts}W`, reason: phoneDesc });
  if (tabletWatts > 0) breakdown.push({ label: "Tablet", watts: `${tabletWatts}W`, reason: tabletDesc });

  let combined = laptopWatts + phoneWatts + tabletWatts;
  if (simultaneous === "one") {
    combined = Math.max(laptopWatts, phoneWatts, tabletWatts);
  }

  // Map to standard retail GaN wattage tiers: 30W, 65W, 100W, 140W
  let tierWatts = 65;
  let portSplitExample = "";

  if (combined <= 30) {
    tierWatts = 30;
    portSplitExample = "Provides full 30W to your phone, tablet, or lightweight MacBook Air.";
  } else if (combined <= 70) {
    tierWatts = 65;
    if (laptop !== "none" && phone !== "none") {
      portSplitExample = "When both are plugged in: Port 1 gives 45W to your laptop, Port 2 gives 20W to your phone.";
    } else {
      portSplitExample = "Provides up to 65W on a single port, or splits ~45W + 20W when two devices are plugged in.";
    }
  } else if (combined <= 105) {
    tierWatts = 100;
    if (laptop === "macbook-pro-16" || laptop === "pc-gaming") {
      portSplitExample = "When charging together: Port 1 gives 65W–100W to your laptop, Port 2 gives 25W–30W to your phone.";
    } else {
      portSplitExample = "Port 1 gives 65W to your laptop, Port 2 gives 25W to your phone, and Port 3 gives 10W to your tablet/earbuds.";
    }
  } else {
    tierWatts = 140;
    portSplitExample = "Port 1 supplies up to 100W–140W for your 16\" laptop under heavy load, leaving 30W–40W for your phone and accessories.";
  }

  const headline = `A ${tierWatts}W GaN Charger is the ideal fit for your setup.`;

  let verdict = "";
  if (tierWatts === 30) {
    verdict = "Because you are only charging phones or a tablet, a compact 30W GaN plug gives you maximum charging speed in a block barely larger than an old 5W iPhone cube.";
  } else if (tierWatts === 65) {
    verdict = "A 65W multi-port charger is the universal sweet spot for everyday travel and desk use. It can power your laptop at full speed on its own, and automatically drops to 45W when you plug your phone in—keeping your laptop battery steady while your phone fast-charges.";
  } else if (tierWatts === 100) {
    verdict = "Because you have a power-demanding laptop or want to fast-charge 3 devices simultaneously, a 100W charger guarantees your laptop will never display a 'Slow Charger' warning or drain its battery during video calls.";
  } else {
    verdict = "A 140W charger provides high-headroom Power Delivery (EPR). It keeps a 16\" laptop charging rapidly even during 4K video exports or gaming, while maintaining independent fast-charging ports for your other devices.";
  }

  const shoppingTips: string[] = [
    `Look for "GaN" (Gallium Nitride) technology: GaN chargers run cooler and are roughly 50% smaller than old silicon laptop power bricks.`,
    `Look for at least 2 USB-C ports (or 2 USB-C + 1 USB-A) so you can charge your phone and laptop from one wall outlet.`,
    `Check for recognized Canadian electrical safety marks: ensure the actual charger has an authentic CSA, cUL, or cETL logo printed on the back.`,
  ];

  const cableNote = tierWatts > 60
    ? "Important: Standard USB-C charging cables are limited to 60W. To deliver full power from a 65W, 100W, or 140W charger, make sure your USB-C cable is rated for 100W or 240W (E-Marker certified)."
    : "Any standard certified USB-C cable will support this wattage without power throttling.";

  return {
    tierWatts,
    headline,
    verdict,
    breakdown,
    portSplitExample,
    shoppingTips,
    cableNote,
  };
}
