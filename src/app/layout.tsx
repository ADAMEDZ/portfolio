import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adem Ghelous | Mechatronics Engineering Portfolio",
  description: "State Engineer student at University of Sétif 1, Algeria. Specializing in Mechanical Manufacturing and AI Development. Building the intersection of moving mechanical parts and intelligent code.",
  keywords: ["Mechatronics", "AI Developer", "Mechanical Engineering", "SolidWorks", "Python", "React", "OpenCV", "MediaPipe", "University of Sétif 1"],
  authors: [{ name: "Adem Ghelous" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Adem Ghelous | Mechatronics Engineering Portfolio",
    description: "State Engineer student specializing in Mechanical Manufacturing and AI Development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adem Ghelous | Mechatronics Engineering Portfolio",
    description: "State Engineer student specializing in Mechanical Manufacturing and AI Development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-white`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
