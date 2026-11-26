import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './Respiro.module.css';

/** frame do clipe em tela cheia, sem texto, derretendo no fundo em cima e embaixo */
export function Respiro({ nome, reduzido }: { nome: string; reduzido: boolean }) {
  const caixa = useRef<HTMLDivElement>(null);

  // parallax leve: a imagem (20% mais alta que a caixa) anda mais devagar que o scroll
  useGSAP(
    () => {
      if (reduzido) return;
      gsap.fromTo(
        'img',
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: caixa.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    },
    { scope: caixa, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <div ref={caixa} className={`vinheta ${styles.respiro}`} aria-hidden="true" data-revelar>
      <ResponsiveImage nome={nome} alt="" sizes="100vw" className={styles.img} />
    </div>
  );
}
