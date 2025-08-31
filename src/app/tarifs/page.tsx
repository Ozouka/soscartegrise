import { Metadata } from 'next';
import { Euro, Info, Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tarifs - SOS Carte Grise – Saint-Gaudens | Prix de nos services',
  description: 'Découvrez nos tarifs pour tous nos services de carte grise. Prix transparents et sans surprise. Frais de service et taxes expliqués clairement.',
  keywords: 'tarifs carte grise, prix, frais, taxes, Saint-Gaudens, Comminges',
};

export default function TarifsPage() {
  const tarifs = [
    {
      service: "Changement de titulaire",
      prix: "89€",
      description: "Transfert de propriété lors de l'achat"
    },
    {
      service: "Duplicata de carte grise",
      prix: "79€",
      description: "Remplacement en cas de perte/vol"
    },
    {
      service: "Changement d'adresse",
      prix: "69€",
      description: "Mise à jour de l'adresse"
    },
    {
      service: "Cession de véhicule",
      prix: "89€",
      description: "Vente avec transfert de propriété"
    },
    {
      service: "WW provisoire",
      prix: "99€",
      description: "Immatriculation provisoire"
    },
    {
      service: "Import/COC",
      prix: "129€",
      description: "Immatriculation de véhicule importé"
    },
    {
      service: "Modifications techniques",
      prix: "À partir de 99€",
      description: "Changements de caractéristiques"
    },
    {
      service: "Véhicule professionnel",
      prix: "À partir de 119€",
      description: "Immatriculation professionnelle"
    }
  ];

  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos tarifs transparents
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Prix clairs et sans surprise pour tous nos services de carte grise. 
              Frais de service et taxes expliqués en détail.
            </p>
          </div>
        </div>
      </section>

      {/* Tableau des tarifs */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Tarifs de nos services
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Service</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Prix</th>
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tarifs.map((tarif, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-900">
                          {tarif.service}
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-xl font-bold text-sky-600">
                            {tarif.prix}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          {tarif.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Important : Prix indicatifs
                    </h3>
                    <p className="text-amber-700 text-sm">
                      Ces tarifs incluent nos frais de service. Les taxes ANTS (cheval fiscal) 
                      et frais de contrôle technique s'ajoutent selon votre véhicule et situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explication des coûts */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comprendre les coûts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Euro className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Frais de service
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nos frais couvrent la gestion complète de votre dossier, 
                  la vérification des documents et le suivi administratif.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vérification des documents</li>
                  <li>• Gestion administrative</li>
                  <li>• Suivi avec l'ANTS</li>
                  <li>• Support client</li>
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Taxes ANTS
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Les taxes varient selon le cheval fiscal de votre véhicule 
                  et sont fixées par l'administration.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cheval fiscal Haute-Garonne : 31€</li>
                  <li>• Calcul selon âge du véhicule</li>
                  <li>• Taxes d'État obligatoires</li>
                  <li>• Pas de marge de notre part</li>
                </ul>
              </div>
            </div>

            <div className="card mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Estimation personnalisée
              </h3>
              <p className="text-gray-600 mb-4">
                Pour connaître le coût exact de votre démarche, contactez-nous avec les 
                informations de votre véhicule (marque, modèle, année, carburant).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33619923340"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Demander un devis
                </a>
                <a
                  href="/contact"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
