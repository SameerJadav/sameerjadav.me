import { siteConfig } from '~/config/site';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Creative Coding',
    'Frontend Development',
    'Radix UI',
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#161618' },
    { media: '(prefers-color-scheme: dark)', color: '#161618' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterId,
    site: siteConfig.twitterId,
  },
  /*   icons: {
    icon: "/favicon.ico",
  }, */
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="ltr" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
