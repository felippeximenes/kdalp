import { useRef, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { linkClipe, personagens, tempo } from '../data/personagens';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './AsQuatro.module.css';

const DESFOQUE = { filter: 'blur(18px)', scale: 1.06, ease: 'none' };

export function AsQuatro({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const trilho = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const s = secao.current;
      const tr = trilho.current;
      if (reduzido || !s || !tr) return;
      const retratos = gsap.utils.toArray<HTMLElement>(`.${styles.retrato}`);
      const mm = gsap.matchMedia();

      // desktop: trilho horizontal fixado, uma personagem por tela
      mm.add('(min-width: 900px)', () => {
        s.classList.add(styles.horizontal as string);
        const h = gsap.to(tr, {
          x: () => -(tr.scrollWidth - innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: s,
            start: 'top top',
            end: () => '+=' + (tr.scrollWidth - innerWidth),
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        // rack focus
        retratos.forEach((r) =>
          gsap.from(r, {
            ...DESFOQUE,
            scrollTrigger: {
              trigger: r,
              containerAnimation: h,
              start: 'left 90%',
              end: 'left 35%',
              scrub: true,
            },
          }),
        );
        return () => s.classList.remove(styles.horizontal as string);
      });

      // mobile: fichas empilhadas
      mm.add('(max-width: 899px)', () => {
        retratos.forEach((r) =>
          gsap.from(r, {
            ...DESFOQUE,
            scrollTrigger: { trigger: r, start: 'top 90%', end: 'top 40%', scrub: true },
          }),
        );
      });
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.quatro} id="as-quatro" aria-labelledby="quatro-titulo">
      <h2 className="sr-only" id="quatro-titulo">
        {t.quatro.titulo}
      </h2>
      <div ref={trilho} className={styles.trilho}>
        {personagens.map((p, i) => {
          const txt = t.quatro.personagens[p.id];
          const cores = {
            '--bg': p.cores.bg,
            '--a1': p.cores.a1,
            '--a2': p.cores.a2,
            '--fg': p.cores.fg,
          } as CSSProperties;
          return (
            <article key={p.id} className={styles.ficha} style={cores}>
              <div className={styles.retrato}>
                <ResponsiveImage
                  nome={`retrato-${p.id}`}
                  formato="retrato"
                  alt={txt.retratoAlt}
                  sizes="(min-width: 900px) 57vh, 45vh"
                />
              </div>
              <div className={styles.info}>
                <p className="rotulo">
                  {String(i + 1).padStart(2, '0')} · {txt.papel}
                </p>
                <h3>{p.nome}</h3>
                <ul className={styles.tracos}>
                  {txt.tracos.map((tr) => (
                    <li key={tr}>{tr}</li>
                  ))}
                </ul>
                <ul className={styles.momentos}>
                  {p.momentos.map((seg, j) => (
                    <li key={seg}>
                      <a href={linkClipe(seg)} target="_blank" rel="noopener noreferrer">
                        <span className="rotulo">{tempo(seg)}</span> {txt.momentos[j]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
