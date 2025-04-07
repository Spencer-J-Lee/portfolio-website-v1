import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/reset.css";
import "../css/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Header } from "@/components/header/Header";
import { SocialLinks } from "@/components/header/SocialLinks";
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
        className={`${inter.className} bg-background text-text antialiased`}
      >
        <Header />
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
