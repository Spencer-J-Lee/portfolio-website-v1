import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/navbar/Navbar";
import { SocialLinks } from "@/components/socialLinks/SocialLinks";
import { inter, IBMPlexMono } from "@/styles/fonts";
import { SkipToContent } from "@/components/common/SkipToContent";
import { ConstellationBg } from "@/components/common/ConstellationBg";
import { Footer } from "@/components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Spencer Lee",
  description: "Personal portfolio website for software engineer, Spencer Lee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${IBMPlexMono.variable} bg-background font-inter text-primary scroll-smooth antialiased`}
      >
        <ConstellationBg />
        <SkipToContent />

        <div className="relative">
          <Navbar />
          <SocialLinks />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
