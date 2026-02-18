import { Metadata } from 'next';
import Link from 'next/link';
import { Euro, Info, Calculator } from 'lucide-react';
import { TARIFS, TARIFS_PAGE_COPY, BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tarifs - SOS Carte Grise – Saint-Gaudens | Prix de nos services',
  description: 'Découvrez nos tarifs pour tous nos services de carte grise. Prix transparents et sans surprise. Frais de service et taxes expliqués clairement.',
  keywords: 'tarifs carte grise, prix, frais, taxes, Saint-Gaudens, Comminges',
};

export default function TarifsPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {TARIFS_PAGE_COPY.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {TARIFS_PAGE_COPY.subtitle}
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
                {TARIFS_PAGE_COPY.tableTitle}
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
                    {TARIFS.map((tarif, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-900">{tarif.service}</td>
                        <td className="py-4 px-4">
                          <span className="text-xl font-bold text-sky-600">{tarif.prix}</span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{tarif.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">{TARIFS_PAGE_COPY.infoTitle}</h3>
                    <p className="text-amber-700 text-sm">{TARIFS_PAGE_COPY.infoText}</p>
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
                  <h3 className="text-xl font-semibold text-gray-900">{TARIFS_PAGE_COPY.fraisTitle}</h3>
                </div>
                <p className="text-gray-600 mb-4">{TARIFS_PAGE_COPY.fraisText}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vérification des documents</li>
                  <li>• Gestion administrative</li>
                  <li>• Suivi avec l&apos;ANTS</li>
                  <li>• Support client</li>
                </ul>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{TARIFS_PAGE_COPY.taxesTitle}</h3>
                </div>
                <p className="text-gray-600 mb-4">{TARIFS_PAGE_COPY.taxesText}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {TARIFS_PAGE_COPY.chevalFiscal}</li>
                  <li>• Calcul selon âge du véhicule</li>
                  <li>• Taxes d&apos;État obligatoires</li>
                  <li>• Pas de marge de notre part</li>
                </ul>
              </div>
            </div>
            <div className="card mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{TARIFS_PAGE_COPY.estimationTitle}</h3>
              <p className="text-gray-600 mb-4">{TARIFS_PAGE_COPY.estimationText}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS.phoneMain.replace(/\s/g, '')}`}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Demander un devis
                </a>
                <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
