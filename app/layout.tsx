import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Header from "@/components/header";

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
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
