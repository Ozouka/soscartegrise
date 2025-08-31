import { BUSINESS } from '@/lib/constants';

export default function MapEmbed() {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1234567890123!2d${BUSINESS.geo.lng}!3d${BUSINESS.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzI1LjIiTiAwcDAnNDIuOCJF!5e0!3m2!1sfr!2sfr!4v1234567890123`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation SOS Carte Grise - Saint-Gaudens"
      />
    </div>
  );
}



