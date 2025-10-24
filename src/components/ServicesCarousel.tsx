'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ServiceCard from './ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  documents: string[];
  delay: string;
  price: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      {/* Carousel pour mobile et md */}
      <div className="lg:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="flex-[0_0_100%] md:flex-[0_0_70%] min-w-0 px-4"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="w-10 h-10 rounded-full bg-sos-blue text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:bg-sos-blue"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-sos-blue'
                    : 'bg-gray-300 hover:bg-sos-blue'
                }`}
                aria-label={`Aller à la slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="w-10 h-10 rounded-full bg-sos-blue text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:bg-sos-blue"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid pour lg: 3 colonnes */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

