import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { generateStructuredData } from '@/components/SEO';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SOS Carte Grise – Saint-Gaudens | Carte grise simple et rapide',
    template: '%s | SOS Carte Grise – Saint-Gaudens'
  },
  description: 'Carte grise en Comminges, simple & rapide. Sans prise de tête : nous gérons votre dossier de A à Z à Saint-Gaudens. Habilité SIV, traitement rapide.',
  keywords: 'carte grise, Saint-Gaudens, Comminges, immatriculation, changement titulaire, duplicata',
  authors: [{ name: 'SOS Carte Grise – Saint-Gaudens' }],
  creator: 'SOS Carte Grise – Saint-Gaudens',
  publisher: 'SOS Carte Grise – Saint-Gaudens',
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
    url: 'https://soscartegrise-saintgaudens.fr',
    title: 'SOS Carte Grise – Saint-Gaudens',
    description: 'Carte grise en Comminges, simple & rapide. Habilité SIV, traitement rapide.',
    siteName: 'SOS Carte Grise – Saint-Gaudens',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SOS Carte Grise – Saint-Gaudens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOS Carte Grise – Saint-Gaudens',
    description: 'Carte grise en Comminges, simple & rapide. Habilité SIV, traitement rapide.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://soscartegrise-saintgaudens.fr',
  },
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
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

