import { Metadata } from 'next';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import DocChecklist from '@/components/DocChecklist';

export const metadata: Metadata = {
  title: 'Démarches - SOS Carte Grise – Saint-Gaudens | Guide pas-à-pas',
  description: 'Guide complet des démarches de carte grise : documents requis, étapes, délais et livrables. Tout savoir pour préparer votre dossier.',
  keywords: 'démarches carte grise, documents requis, étapes, procédure, Saint-Gaudens',
};

export default function DemarchesPage() {
  const demarches = [
    {
      id: "changement-titulaire",
      title: "Changement de titulaire",
      description: "Transfert de propriété lors de l'achat d'un véhicule",
      steps: [
        "Rassemblez les documents requis",
        "Déposez votre dossier en agence",
        "Nous traitons avec l'ANTS",
        "Livraison de la nouvelle carte grise"
      ],
      documents: [
        "Certificat de cession (cerfa 15776)",
        "Justificatif d'identité du nouveau propriétaire",
        "Justificatif de domicile récent",
        "Carte grise actuelle du véhicule",
        "Contrôle technique si véhicule > 4 ans"
      ],
      delay: "24-48h",
      livrable: "Nouvelle carte grise au nom du nouveau propriétaire"
    },
    {
      id: "duplicata",
      title: "Duplicata de carte grise",
      description: "Remplacement en cas de perte, vol ou détérioration",
      steps: [
        "Déclaration de perte/vol si applicable",
        "Préparation du dossier",
        "Traitement administratif",
        "Livraison du duplicata"
      ],
      documents: [
        "Déclaration de perte/vol (cerfa 13750)",
        "Justificatif d'identité du propriétaire",
        "Justificatif de domicile",
        "Attestation d'assurance"
      ],
      delay: "24-48h",
      livrable: "Duplicata de la carte grise"
    },
    {
      id: "changement-adresse",
      title: "Changement d'adresse",
      description: "Mise à jour de l'adresse sur le certificat d'immatriculation",
      steps: [
        "Vérification des documents",
        "Mise à jour des informations",
        "Traitement par l'ANTS",
        "Livraison de la carte grise mise à jour"
      ],
      documents: [
        "Justificatif de domicile récent",
        "Carte grise actuelle",
        "Justificatif d'identité"
      ],
      delay: "24-48h",
      livrable: "Carte grise avec la nouvelle adresse"
    }
  ];

  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guide des démarches
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Tout savoir sur les étapes, documents requis et délais pour vos démarches de carte grise. 
              Nous vous accompagnons à chaque étape.
            </p>
          </div>
        </div>
      </section>

      {/* Démarches détaillées */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="space-y-12">
            {demarches.map((demarche) => (
              <div key={demarche.id} id={demarche.id} className="card-lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {demarche.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {demarche.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Étapes */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-sky-600" />
                      Étapes de la démarche
                    </h3>
                    <div className="space-y-3">
                      {demarche.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Informations pratiques */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-sky-600" />
                        Délai de traitement
                      </h3>
                      <p className="text-lg font-semibold text-sky-600">
                        {demarche.delay}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-sky-600" />
                        Livrable
                      </h3>
                      <p className="text-gray-700">
                        {demarche.livrable}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checklist des documents */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-sky-600" />
                    Documents requis
                  </h3>
                  <DocChecklist documents={demarche.documents} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils généraux */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Conseils pour un dossier parfait
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Avant de venir
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vérifiez la validité de vos justificatifs</li>
                  <li>• Préparez tous les documents originaux</li>
                  <li>• Vérifiez que votre véhicule est assuré</li>
                  <li>• Contrôle technique à jour si nécessaire</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pendant le traitement
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gardez une copie de votre dossier</li>
                  <li>• Notez le numéro de suivi</li>
                  <li>• Restez joignable par téléphone</li>
                  <li>• Évitez de voyager pendant le traitement</li>
                </ul>
              </div>
            </div>

            <div className="card mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Besoin d'aide ?
              </h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est là pour vous accompagner à chaque étape. 
                N'hésitez pas à nous contacter pour toute question.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33619923340"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Appeler maintenant
                </a>
                <a
                  href="/contact"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Nous écrire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
