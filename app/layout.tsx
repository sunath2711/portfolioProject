import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import ClientScroller from "@/components/ClientScroller"; // We'll create this small wrapper

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-rajdhani" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Sunath Khadikar - Engineering Solutions",
  description: "Portfolio of Sunath K, software engineer focused on building elegant, scalable and intelligent products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${orbitron.variable} ${rajdhani.variable} ${mono.variable} bg-[#020617]`}>
        <ClientScroller /> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}