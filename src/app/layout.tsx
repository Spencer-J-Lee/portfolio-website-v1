import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/reset.css";
import "../css/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@/components/navbar/Navbar";
import { SocialLinks } from "@/components/SocialLinks";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} scroll-smooth bg-background text-primary antialiased`}
      >
        <Navbar />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
