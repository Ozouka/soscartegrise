import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-lg mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SOS Carte Grise</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5" />
                <div>
                  <p>{BUSINESS.street}</p>
                  <p>{BUSINESS.postalCode} {BUSINESS.city}</p>
                  <p className="text-sm text-gray-400">{BUSINESS.note}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <a href={`tel:${BUSINESS.phoneMain}`} className="hover:text-sky-400 transition-colors">
                  {BUSINESS.phoneMain}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-sky-400 transition-colors">
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2">
              {BUSINESS.hours.map((hour) => (
                <div key={hour.day} className="flex justify-between">
                  <span className="text-gray-300">{hour.day}</span>
                  <span className="text-gray-400">
                    {hour.am} / {hour.pm}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Fermé le weekend et jours fériés
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Changement de titulaire
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Duplicata
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Changement d'adresse
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-sky-400 transition-colors">
                Cession
              </Link>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <div className="pt-4">
                <a
                  href={`tel:${BUSINESS.phoneMain}`}
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SOS Carte Grise – Saint-Gaudens. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-sky-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-sky-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgu" className="text-gray-400 hover:text-sky-400 transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
