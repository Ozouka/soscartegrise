'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function ServicesPresentationSection() {
  return (
    <section id="services-section" className='flex flex-col gap-4 lg:flex-row lg:items-center lg:w-full lg:py-20 lg:container-lg mx-auto'>
      <AnimatedSection className='flex flex-col gap-10 px-8 pt-20 pb-10 lg:w-1/2'>
        <h2 className='text-3xl text-center lg:text-5xl font-bold text-gray-900 text-sos-blue lg:items-start lg:flex lg:flex-col'>
          SERVICE CARTE GRISE <br /> <span className='text-3xl'>Simple, rapide, sécurisé</span>
        </h2>
        <p className='text-gray-600 text-start'>
          Nous prenons en charge toutes les démarches de carte grise : immatriculation de véhicule neuf, d'occasion ou de collection, changement de titulaire, modification d'adresse, demande de duplicata ou encore déclaration de cession.
          <br /> <br /> Habilité et agréé par l'État, nous traitons votre dossier immédiatement, sur place pour que vous receviez votre certificat d'immatriculation dans les meilleurs délais.
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

