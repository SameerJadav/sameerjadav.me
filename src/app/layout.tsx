import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "~/app/providers";
import SiteFooter from "~/components/SiteFooter";
import Skeleton from "~/components/skeleton";
import { SITE } from "~/config";
import { cn } from "~/utils/cn";
import "~/styles/globals.css";

const SiteHeader = dynamic(() => import("~/components/SiteHeader"), {
  ssr: false,
  loading: () => (
    <div className="mt-8 flex w-full gap-4 md:mt-16">
      <Skeleton className="h-6 w-[60px] rounded-md" />
      <Skeleton className="h-6 w-[60px] rounded-md" />
    </div>
  ),
});

const ppeditorial = localFont({
  src: "../assets/fonts/pp-editorial/regular.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-pp-editorial",
});

const geistSans = localFont({
  src: [
    {
      path: "../assets/fonts/geist-sans/regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/geist-sans/medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../assets/fonts/geist-sans/semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../assets/fonts/geist-sans/bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "../assets/fonts/geist-mono/regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/geist-mono/bold.woff2",
      style: "normal",
      weight: "700",
    },
  ],
  variable: "--font-geist-mono",
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
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: title,
    },
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
          geistMono.variable,
          geistSans.variable,
        )}
      >
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
