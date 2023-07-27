import { type Metadata } from "next"
import { Inter } from "next/font/google"
import { SITE } from "~/config"
import "~/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s - ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["Sameer Jadav", "Web Developer", "Programming", "Blog"],
  authors: [{ name: SITE.author }],
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
    url: SITE.url,
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.image}/home`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [`${SITE.image}/home`],
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
  manifest: `${SITE.url}/site.webmanifest`,
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html dir="ltr" lang="en_US">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
