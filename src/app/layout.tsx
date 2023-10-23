import { Suspense } from "react"
import { type Metadata } from "next"
import { JetBrains_Mono, Nunito } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/react"
import { SITE } from "~/config"
import { cn } from "~/lib/utils"
import Footer from "~/components/Footer"
import HeaderSkeleton from "~/components/HeaderSkeleton"
import SiteHeader from "~/components/SiteHeader"
import "~/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const ppeditorial = localFont({
  src: "../../public/fonts/pp-editorial-new/regular.woff2",
  display: "swap",
  weight: "500",
  preload: true,
  variable: "--font-pp-editorial-new",
})

const title = SITE.name
const description = SITE.description
const url = SITE.url
const image = `${SITE.image}/home`

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  keywords: [
    "Sameer Jadav",
    "JavaScript",
    "Typescript",
    "Full-stack Developer",
    "Next.js",
    "Blog",
  ],
  authors: [{ name: SITE.author, url: url }],
  creator: SITE.author,
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#151718" },
    { media: "(prefers-color-scheme: dark)", color: "#151718" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: SITE.twitterId,
    site: SITE.twitterId,
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
  alternates: { canonical: url },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html dir="ltr" lang="en">
      <body
        className={cn(
          nunito.variable,
          jetbrains.variable,
          ppeditorial.variable,
        )}
      >
        <Suspense fallback={<HeaderSkeleton />}>
          <SiteHeader />
        </Suspense>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
