import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shironstudio.com"),
  title: {
    default: "Shiron Studio — Jasa Website & Konten Digital untuk UMKM",
    template: "%s | Shiron Studio",
  },
  description:
    "Shiron Studio menyediakan jasa pembuatan website, desain, dan konten digital profesional untuk UMKM. Harga terjangkau, proses cepat, dan gratis konsultasi.",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "jasa editing video",
    "landing page murah",
    "digital agency",
    "website profesional",
    "jasa landing page",
  ],
  authors: [{ name: "Shiron Studio" }],
  creator: "Shiron Studio",
  publisher: "Shiron Studio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Shiron Studio — Solusi Digital Modern untuk UMKM",
    description:
      "Bikin website UMKM kamu lebih profesional dengan harga terjangkau. Modern, cepat, dan responsif.",
    url: "https://shironstudio.com",
    siteName: "Shiron Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shiron Studio | Digital Service Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shiron Studio — Solusi Digital untuk UMKM",
    description:
      "Jasa pembuatan website, desain visual, dan konten digital. Cepat, modern, terjangkau.",
    images: ["/og-image.jpg"],
  },

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
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
      <body className={`${poppins.variable} ${syne.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
