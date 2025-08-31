import { FileText, Send, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Rassemblez vos documents",
    description: "Nous vous indiquons exactement ce qu'il faut selon votre démarche"
  },
  {
    icon: Send,
    title: "Déposez votre dossier",
    description: "En agence ou par courrier, nous traitons tout rapidement"
  },
  {
    icon: CheckCircle,
    title: "Validation ANTS",
    description: "Nous gérons la transmission et le suivi avec l'administration"
  },
  {
    icon: Truck,
    title: "Livraison à domicile",
    description: "Votre nouvelle carte grise arrive sous 2-3 jours"
  }
];

export default function Steps() {
  return (
    <section className="section bg-white">
      <div className="container-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, nous vous accompagnons dans toutes vos démarches de carte grise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-sky-600" />
              </div>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-sky-200"></div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
