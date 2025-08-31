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
              Découvrez toutes nos démarches d'immatriculation et de modification de véhicule. 
              Nous sommes habilités SIV pour traiter votre dossier rapidement.
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

      {/* Informations complémentaires */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Informations importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Documents requis
                </h3>
                <p className="text-gray-600 mb-4">
                  Chaque démarche nécessite des documents spécifiques. Nous vous aidons à les identifier 
                  et à vérifier leur validité avant le dépôt de votre dossier.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Justificatifs d'identité à jour</li>
                  <li>• Justificatifs de domicile récents</li>
                  <li>• Documents du véhicule originaux</li>
                  <li>• Contrôle technique si nécessaire</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Délais de traitement
                </h3>
                <p className="text-gray-600 mb-4">
                  Nos délais sont indicatifs et peuvent varier selon la complexité du dossier 
                  et la charge de travail de l'ANTS.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Démarches simples :</strong> 24-48h</p>
                  <p><strong>Cas complexes :</strong> 48-72h</p>
                  <p><strong>Import/COC :</strong> 72h-1 semaine</p>
                </div>
              </div>
            </div>

            <div className="card mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Livraison et suivi
              </h3>
              <p className="text-gray-600">
                Votre nouvelle carte grise est livrée directement à votre domicile par La Poste. 
                Nous vous tenons informé de l'avancement de votre dossier à chaque étape.
              </p>
            </div>
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



