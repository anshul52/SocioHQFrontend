import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Inter,
  Lexend,
  Mulish, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "Socio Media Marketing - Digital Media Agency | Dubai, UAE",
  description:
    "Socio Marketing - your go-to partner for 360 digital marketing solutions in Dubai, UAE.",
  icons: {
    icon: "https://framerusercontent.com/images/cA7tBwh3eKa921p5V713yNXqX0.png",
    apple:
      "https://framerusercontent.com/images/nRqvxPcL9OthvkkUffGTnO4C4A.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={[
          inter.variable,
          lexend.variable,
          instrumentSerif.variable,
          mulish.variable,
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
