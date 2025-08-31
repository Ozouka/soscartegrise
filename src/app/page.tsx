import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import ServiceCard from '@/components/ServiceCard';
import ContactCard from '@/components/ContactCard';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SOS Carte Grise – Saint-Gaudens | Carte grise simple et rapide',
  description: 'Carte grise en Comminges, simple & rapide. Sans prise de tête : nous gérons votre dossier de A à Z à Saint-Gaudens. Habilité SIV, traitement rapide.',
  keywords: 'carte grise, Saint-Gaudens, Comminges, immatriculation, changement titulaire, duplicata',
  openGraph: {
    title: 'SOS Carte Grise – Saint-Gaudens',
    description: 'Carte grise en Comminges, simple & rapide. Habilité SIV, traitement rapide.',
    url: 'https://soscartegrise-saintgaudens.fr',
    siteName: 'SOS Carte Grise – Saint-Gaudens',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <main>
      <Hero />
      <Steps />
      
      {/* Services mis en avant */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos démarches les plus demandées pour votre véhicule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="btn-primary text-lg px-8 py-4">
              Voir tous nos services
            </a>
          </div>
        </div>
      </section>

      {/* Preuves sociales */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous faire confiance ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des milliers de clients satisfaits nous font confiance depuis des années
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dossiers traités
              </h3>
              <p className="text-gray-600">
                Plus de 500 dossiers traités avec succès chaque année
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">24h</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Délai moyen
              </h3>
              <p className="text-gray-600">
                Traitement rapide en 24-48h pour la plupart des démarches
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">98%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Satisfaction client
              </h3>
              <p className="text-gray-600">
                Nos clients nous recommandent pour notre efficacité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et localisation */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Venez nous voir à Saint-Gaudens
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre agence est située en face de La Poste, au cœur de Saint-Gaudens. 
                Stationnement facile et accès simple pour tous vos dossiers de carte grise.
              </p>
              <ContactCard />
            </div>
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1234567890123!2d0.723!3d43.107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzI1LjIiTiAwcDAnNDIuOCJF!5e0!3m2!1sfr!2sfr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SOS Carte Grise - Saint-Gaudens"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
