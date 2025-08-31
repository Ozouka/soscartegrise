import { ArrowRight, Clock, Euro } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  documents: string[];
  delay: string;
  price: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Délai : {service.delay}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Euro className="w-4 h-4 text-sky-600" />
              <span>{service.price}</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-2">Documents requis :</h4>
            <ul className="space-y-1">
              {service.documents.slice(0, 3).map((doc, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full"></span>
                  {doc}
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
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}



