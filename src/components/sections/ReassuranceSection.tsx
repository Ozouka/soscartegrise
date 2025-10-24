'use client';

import { ReactNode } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import ReassuranceCard from '@/components/ReassuranceCard';

export interface ReassuranceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ReassuranceSectionProps {
  items: ReassuranceItem[];
}

export default function ReassuranceSection({ items }: ReassuranceSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-lg mx-auto px-4 flex flex-col gap-12 lg:gap-24">
        <AnimatedSection className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-sos-blue">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des milliers de clients satisfaits nous font confiance depuis des années
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <ReassuranceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

