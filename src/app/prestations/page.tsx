import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prestations - SOS Carte Grise Saint-Gaudens',
  description: 'Découvrez toutes nos prestations pour vos démarches de carte grise : changement de titulaire, changement d\'adresse, déclaration de cession et plus encore.',
};

export default function PrestationsPage() {
  const prestations = [
    {
      id: 'changement-titulaire',
      title: 'Changement de titulaire',
      description: 'Effectuez facilement le changement de titulaire de votre véhicule.',
      image: '/images/changement-titulaire.jpg',
    },
    {
      id: 'changement-adresse',
      title: 'Changement d\'adresse',
      description: 'Mettez à jour l\'adresse sur votre carte grise rapidement.',
      image: '/images/changement-adresse.jpg',
    },
    {
      id: 'declaration-cession',
      title: 'Déclaration de cession',
      description: 'Déclarez la vente ou la cession de votre véhicule.',
      image: '/images/declaration-cession.jpg',
    },
    {
      id: 'demande-duplicata',
      title: 'Demande de duplicata',
      description: 'Obtenez un duplicata de votre carte grise en cas de perte ou de vol.',
      image: '/images/demande-duplicata.jpg',
    },
    {
      id: 'cas-particulier',
      title: 'Cas particulier',
      description: 'Nous gérons tous les cas particuliers pour vos démarches.',
      image: '/images/cas-particulier.jpg',
    },
    {
      id: 'achat-professionnel',
      title: 'Déclaration d\'achat professionnel',
      description: 'Démarches spécifiques pour les achats professionnels.',
      image: '/images/achat-professionnel.jpg',
    },
    {
      id: 'carte-grise-etrangere',
      title: 'Carte grise étrangère',
      description: 'Immatriculation de véhicules provenant de l\'étranger.',
      image: '/images/carte-grise-etrangere.jpg',
    },
    {
      id: 'certificat-provisoire-ww',
      title: 'Certificat provisoire WW',
      description: 'Obtenez votre certificat provisoire d\'immatriculation.',
      image: '/images/certificat-provisoire.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-16">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Prestations
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Découvrez toutes nos prestations pour vos démarches de carte grise. 
              Notre équipe d'experts vous accompagne dans toutes vos démarches administratives.
            </p>
          </div>
        </div>
      </section>

      {/* Prestations Grid */}
      <section className="py-16">
        <div className="container-lg mx-auto px-4">
          <div className="flex flex-col gap-8">
            {prestations.map((prestation, index) => (
              <div
                key={prestation.id}
                id={prestation.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                  {/* Image */}
                  <div className="md:w-1/3 lg:w-2/5 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center min-h-[200px] md:min-h-[280px]">
                    <div className="w-20 h-20 bg-sky-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">CG</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 lg:w-3/5 p-6 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {prestation.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {prestation.description}
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

      {/* CTA Section */}
      <section className="bg-sky-50 py-16">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d'aide pour vos démarches ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous accompagner dans toutes vos démarches administratives.
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
