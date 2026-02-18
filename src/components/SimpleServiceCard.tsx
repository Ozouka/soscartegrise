'use client';

import { Service } from '@/lib/constants';

interface SimpleServiceCardProps {
  service: Service;
}

export default function SimpleServiceCard({ service }: SimpleServiceCardProps) {
  return (
    <div 
      id={service.id}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-lg font-semibold text-sky-600 mb-4">
          <span>{service.price}</span>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Documents requis :</h4>
          <ul className="space-y-2">
            {service.documents.map((doc, index) => {
              const isSectionTitle = doc.toUpperCase() === doc && doc.length > 0 && (doc.endsWith(':') || doc.includes('POUR LES'));
              return (
                <li key={index} className={`text-sm flex items-start gap-2 ${isSectionTitle ? 'font-semibold text-gray-900 mt-3 mb-1 first:mt-0' : 'text-gray-600'}`}>
                  {!isSectionTitle && (
                    <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-1.5 flex-shrink-0"></span>
                  )}
                  <span>{doc}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
