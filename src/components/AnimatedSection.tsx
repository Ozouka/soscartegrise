'use client';

import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '',
  stagger = 0.15,
  delay = 0,
  duration = 1.2
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.children;

    gsap.from(elements, {
      y: 60,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

