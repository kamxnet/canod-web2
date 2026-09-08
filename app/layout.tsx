import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: { default: "CANOD | Thoughtful Goods for Work, Travel & Everyday Life", template: "%s | CANOD" },
  description: "CANOD is a Canadian-owned online retailer focused on useful products for modern work, travel, and everyday life.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} antialiased`}><Header /><main>{children}</main><Footer /></body></html>;
}
