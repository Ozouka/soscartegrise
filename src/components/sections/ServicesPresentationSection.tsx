'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { HOME_COPY } from '@/lib/constants';

export default function ServicesPresentationSection() {
  return (
    <section id="services-section" className='flex flex-col gap-4 lg:flex-row lg:items-center lg:w-full lg:py-20 lg:container-lg mx-auto'>
      <AnimatedSection className='flex flex-col gap-10 px-8 pt-20 pb-10 lg:w-1/2'>
        <h2 className='text-3xl text-center lg:text-5xl font-bold text-gray-900 text-sos-blue lg:items-start lg:flex lg:flex-col'>
          {HOME_COPY.servicesTitle} <br /> <span className='text-3xl'>{HOME_COPY.servicesTagline}</span>
        </h2>
        <p className='text-gray-600 text-start'>
          {HOME_COPY.servicesIntro}
          <br /> <br /> {HOME_COPY.servicesIntro2}
        </p>
      </AnimatedSection>
      
      <AnimatedSection className='lg:w-1/2 flex justify-center items-center lg:pt-20 lg:pb-10 lg:px-8' delay={0.2}>
        <Image 
          src="/image_certificat_immat.webp" 
          alt="Certificat d'immatriculation" 
          width={500} 
          height={500} 
          className='w-full h-full object-cover lg:rounded-lg' 
        />
      </AnimatedSection>
    </section>
  );
}

