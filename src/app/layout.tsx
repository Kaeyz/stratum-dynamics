import "@/theme/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import React from "react";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

const geistRegular = Geist({
  variable: "--font-geist-regular",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stratum",
  description: "Stratum Dynamics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistRegular.variable} antialiased`}>
        {/* <div className="m-auto w-full md:max-w-screen-xl"> */}
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
