import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { generateStructuredData } from '@/components/SEO';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SEO_DEFAULT } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULT.defaultTitle,
    template: `%s | ${SEO_DEFAULT.siteName}`,
  },
  description: SEO_DEFAULT.defaultDescription,
  keywords: SEO_DEFAULT.defaultKeywords,
  authors: [{ name: SEO_DEFAULT.siteName }],
  creator: SEO_DEFAULT.siteName,
  publisher: SEO_DEFAULT.siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SEO_DEFAULT.canonicalUrl,
    title: SEO_DEFAULT.siteName,
    description: SEO_DEFAULT.defaultDescription,
    siteName: SEO_DEFAULT.siteName,
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: SEO_DEFAULT.siteName },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULT.siteName,
    description: SEO_DEFAULT.defaultDescription,
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: SEO_DEFAULT.canonicalUrl },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
          <SpeedInsights />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

