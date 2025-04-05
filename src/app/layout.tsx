import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/reset.css";
import "./css/globals.css";

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
        className={`${inter.className} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
