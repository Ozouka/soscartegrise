'use client';

import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function BadgeHoraires() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Mise à jour toutes les minutes

    return () => clearInterval(timer);
  }, []);

  const isCurrentlyOpen = () => {
    const now = currentTime;
    const dayOfWeek = now.getDay(); // 0 = Dimanche, 1 = Lundi, etc.
    
    // Fermé le weekend
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;
    
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    // Lundi à Vendredi
    const morningStart = 8 * 60 + 30; // 8h30
    const morningEnd = 12 * 60; // 12h00
    const afternoonStart = 14 * 60; // 14h00
    const afternoonEnd = 18 * 60; // 18h00
    
    return (currentTimeInMinutes >= morningStart && currentTimeInMinutes <= morningEnd) ||
           (currentTimeInMinutes >= afternoonStart && currentTimeInMinutes <= afternoonEnd);
  };

  const open = isCurrentlyOpen();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          open 
            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
            : 'bg-red-100 text-red-800 hover:bg-red-200'
        }`}
        aria-label="Voir les horaires"
      >
        {open ? (
          <CheckCircle className="w-4 h-4" />
        ) : (
          <XCircle className="w-4 h-4" />
        )}
        <span>{open ? 'Ouvert' : 'Fermé'}</span>
        <Clock className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-lg p-4 border border-gray-200 min-w-[280px] z-10">
          <h3 className="font-semibold text-gray-900 mb-3">Nos horaires</h3>
          <div className="space-y-2">
            {BUSINESS.hours.map((hour) => (
              <div key={hour.day} className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">{hour.day}</span>
                <span className="text-gray-600">
                  {hour.am} / {hour.pm}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Fermé le weekend et jours fériés
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
