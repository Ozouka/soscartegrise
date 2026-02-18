import IconTruck from '@/components/icons/IconTruck';
import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plaque d\'immatriculation - SOS Carte Grise Saint-Gaudens',
  description: 'Commandez vos plaques d\'immatriculation homologuées. Service rapide et conforme aux normes françaises.',
};

export default function PlaqueImmatriculationPage() {
  const typesPlaques = [
    {
      id: 'plaque-standard',
      title: 'Plaque standard',
      description: 'Plaque d\'immatriculation standard aux normes françaises.',
      price: 'À partir de 25€',
      features: ['Homologuée', 'Résistante aux intempéries', 'Garantie 5 ans'],
    },
    {
      id: 'plaque-plexi',
      title: 'Plaque plexi',
      description: 'Plaque en plexiglas transparent pour un look moderne.',
      price: 'À partir de 35€',
      features: ['Design moderne', 'Haute résistance', 'Facile à nettoyer'],
    },
    {
      id: 'plaque-collection',
      title: 'Plaque collection',
      description: 'Plaque spéciale pour véhicules de collection.',
      price: 'À partir de 30€',
      features: ['Spécial collection', 'Conforme réglementation', 'Finition soignée'],
    },
    {
      id: 'plaque-moto',
      title: 'Plaque moto',
      description: 'Plaque adaptée aux deux-roues motorisés.',
      price: 'À partir de 20€',
      features: ['Format adapté', 'Fixation sécurisée', 'Résistante aux vibrations'],
    },
  ];

  const departements = [
    { code: '09', name: 'Ariège' },
    { code: '31', name: 'Haute-Garonne' },
    { code: '65', name: 'Hautes-Pyrénées' },
    { code: '66', name: 'Pyrénées-Orientales' },
    { code: '81', name: 'Tarn' },
    { code: '82', name: 'Tarn-et-Garonne' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Plaque d'immatriculation
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Commandez vos plaques d'immatriculation homologuées. 
              Service rapide et conforme aux normes françaises en vigueur.
            </p>
          </div>
        </div>
      </section>

      {/* Types de plaques */}
      <section className="py-16">
        <div className="container-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nos types de plaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {typesPlaques.map((plaque) => (
              <div
                key={plaque.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plaque.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {plaque.description}
                </p>
                <div className="text-lg font-bold text-sky-600 mb-4">
                  {plaque.price}
                </div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {plaque.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full text-sm">
                  Commander
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Départements disponibles */}
      <section className="bg-white py-16">
        <div className="container-lg mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Départements disponibles
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {departements.map((dept) => (
                <div
                  key={dept.code}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-sky-50 transition-colors"
                >
                  <div className="text-2xl font-bold text-sky-600 mb-1">
                    {dept.code}
                  </div>
                  <div className="text-sm text-gray-600">
                    {dept.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informations importantes */}
      <section className="bg-sky-50 py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Informations importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Homologuées
                </h3>
                <p className="text-gray-600">
                  Toutes nos plaques sont conformes aux normes françaises en vigueur.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconTruck className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Retrait express
                </h3>
                <p className="text-gray-600">
                  Vos plaques sont fabriquées et prêtes à être récupérées en magasin sous 48h.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Garantie qualité
                </h3>
                <p className="text-gray-600">
                  Garantie 5 ans sur tous nos produits contre les défauts de fabrication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 text-white py-16">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Commandez vos plaques dès maintenant
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Service rapide, qualité garantie et conformité assurée pour toutes vos plaques d'immatriculation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Commander maintenant
            </a>
            <a href={`tel:${BUSINESS.phoneMain.replace(/\s/g, '')}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors">
              Appeler pour commander
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
