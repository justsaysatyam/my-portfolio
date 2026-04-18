import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThreeBackground from "@/components/ThreeBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SATYAM KUMAR JHA | Full-Stack & Python Developer",
  description: "Senior Full-Stack Developer specializing in Python/Django, Next.js, and high-performance web systems. Explore my portfolio of AI trading bots and enterprise solutions.",
  keywords: ["Satyam Kumar Jha", "Python Developer", "Django Developer", "Full Stack Developer", "Portfolio", "AI Trading Bot", "Next.js"],
  authors: [{ name: "Satyam Kumar Jha" }],
  openGraph: {
    title: "SATYAM KUMAR JHA | Full-Stack & Python Developer",
    description: "Explore the technical mission log and personal archive of Satyam Kumar Jha.",
    url: "https://your-domain.com",
    siteName: "Satyam Kumar Jha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SATYAM KUMAR JHA | Portfolio",
    description: "Full-Stack Developer mission log.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050a10] text-white">
        <ThreeBackground />
        <ScrollProgress />
        <CustomCursor />
        <div className="scanlines" />
        <div className="grid-background" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
