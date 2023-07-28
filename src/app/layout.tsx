import { type Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { SITE } from "~/config"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const title = SITE.name
const description = SITE.description
const url = SITE.url
const image = `${SITE.image}/home`

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  keywords: ["Sameer Jadav", "Web Developer", "Programming", "Blog"],
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
    <html dir="ltr" lang="en_US">
      <body className={cn(inter.variable, jetbrains.variable)}>{children}</body>
    </html>
  )
}
