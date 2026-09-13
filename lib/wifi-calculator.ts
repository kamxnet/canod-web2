export type HomeSize = "apartment" | "small-house" | "medium-house" | "large-house";
export type FloorCount = "1" | "2" | "3";
export type RouterLocation = "central" | "corner" | "basement";
export type WeakZone = "upstairs" | "basement" | "corner-room" | "everywhere";
export type WallType = "drywall" | "plaster-brick-concrete";

export type WifiAnswers = {
  size: HomeSize;
  floors: FloorCount;
  location: RouterLocation;
  weakZone: WeakZone;
  wallType: WallType;
};

export const defaultWifiAnswers: WifiAnswers = {
  size: "medium-house",
  floors: "2",
  location: "corner",
  weakZone: "upstairs",
  wallType: "drywall",
};

export type WifiRecommendation = {
  primaryAdvice: string;
  recommendedHardware: string;
  nodeCount: string;
  placementRule: string;
  actionSteps: string[];
  mistakesToAvoid: string[];
  disclaimer: string;
};

export function calculateWifiPlan(answers: WifiAnswers): WifiRecommendation {
  const { size, floors, location, weakZone, wallType } = answers;

  // Decision 1: Is router placement the primary culprit?
  const isCornerOrBasement = location === "corner" || location === "basement";
  const isSmallHome = size === "apartment" || (size === "small-house" && floors === "1");

  let primaryAdvice = "";
  let recommendedHardware = "";
  let nodeCount = "";

  if (isSmallHome && isCornerOrBasement) {
    primaryAdvice = "Try moving your existing router to a central, open location first before spending money on new Wi-Fi gear.";
    recommendedHardware = "Reposition Existing Router (or a single modern Wi-Fi 6 router)";
    nodeCount = "1 Central Router";
  } else if (isSmallHome && !isCornerOrBasement) {
    primaryAdvice = "In a compact home, weak Wi-Fi is often caused by an outdated provider gateway, interference from nearby apartment networks, or 2.4 GHz clutter rather than range.";
    recommendedHardware = "Upgrade to a standalone Wi-Fi 6 Router (or split 2.4 GHz and 5 GHz bands)";
    nodeCount = "1 High-Performance Router";
  } else if (floors === "2" || size === "medium-house") {
    if (isCornerOrBasement) {
      primaryAdvice = "Your router is tucked away in a corner or basement, forcing the wireless signal to pass through multiple floors and walls at steep angles.";
      recommendedHardware = "Move router upstairs if possible, or invest in a 2-Node Mesh Wi-Fi System";
      nodeCount = "2-Pack Mesh System (or 1 router + 1 wired node)";
    } else {
      primaryAdvice = "For a 2-story home, a 2-node mesh Wi-Fi system provides seamless whole-home roaming without dead spots upstairs.";
      recommendedHardware = "2-Node Mesh Wi-Fi System";
      nodeCount = "2-Pack Mesh System";
    }
  } else {
    // 3+ floors or large home
    primaryAdvice = "A 3-story layout or large home requires dedicated coverage on multiple levels to eliminate dead zones in the basement and top floor.";
    recommendedHardware = "3-Node Mesh Wi-Fi System (ideally with Ethernet backhaul if available)";
    nodeCount = "3-Pack Mesh System";
  }

  // Wall type factor
  if (wallType === "plaster-brick-concrete") {
    primaryAdvice += " Older plaster with wire lath, brick, or concrete walls severely absorb Wi-Fi radio frequencies. Wireless mesh signals will struggle to jump through dense walls; consider running a flat Ethernet cable between nodes or using a wired access point.";
  }

  // Placement rule based on weak zone
  let placementRule = "";
  if (weakZone === "upstairs") {
    placementRule = "Place your second mesh node partway upstairs—for example, on the second-floor stair landing or in the open hallway—NOT inside the weak bedroom. A mesh node must receive a strong signal from the main router to retransmit it.";
  } else if (weakZone === "basement") {
    placementRule = "Keep the main router off the floor upstairs, and place the second node near the top of the basement stairs where line-of-sight is best.";
  } else {
    placementRule = "Position mesh nodes within 1 to 2 rooms of each other in open, elevated spots (on bookshelves or desks, never inside metal cabinets or behind TVs).";
  }

  const actionSteps = [
    "Test speeds beside your modem vs. in the weak room: if speeds are fast right beside the modem, your internet plan is fine—the wireless path inside your home is the only bottleneck.",
    "Elevate your router: placing a router off the floor on a desk or shelf instantly improves range over leaving it under a couch or in a utility closet.",
    "Place mesh nodes halfway: never put a mesh pod directly inside the dead zone where its own connection will already be weak.",
  ];

  const mistakesToAvoid = [
    "Buying a cheap Wi-Fi extender: plug-in extenders often halve your wireless speed and create an annoying second network name (_EXT).",
    "Paying your internet provider for a faster gigabit tier: a faster plan cannot push radio signals through concrete walls or distant bedrooms.",
    "Hiding the router in a metal entertainment unit or closed cabinet.",
  ];

  return {
    primaryAdvice,
    recommendedHardware,
    nodeCount,
    placementRule,
    actionSteps,
    mistakesToAvoid,
    disclaimer: "Practical planning guidance based on home layout principles. Real-world wireless speeds depend on your building materials, interference, and device antennas. Never treat coverage estimates as a guarantee.",
  };
}
