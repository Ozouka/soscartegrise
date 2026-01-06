'use client';

import { ArrowRight, Clock, Euro } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  documents: string[];
  price: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Sur mobile uniquement, toggle l'état
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className="relative h-[400px] w-full rounded-2xl overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image de fond avec titre */}
      <div className="absolute inset-0">
        <Image 
          src="/image_certificat_immat.webp" 
          alt="Certificat d'immatriculation" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-700/10 to-[#3F48CC]/15 backdrop-blur-md" />
      </div>

      {/* Titre */}
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
          {service.title}
        </h3>
      </div>

      {/* Contenu qui apparaît/disparaît */}
      <div 
        className={`absolute inset-0 bg-white z-20 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:pointer-events-auto'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex-1 overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {service.description}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Euro className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>{service.price}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2 text-sm">Documents requis :</h4>
              <ul className="space-y-1">
                {service.documents.slice(0, 3).map((doc, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{doc}</span>
                  </li>
                ))}
                {service.documents.length > 3 && (
                  <li className="text-sm text-sky-600">
                    +{service.documents.length - 3} autres documents
                  </li>
                )}
              </ul>
            </div>
          </div>

          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}



