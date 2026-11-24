import { useRef, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { linkClipe, personagens, tempo } from '../data/personagens';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './AsQuatro.module.css';

export function AsQuatro({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);

  // rack focus: o retrato entra desfocado e ganha nitidez
  useGSAP(
    () => {
      if (reduzido) return;
      gsap.utils.toArray<HTMLElement>(`.${styles.retrato}`).forEach((r) =>
        gsap.from(r, {
          filter: 'blur(18px)',
          scale: 1.06,
          ease: 'none',
          scrollTrigger: { trigger: r, start: 'top 90%', end: 'top 35%', scrub: true },
        }),
      );
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.quatro} id="as-quatro" aria-labelledby="quatro-titulo">
      <header className="cabecalho">
        <p className="rotulo">{t.quatro.rotulo}</p>
        <h2 id="quatro-titulo">{t.quatro.titulo}</h2>
      </header>

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
                sizes="(min-width: 900px) 40vw, 90vw"
              />
            </div>
            <div className={styles.info}>
              <p className="rotulo">
                {String(i + 1).padStart(2, '0')} · {txt.papel}
              </p>
              <h3>{p.nome}</h3>
              <p className={styles.gancho}>{txt.gancho}</p>
              <p>{txt.bio}</p>
              {txt.falas.map((f) => (
                <blockquote key={f} className={`impacto ${styles.fala}`}>
                  <p>{f}</p>
                </blockquote>
              ))}
              <p className={styles.fechamento}>{txt.fechamento}</p>
              <a
                className="pilula"
                href={linkClipe(p.momento)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.verNoClipe} · {tempo(p.momento)}
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
}
