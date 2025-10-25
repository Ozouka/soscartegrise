'use client';

import { Phone, Mail, MapPin, Clock, Copy, Check } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useState } from 'react';

export default function ContactCard() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone principal',
      value: BUSINESS.phoneMain,
      action: 'tel',
      field: 'phone'
    },
    {
      icon: Phone,
      label: 'Téléphone bureau',
      value: BUSINESS.phoneDesk,
      action: 'tel',
      field: 'desk'
    },
    {
      icon: Mail,
      label: 'Email',
      value: BUSINESS.email,
      action: 'mailto',
      field: 'email'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
      action: 'copy',
      field: 'address'
    }
  ];

  return (
    <div className="card-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Nos coordonnées
      </h3>

      <div className="space-y-4">
        {contactInfo.map((info) => (
          <div key={info.field} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <info.icon className="w-5 h-5 text-sky-600" />
              <div>
                <p className="text-sm text-gray-600">{info.label}</p>
                <p className="font-medium text-gray-900">{info.value}</p>
              </div>
            </div>
            
            {info.action === 'copy' ? (
              <button
                onClick={() => copyToClipboard(info.value, info.field)}
                className="p-2 text-gray-500 hover:text-sky-600 transition-colors"
                aria-label="Copier l'adresse"
              >
                {copiedField === info.field ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            ) : (
              <a
                href={`${info.action}:${info.value}`}
                className={`btn-primary text-sm px-4 py-2${info.action === 'mailto' ? ' hidden md:block' : ''}`}
              >
                {info.action === 'tel' ? 'Appeler' : 'Envoyer'}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-sky-50 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-5 h-5 text-sky-600" />
          <h4 className="font-medium text-gray-900">Horaires d'ouverture</h4>
        </div>
        <div className="space-y-1 text-sm">
          {BUSINESS.hours.map((hour) => (
            <div key={hour.day} className="flex justify-between  gap-2 lg:gap-4">
              <span className="text-gray-700">{hour.day}</span>
              <span className="text-gray-600">
                {hour.am} / {hour.pm}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Fermé le weekend et jours fériés
        </p>
      </div>
    </div>
  );
}



