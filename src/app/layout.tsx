import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "../css/reset.css";
import "../css/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/navbar/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-mono",
});

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
        className={`${inter.variable} ${IBMPlexMono.variable} scroll-smooth bg-background font-inter text-primary antialiased`}
      >
        <Navbar />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
