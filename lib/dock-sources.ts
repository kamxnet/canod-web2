export const dockSources = {
  usb: { title: "USB-IF: cables and connectors", url: "https://www.usb.org/cable_connector" },
  power: { title: "USB-IF: USB Power Delivery", url: "https://www.usb.org/usb-charger-pd" },
  displayport: { title: "VESA: DisplayPort over USB-C FAQ", url: "https://www.displayport.org/faq/" },
  windows: { title: "Microsoft: USB-C connection and charging problems", url: "https://support.microsoft.com/en-us/windows/hardware/usb/fix-usb-c-problems-in-windows" },
  mac: { title: "Apple: external-display limits on MacBook Pro", url: "https://support.apple.com/en-ca/101571" },
  displaylink: { title: "Synaptics: DisplayLink technology and platform support", url: "https://www.synaptics.com/products/displaylink-graphics" },
  permissions: { title: "DisplayLink: macOS Screen Recording permission", url: "https://support.displaylink.com/knowledgebase/articles/2008685-macos-sonoma-14-screen-recording-permission" },
  protectedVideo: { title: "DisplayLink: protected-video limitations on macOS", url: "https://support.displaylink.com/knowledgebase/articles/830301-content-protected-video-does-not-play-on-mac-while" },
} as const;

export const dockSourceCheckDate = "2026-09-11";
export const dockGuidePath = "/guides/seven-things-usb-c-dock/";
export const dockToolPath = "/tools/usb-c-dock-checker/";
