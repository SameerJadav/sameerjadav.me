import type { Metadata, Viewport } from "next";
import { JetBrains_Mono as JetBrainsMono, Nunito } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import SiteFooter from "~/components/SiteFooter";
import SiteHeader from "~/components/SiteHeader";
import { SITE } from "~/config";
import { cn } from "~/utils";
import "~/styles/globals.css";

const ppeditorial = localFont({
  src: "./fonts/pp-editorial-new/regular.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-pp-editorial-new",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const jetbrains = JetBrainsMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const title = SITE.name;
const description = SITE.description;
const url = SITE.url;
const twitterId = SITE.twitterId;
const author = SITE.author;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description,
  applicationName: title,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: author, url }],
  creator: author,
  publisher: author,
  metadataBase: new URL(url),
  keywords: [
    "Sameer Jadav",
    "Typescript",
    "Full-stack Developer",
    "Next.js",
    "Blog",
  ],
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
    creator: twitterId,
    site: twitterId,
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
  manifest: `${url}/site.webmanifest`,
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          ppeditorial.variable,
          jetbrains.variable,
          nunito.variable,
        )}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
      <Analytics />
    </html>
  );
}
