import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Link from 'next/link';

export default function Hero() {
  const usps = [
    "Habilité SIV",
    "Traitement rapide",
    "Accompagnement humain",
    "Face à La Poste – stationnement facile"
  ];

  return (
    <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container-lg mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Titre principal */}
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Carte grise en Comminges,{' '}
              <span className="text-sky-600">simple & rapide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Sans prise de tête : nous gérons votre dossier de A à Z à Saint-Gaudens.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/demarches" className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
              Démarrer ma démarche
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS.phoneMain}`}
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Appeler {BUSINESS.phoneMain}
            </a>
          </div>

          {/* USP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>{usp}</span>
              </div>
            ))}
          </div>

          {/* Localisation */}
          <div className="flex items-center gap-2 text-gray-600 mt-4">
            <span className="text-sm">
              �� {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}



