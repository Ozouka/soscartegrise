'use client';

import AnimatedSection from '@/components/AnimatedSection';
import ContactCard from '@/components/ContactCard';
import MapEmbed from '@/components/MapEmbed';

export default function ContactLocationSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-lg mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-sos-blue">
              Venez nous voir à Saint-Gaudens
            </h2>
            <p className="text-xl text-gray-600">
              Notre agence est située en face de La Poste, au cœur de Saint-Gaudens. 
              Stationnement facile et accès simple pour tous vos dossiers de carte grise.
            </p>
            <ContactCard />
          </AnimatedSection>

          <AnimatedSection className="h-96 bg-gray-200 rounded-2xl overflow-hidden" delay={0.3}>
            <MapEmbed />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

