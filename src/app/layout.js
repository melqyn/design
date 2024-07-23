"use client"
import { Inter, Poppins } from "next/font/google";
import React, { useState, useEffect} from "react";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"],
display:"swap",
variable: "--font-inter",
weight:["300","600"]
 });

export const poppins = Poppins({ 
  subsets: ["latin"],
  display:"swap",
  variable: "--font-poppins",
  weight:["300","600", "700"]
 });

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-[#FFFBFA]`}>
      {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
      <main className="inter fade-in" >{children}</main>
        )}
      </body>
    </html>
  );
}
