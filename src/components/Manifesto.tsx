import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './Manifesto.module.css';

const normalizar = (w: string) => w.toLowerCase().replace(/[^\p{L}]/gu, '');

export function Manifesto({ reduzido }: { reduzido: boolean }) {
  const { t, idioma } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const texto = useRef<HTMLParagraphElement>(null);
  const chaves = t.manifesto.palavrasChave;

  // palavras acendem com o scroll
  useGSAP(
    () => {
      const p = texto.current;
      if (reduzido || !p) return;
      const palavras = [...p.querySelectorAll<HTMLElement>(`.${styles.w}`)];
      ScrollTrigger.create({
        trigger: p,
        start: 'top 75%',
        end: 'bottom 40%',
        scrub: true,
        onUpdate: (s) => {
          const n = Math.round(s.progress * palavras.length);
          palavras.forEach((w, i) => w.classList.toggle(styles.aceso as string, i < n));
        },
      });
    },
    { scope: secao, dependencies: [reduzido, idioma], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.manifesto} id="manifesto">
      <ResponsiveImage nome="manifesto-fundo" alt="" sizes="100vw" className={styles.fundo} />
      <p className={`rotulo ${styles.rotulo}`}>{t.manifesto.rotulo}</p>
      <p ref={texto} className={styles.texto}>
        {t.manifesto.texto.split(/\s+/).map((w, i) => (
          <span key={`${idioma}-${i}`}>
            <span className={`${styles.w} ${chaves.includes(normalizar(w)) ? styles.kw : ''}`}>
              {w}
            </span>{' '}
          </span>
        ))}
      </p>
    </section>
  );
}
