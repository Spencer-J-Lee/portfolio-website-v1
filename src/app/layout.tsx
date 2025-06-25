import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";

import { ConstellationBg } from "@/components/common/ConstellationBg";
import { SkipToContent } from "@/components/common/SkipToContent";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { SocialLinks } from "@/components/socialLinks/SocialLinks";
import { IBMPlexMono,inter } from "@/styles/fonts";

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
