'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container-lg mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-6 h-6 text-sky-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="mb-2">
              Nous utilisons des cookies techniques nécessaires au fonctionnement du site. 
              En continuant à naviguer, vous acceptez leur utilisation.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="/politique-confidentialite" className="text-sky-400 hover:text-sky-300 underline">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
          >
            Accepter
          </button>
        </div>
        
        <button
          onClick={acceptCookies}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
