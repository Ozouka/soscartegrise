'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const subtitle = "Votre carte grise en toute simplicité... et en quelques minutes !";
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Animation du titre
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animation du sous-titre avec un délai
    gsap.from(subtitleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    // Animation du CTA avec un délai plus long
    gsap.from(ctaRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen-no-nav overflow-hidden">
      {/* Image de fond */}
      <Image 
        src="/devanture_agence.webp" 
        alt="SOS Carte Grise devanture agence" 
        fill
        className="object-cover -z-10"
        priority
      />
      
      {/* Overlay avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 -z-10" />
      
      {/* Contenu au premier plan */}
      <div className="relative z-10 h-full flex flex-col justify-between px-4">
        <div className="flex-1 flex flex-col justify-center lg:pt-52">
          <div className="max-w-4xl mr-auto md:pl-12 xl:pl-56 flex flex-col gap-4">
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold drop-shadow-lg text-white">
              <span className='text-sos-blue'>SOS</span> <span className='text-carte-red'>Carte</span> <span className='text-sos-blue'>Grise</span>
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              {subtitle}
            </p>
            
              <a ref={ctaRef} href='/contact' className="mt-8 bg-sos-blue w-fit hover:bg-carte-red text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Contactez-nous
              </a>
          </div>
        </div>
        
        {/* Chevron qui sautille en bas */}
        <div className="flex justify-center pb-4 lg:pb-12">
          <a href="#services-section" className='p-2'>
            <ChevronDown 
              className="w-8 h-8 text-white/80 animate-bounce-gentle cursor-pointer hover:text-white transition-colors" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}