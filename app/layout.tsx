import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Header from "@/components/header";
import Filter from "@/components/filter";
import "mapbox-gl/dist/mapbox-gl.css";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lystio",
  description: "",
};

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="flex h-screen w-screen flex-col overflow-hidden">
        <Header />
        <Filter />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
