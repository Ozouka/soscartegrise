import { Metadata } from 'next';
import Link from 'next/link';
import {
  PERMIS_SERVICES,
  PERMIS_PAGE_COPY,
  BUSINESS,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Permis de conduire - SOS Carte Grise Saint-Gaudens',
  description: 'Toutes vos démarches pour le permis de conduire : duplicata, récupération, renouvellement, permis européen et international.',
};

export default function PermisDeConduirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {PERMIS_PAGE_COPY.title}
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              {PERMIS_PAGE_COPY.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-lg mx-auto px-4">
          <div className="flex flex-col gap-8">
            {PERMIS_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <Link href="/contact" className="btn-primary w-full md:w-auto md:self-start text-center">
                    {PERMIS_PAGE_COPY.buttonLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {PERMIS_PAGE_COPY.infoTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  {PERMIS_PAGE_COPY.documentsTitle}
                </h3>
                <ul className="text-sky-700 space-y-2">
                  {PERMIS_PAGE_COPY.documents.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  {PERMIS_PAGE_COPY.delaysTitle}
                </h3>
                <ul className="text-sky-700 space-y-2">
                  {PERMIS_PAGE_COPY.delays.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-50 py-16">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {PERMIS_PAGE_COPY.ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {PERMIS_PAGE_COPY.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {PERMIS_PAGE_COPY.ctaContact}
            </Link>
            <a href={`tel:${BUSINESS.phoneMain.replace(/\s/g, '')}`} className="btn-secondary">
              {PERMIS_PAGE_COPY.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
