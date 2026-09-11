export const safetyReviewDate = "2026-09-11";
export const safetyGuidePath = "/guides/charger-safety-canada/";
export const safetyToolPath = "/tools/canadian-electrical-safety-checklist/";
export const safetyDisclaimer = "This tool provides an educational pre-purchase checklist. It does not certify a product, determine legal compliance or replace manufacturer, regulator, electrician or other professional advice.";

export const safetySources = {
  electrical: { title: "Health Canada: electrical product safety", url: "https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html" },
  buyingElectrical: { title: "Health Canada: buying electrical products online", url: "https://www.canada.ca/en/health-canada/topics/consumer-product-safety-education/online-shopping/electrical-products.html" },
  marks: { title: "Ontario ESA: recognized approval marks", url: "https://esasafe.com/electrical-products/recognized-certification-marks/" },
  consumer: { title: "Ontario ESA: product safety tips", url: "https://esasafe.com/electrical-products/product-safety-tips/" },
  recalls: { title: "Government of Canada: recalls and safety alerts", url: "https://recalls-rappels.canada.ca/en" },
  battery: { title: "Health Canada: lithium-ion battery safety", url: "https://www.canada.ca/en/health-canada/services/household-products/battery-safety/lithium-ion.html" },
  batteryBasics: { title: "Health Canada: battery types and safe use", url: "https://www.canada.ca/en/health-canada/services/household-products/battery-safety.html" },
  shopping: { title: "Health Canada: buying consumer products online", url: "https://www.canada.ca/en/health-canada/services/buying-consumer-products-online.html" },
  usb: { title: "USB-IF: USB Power Delivery", url: "https://www.usb.org/usb-charger-pd" },
  cable: { title: "USB-IF: cable capabilities", url: "https://www.usb.org/cable_connector" },
  adapterExample: { title: "Apple: adapter input and output information (manufacturer example)", url: "https://support.apple.com/guide/iphone/important-safety-information-iph301fc905/26/ios/26" },
  report: { title: "Health Canada: report a consumer-product incident", url: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/report-incident.html" },
  batteryBuying: { title: "Transport Canada: buying lithium batteries", url: "https://tc.canada.ca/en/dangerous-goods/safety-advisories/lithium-batteries-be-aware-what-you-buy" },
} as const;
export type SafetySourceId = keyof typeof safetySources;

export const inspectionTopics = [
  { id: "approval", label: "Canadian approval", detail: "Identify the approval information on the exact mains-powered product. Compare it with the official reference, not just a seller's claim.", source: "marks", anchor: "approval" },
  { id: "input", label: "Input voltage & frequency", detail: "Read the input label and instructions. Confirm the stated supply voltage and frequency suit the intended location; plug shape is not enough.", source: "electrical", anchor: "input" },
  { id: "output", label: "Output voltage & current", detail: "Compare the charger output with the exact device's requirements. Ask the manufacturer about any mismatch or missing information.", source: "battery", anchor: "output" },
  { id: "delivery", label: "Power delivery", detail: "Check the charging profiles supported by the charger and device, including any sharing of power between ports.", source: "usb", anchor: "usb-c" },
  { id: "cable", label: "Cable & device fit", detail: "A matching USB-C connector does not tell you the cable's power or data capability. Check the whole connection.", source: "cable", anchor: "usb-c" },
  { id: "recall", label: "Recall check", detail: "Search the exact product and model in Canada's recall database. Read any matching notice and its next steps. This scene performs no database lookup.", source: "recalls", anchor: "recalls" },
] as const satisfies readonly { id: string; label: string; detail: string; source: SafetySourceId; anchor: string }[];
