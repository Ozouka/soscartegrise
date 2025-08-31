'use client';

import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';
import { useState } from 'react';

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // Premier item ouvert par défaut

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenItems(newOpen);
  };

  return (
    <main>
      {/* Hero section */}
      <section className="section-lg bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Trouvez rapidement les réponses à vos questions sur la carte grise, 
              les démarches et nos services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-sky-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  FAQ Carte Grise
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {FAQ_ITEMS.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors px-4"
                      aria-expanded={openItems.has(index)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      {openItems.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-sky-600 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openItems.has(index) && (
                      <div className="px-4 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact pour plus d'infos */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vous ne trouvez pas votre réponse ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter 
              pour toute question spécifique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </main>
  );
}
