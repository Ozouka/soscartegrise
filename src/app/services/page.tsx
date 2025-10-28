import { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services - SOS Carte Grise – Saint-Gaudens | Toutes nos démarches',
  description: 'Découvrez tous nos services de carte grise : changement de titulaire, duplicata, changement d\'adresse, cession, WW provisoire, import/COC et plus encore.',
  keywords: 'services carte grise, changement titulaire, duplicata, changement adresse, cession, Saint-Gaudens',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos services de carte grise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Découvrez toutes nos démarches liées à l'immatriculation de votre véhicule. Notre agence est habilitée par le Ministère de l'Intérieur et agréée par le Trésor Public.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sky-50">
        <div className="container-lg mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à commencer votre démarche ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner dans toutes vos démarches de carte grise. 
            Contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              Nous contacter
            </a>
            <a
              href="tel:+33619923340"
              className="btn-secondary text-lg px-8 py-4"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}



