import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonical
}: SEOProps): Metadata {
  const fullTitle = `${title} | SOS Carte Grise – Saint-Gaudens`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords || 'carte grise, Saint-Gaudens, Comminges, immatriculation, démarches administratives',
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
      url: canonical || 'https://soscartegrise-saintgaudens.fr',
      title: fullTitle,
      description,
      siteName: 'SOS Carte Grise – Saint-Gaudens',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'SOS Carte Grise – Saint-Gaudens',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || 'https://soscartegrise-saintgaudens.fr',
    },
  };
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: 'Agence d\'immatriculation et de démarches administratives liées aux véhicules à Saint-Gaudens',
    url: 'https://soscartegrise-saintgaudens.fr',
    telephone: BUSINESS.phoneMain,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: 'Occitanie',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng
    },
    openingHours: BUSINESS.hours.map(hour => 
      `${hour.day} ${hour.am},${hour.day} ${hour.pm}`
    ).join(';'),
    sameAs: [
      BUSINESS.social.facebook
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Saint-Gaudens, Comminges, Haute-Garonne'
    },
    serviceType: [
      'Changement de titulaire',
      'Duplicata de carte grise',
      'Changement d\'adresse',
      'Cession de véhicule',
      'WW provisoire',
      'Import/COC'
    ]
  };
}
