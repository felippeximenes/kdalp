import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { capitulos, type CapituloId } from '../data/capitulos';
import { linkClipe, tempo } from '../data/personagens';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './Capitulos.module.css';

const MEIO_DA_TELA = { rootMargin: '-50% 0px -50% 0px' };

export function Capitulos({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const [ativo, setAtivo] = useState<CapituloId | null>(null);
  const [navVisivel, setNavVisivel] = useState(false);

  // barra lateral: só aparece dentro da seção e marca o capítulo no meio da tela
  useEffect(() => {
    const s = secao.current;
    if (!s) return;
    const obsSecao = new IntersectionObserver(
      ([e]) => setNavVisivel(e?.isIntersecting ?? false),
      MEIO_DA_TELA,
    );
    const obsCap = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setAtivo(e.target.id as CapituloId));
    }, MEIO_DA_TELA);
    obsSecao.observe(s);
    s.querySelectorAll('article').forEach((a) => obsCap.observe(a));
    return () => {
      obsSecao.disconnect();
      obsCap.disconnect();
    };
  }, []);

  // entrada simples (as transições do clipe entram depois)
  useGSAP(
    () => {
      if (reduzido) return;
      gsap.utils.toArray<HTMLElement>('article').forEach((c) => {
        gsap.from(c.querySelector(`.${styles.texto}`)?.children ?? [], {
          autoAlpha: 0,
          y: 60,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: c, start: 'top 65%' },
        });
      });
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.capitulos} id="capitulos" aria-labelledby="cap-titulo">
      <nav
        className={`${styles.nav} ${navVisivel ? styles.visivel : ''}`}
        aria-label={t.capitulos.navRotulo}
      >
        <ol>
          {capitulos.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={ativo === c.id ? styles.ativo : undefined}
                aria-current={ativo === c.id ? 'step' : undefined}
              >
                {c.numeral}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <header className="cabecalho">
        <p className="rotulo">{t.capitulos.rotulo}</p>
        <h2 id="cap-titulo">{t.capitulos.titulo}</h2>
      </header>

      <div className={styles.pilha}>
        {capitulos.map((c) => {
          const txt = t.capitulos.itens[c.id];
          const vars = { '--bg': c.bg, '--fg': c.fg } as CSSProperties;
          return (
            <article key={c.id} id={c.id} className={styles.card} style={vars}>
              <ResponsiveImage
                nome={c.imagem}
                alt={txt.imagemAlt}
                sizes="(min-width: 1100px) 1100px, 100vw"
                className={styles.imagem}
              />
              <div className={styles.texto}>
                <p className="rotulo">
                  {t.capitulos.capitulo} {c.numeral} · {tempo(c.segundos)}
                </p>
                <h3>{txt.titulo}</h3>
                <p>{txt.texto}</p>
                <a
                  className="pilula"
                  href={linkClipe(c.segundos)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.verNoClipe}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
