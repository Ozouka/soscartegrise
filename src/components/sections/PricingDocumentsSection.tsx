'use client';

import AnimatedSection from '@/components/AnimatedSection';
import MapFrance from '@/components/icons/MapFrance';
import ArrowDownTray from '@/components/icons/ArrowDownTray';

interface Document {
  href: string;
  label: string;
}

const DOCUMENTS: Document[] = [
  {
    href: "/assets/sos-carte-grise-31-carte-grise-cession.pdf",
    label: "Certificat de cession (CERFA 15776*01)"
  },
  {
    href: "/assets/sos-carte-grise-31-CERFA_DEMANDE_D_IMMATRICULATION.pdf",
    label: "Demande de certificat d'immatriculation (CERFA 13750*07)"
  },
  {
    href: "/assets/sos-carte-grise-31-mandat.pdf",
    label: "MANDAT (CERFA 13757*03)"
  }
];

export default function PricingDocumentsSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-lg mx-auto px-4">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-12 items-center">
          {/* Carte SVG de la France */}
          <AnimatedSection className='lg:w-1/2'>
            <MapFrance className='w-full h-auto' />
          </AnimatedSection>

          {/* Titre et description */}
          <div className='flex flex-col-reverse gap-8 lg:w-1/2'>
            <AnimatedSection className="text-center lg:text-left order-2 lg:order-1 flex flex-col gap-4" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-sos-blue uppercase">
                Prix du cheval fiscal
              </h2>
              <p className="text-xl text-gray-600">
                Le prix du cheval fiscal varie selon les régions. Découvrez le tarif applicable dans votre région pour calculer le coût de votre carte grise.
              </p>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col gap-6" delay={0.4}>
              <h3 className="text-3xl font-bold text-sos-blue uppercase">
                Documents à télécharger
              </h3>
              <ul className="flex flex-col gap-2">
                {DOCUMENTS.map((doc, index) => (
                  <li key={index} className='style-none'>
                    <a 
                      href={doc.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className='flex items-center gap-2 text-lg hover:text-sos-blue transition-colors'
                    >
                      <ArrowDownTray /> {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>

        {/* Section d'appel à l'action */}
        <AnimatedSection className="mt-12 text-center flex flex-col gap-6" delay={0.6}>
          <p className="text-lg text-gray-700">
            Besoin d'aide pour calculer le prix de votre carte grise ?
          </p>
          <div>
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Contactez-nous
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

