'use client';

import AnimatedSection from '@/components/AnimatedSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import { Service } from '@/lib/constants';

interface ServicesShowcaseSectionProps {
  services: Service[];
}

export default function ServicesShowcaseSection({ services }: ServicesShowcaseSectionProps) {
  return (
    <section className="section bg-gray-50">
      <div className="container-lg mx-auto px-4">
        <AnimatedSection className="flex flex-col gap-12">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 text-sos-blue">
            Nos services
          </h2>

          <ServicesCarousel services={services} />

          <div className="text-center mt-12">
            <a href="/services" className="btn-primary text-lg px-8 py-4">
              Voir tous nos services
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

