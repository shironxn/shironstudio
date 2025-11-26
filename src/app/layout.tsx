import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiron Studio - Jasa Pembuatan Website Profesional untuk UMKM",
  description:
    "Shiron Studio menyediakan jasa pembuatan website, desain grafis, dan konten digital untuk UMKM dengan harga terjangkau. Hasil profesional, proses cepat, dan gratis konsultasi.",
  keywords:
    "jasa pembuatan website, website UMKM, desain grafis, editing konten, digital agency, website murah, website profesional",
  authors: [{ name: "Shiron Studio" }],
  creator: "Shiron Studio",
  publisher: "Shiron Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shironstudio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shiron Studio - Jasa Website Profesional untuk UMKM",
    description:
      "Bikin website UMKM kamu jadi profesional dan modern dengan harga terjangkau. Cepat, simple, dan hasil memuaskan.",
    url: "https://shironstudio.com",
    siteName: "Shiron Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shiron Studio - Digital Service Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiron Studio - Jasa Website Profesional untuk UMKM",
    description:
      "Bikin website UMKM kamu jadi profesional dan modern dengan harga terjangkau.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${jakartaSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
