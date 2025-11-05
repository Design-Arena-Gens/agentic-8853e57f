import type { Metadata } from "next";
import { Quicksand, Shrikhand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

export const metadata: Metadata = {
  title: "Fraggle Rock Neon Caverns",
  description:
    "Dive into a dazzling Fraggle Rock experience with interactive worlds, neon posters, and character spotlights in a lovingly crafted tribute site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${shrikhand.variable} font-sans`}>{children}</body>
    </html>
  );
}
