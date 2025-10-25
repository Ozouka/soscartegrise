import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Permis de conduire - SOS Carte Grise Saint-Gaudens',
  description: 'Toutes vos démarches pour le permis de conduire : duplicata, récupération, renouvellement, permis européen et international.',
};

export default function PermisDeConduirePage() {
  const services = [
    {
      id: 'demande-duplicata',
      title: 'Demande de duplicata',
      description: 'Obtenez un duplicata de votre permis de conduire en cas de perte, vol ou détérioration.',
      image: '/images/duplicata-permis.jpg',
    },
    {
      id: 'demande-recuperation',
      title: 'Demande de récupération',
      description: 'Récupérez votre permis de conduire après une suspension ou une annulation.',
      image: '/images/recuperation-permis.jpg',
    },
    {
      id: 'demande-renouvellement',
      title: 'Demande de renouvellement',
      description: 'Renouvelez votre permis de conduire arrivé à expiration.',
      image: '/images/renouvellement-permis.jpg',
    },
    {
      id: 'permis-europeen',
      title: 'Changement de permis européen',
      description: 'Échangez votre permis de conduire européen contre un permis français.',
      image: '/images/permis-europeen.jpg',
    },
    {
      id: 'autre-demande',
      title: 'Autre demande',
      description: 'Nous traitons toutes vos autres demandes liées au permis de conduire.',
      image: '/images/autre-demande-permis.jpg',
    },
    {
      id: 'permis-etranger',
      title: 'Changement de permis étranger',
      description: 'Échangez votre permis de conduire étranger contre un permis français.',
      image: '/images/permis-etranger.jpg',
    },
    {
      id: 'permis-international',
      title: 'Demande de permis international',
      description: 'Obtenez votre permis de conduire international pour voyager à l\'étranger.',
      image: '/images/permis-international.jpg',
    },
    {
      id: 'reussite-examen',
      title: 'Réussite à l\'examen',
      description: 'Démarches suite à la réussite de votre examen du permis de conduire.',
      image: '/images/reussite-examen.jpg',
    },
    {
      id: 'changement-etat-civil',
      title: 'Changement d\'état civil',
      description: 'Mise à jour de votre permis suite à un changement d\'état civil.',
      image: '/images/changement-etat-civil.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Permis de conduire
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Toutes vos démarches pour le permis de conduire simplifiées. 
              Notre équipe vous accompagne dans chaque étape de vos démarches administratives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-lg mx-auto px-4">
          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                  {/* Image */}
                  <div className="md:w-1/3 lg:w-2/5 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center min-h-[200px] md:min-h-[280px]">
                    <div className="w-20 h-20 bg-sky-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">P</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 lg:w-3/5 p-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {service.description}
                    </p>
                    <button className="btn-primary w-full md:w-auto md:self-start">
                      En savoir plus
                    </button>
                  </div>
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
              Informations importantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  Documents nécessaires
                </h3>
                <ul className="text-sky-700 space-y-2">
                  <li>• Pièce d'identité en cours de validité</li>
                  <li>• Justificatif de domicile récent</li>
                  <li>• Photo d'identité aux normes</li>
                  <li>• Ancien permis (si applicable)</li>
                </ul>
              </div>
              <div className="bg-sky-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-sky-800 mb-4">
                  Délais de traitement
                </h3>
                <ul className="text-sky-700 space-y-2">
                  <li>• Duplicata : 2 à 3 semaines</li>
                  <li>• Échange : 3 à 4 semaines</li>
                  <li>• Permis international : 2 semaines</li>
                  <li>• Renouvellement : 3 à 4 semaines</li>
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
            Besoin d'aide pour votre permis de conduire ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts vous accompagne dans toutes vos démarches liées au permis de conduire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Nous contacter
            </a>
            <a href="tel:0561949494" className="btn-secondary">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
