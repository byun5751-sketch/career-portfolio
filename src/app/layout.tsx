import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL = "https://brasley-byun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brasley Byun - Business Development & Operations",
    template: "%s | Brasley Byun",
  },
  description:
    "Career portfolio of Brasley Byun (변재일). Business Development, Sales Operations, and Marketing Operations professional with experience at BIGO Live, ZEISS, and SAP.",
  openGraph: {
    type: "website",
    siteName: "Brasley Byun Portfolio",
    locale: "en_US",
    alternateLocale: "ko_KR",
    images: [
      {
        url: "/profile.jpeg",
        width: 600,
        height: 600,
        alt: "Brasley Byun",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Brasley Byun - Business Development & Operations",
    description:
      "Career portfolio: Business Development, Sales Operations, Marketing Operations.",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: "/en",
      ko: "/ko",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
