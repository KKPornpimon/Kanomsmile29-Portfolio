import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pornpimon Pradabsri - Portfolio",
  description: "My creative work and projects.",
  keywords: [
    "Pompimon Pradabsri",
    "Kanomsmile29",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Pompimon Pradabsri", url: "https://kanomsmile29-portfolio.vercel.app" }],
  creator: "Pompimon Pradabsri",
  openGraph: {
    title: 'Pompimon Pradabsri - Portfolio',
    description: 'My creative work and projects.',
    url: 'https://kanomsmile29-portfolio.vercel.app',
    siteName: 'Pompimon Portfolio',
    images: [
      {
        url: 'https://kanomsmile29-portfolio.vercel.app/og-image.png', // ต้องใช้ลิงก์เต็ม!
        width: 1200,
        height: 675,
        alt: 'Pompimon Portfolio Thumbnail',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        <main className="container mx-auto min-h-screen">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
