import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact - SOS Carte Grise – Saint-Gaudens | Nous contacter',
  description: 'Contactez SOS Carte Grise à Saint-Gaudens. Adresse, téléphone, horaires et formulaire de contact. Nous sommes face à La Poste.',
  keywords: 'contact, adresse, téléphone, Saint-Gaudens, SOS Carte Grise',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Notre équipe est à votre disposition pour tous vos dossiers de carte grise. 
              Venez nous voir ou contactez-nous par téléphone.
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600">
                      {BUSINESS.street}<br />
                      {BUSINESS.postalCode} {BUSINESS.city}<br />
                      <span className="text-sm text-gray-500">{BUSINESS.note}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Téléphone
                    </h3>
                    <div className="space-y-2">
                      <a
                        href={`tel:${BUSINESS.phoneMain}`}
                        className="block text-lg font-medium text-sky-600 hover:text-sky-700 transition-colors"
                      >
                        {BUSINESS.phoneMain}
                      </a>
                      <a
                        href={`tel:${BUSINESS.phoneDesk}`}
                        className="block text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        {BUSINESS.phoneDesk} (bureau)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Horaires d'ouverture
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      {BUSINESS.hours.map((hour) => (
                        <div key={hour.day} className="flex justify-between">
                          <span>{hour.day}</span>
                          <span>{hour.am} / {hour.pm}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Fermé le weekend et jours fériés
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA téléphone */}
              <div className="mt-8 p-6 bg-sky-50 rounded-2xl border border-sky-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Besoin d'aide immédiate ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Appelez-nous directement pour un conseil personnalisé.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneMain}`}
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <Phone className="w-4 h-4" />
                  Appeler {BUSINESS.phoneMain}
                </a>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nous écrire
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Carte et localisation */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Notre localisation
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Notre agence est située en face de La Poste, au cœur de Saint-Gaudens. 
              Stationnement facile et accès simple.
            </p>
            <MapEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
