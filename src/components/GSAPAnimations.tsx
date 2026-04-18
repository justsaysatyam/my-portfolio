'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations({ children }: { children: React.ReactNode }) {
  const container = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('section');
    
    sections.forEach((section) => {
      const el = section as HTMLElement;
      // Warp-in animation from the void
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.8,
          z: -500,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          z: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Glitch effect on entry
      gsap.fromTo(
        el.querySelectorAll('h2, h3'),
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          },
        }
      );
    });
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
