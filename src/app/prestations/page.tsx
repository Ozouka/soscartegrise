import { Metadata } from 'next';
import Link from 'next/link';
import { CARTE_GRISE_SERVICES, PRESTATIONS_PAGE_COPY, BUSINESS } from '@/lib/constants';
import SimpleServiceCard from '@/components/SimpleServiceCard';

export const metadata: Metadata = {
  title: 'Prestations - SOS Carte Grise Saint-Gaudens',
  description: 'Découvrez toutes nos prestations pour vos démarches de carte grise : changement de titulaire, changement d\'adresse, déclaration de cession et plus encore.',
};

export default function PrestationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {PRESTATIONS_PAGE_COPY.title}
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              {PRESTATIONS_PAGE_COPY.description}
            </p>
          </div>
        </div>
      </section>

      {/* Prestations Grid */}
      <section className="py-16">
        <div className="container-lg mx-auto px-4">
          <div className="flex flex-col gap-8">
            {CARTE_GRISE_SERVICES.map((service) => (
              <SimpleServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 py-16">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {PRESTATIONS_PAGE_COPY.ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {PRESTATIONS_PAGE_COPY.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {PRESTATIONS_PAGE_COPY.ctaContact}
            </Link>
            <a href={`tel:${BUSINESS.phoneMain.replace(/\s/g, '')}`} className="btn-secondary">
              {PRESTATIONS_PAGE_COPY.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
