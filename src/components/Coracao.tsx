import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Coracao.module.css';

export const CORACAO_PATH =
  'M50 88C20 65 4 46 4 28 4 14 15 4 28 4c10 0 18 6 22 14 4-8 12-14 22-14 13 0 24 10 24 24 0 18-16 37-46 60z';

export function Coracao({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const fogo = useRef<SVGPathElement>(null);
  const rosa = useRef<SVGPathElement>(null);

  // coração de fogo vira coração rosa e flutua
  useGSAP(
    () => {
      if (reduzido) return; // estado final do CSS: coração rosa parado
      gsap.set(fogo.current, { opacity: 1 });
      gsap.set(rosa.current, { opacity: 0, scale: 0.8, transformOrigin: '50% 60%' });
      gsap
        .timeline({ scrollTrigger: { trigger: secao.current, start: 'top 55%' } })
        .from(fogo.current, {
          scale: 0.4,
          transformOrigin: '50% 80%',
          duration: 0.8,
          ease: 'back.out(2)',
        })
        .to(fogo.current, { opacity: 0, scale: 1.15, duration: 0.6 }, '+=0.5')
        .to(rosa.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }, '<')
        .to(svg.current, { y: -12, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.coracao} id="coracao">
      <p className="rotulo">{t.coracao.rotulo}</p>
      <svg ref={svg} className={styles.svg} viewBox="0 0 100 92" aria-hidden="true">
        <defs>
          <linearGradient id="coracao-fogo" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#FFC94A" />
            <stop offset=".5" stopColor="#FF7A1A" />
            <stop offset="1" stopColor="#D7262E" />
          </linearGradient>
        </defs>
        <path ref={fogo} className={styles.fogo} d={CORACAO_PATH} />
        <path ref={rosa} className={styles.rosa} d={CORACAO_PATH} />
      </svg>
      <p className={styles.frase}>{t.coracao.frase}</p>
    </section>
  );
}
