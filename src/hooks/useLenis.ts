import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Scroll suave ligado ao ScrollTrigger. Desligado quando `ativo` é falso (movimento reduzido). */
export function useLenis(ativo: boolean) {
  useEffect(() => {
    if (!ativo) return;
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, [ativo]);
}
