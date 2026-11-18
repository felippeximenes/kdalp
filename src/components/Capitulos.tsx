import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { capitulos, type CapituloId } from '../data/capitulos';
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
        gsap.from(c.children, {
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
      <h2 className="sr-only" id="cap-titulo">
        {t.capitulos.titulo}
      </h2>
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

      {capitulos.map((c) => {
        const txt = t.capitulos.itens[c.id];
        const vars = { '--bg': c.bg, '--fg': c.fg } as CSSProperties;
        return (
          <article key={c.id} id={c.id} className={styles.cap} style={vars}>
            <div className={styles.texto}>
              <p className="rotulo">
                {c.numeral} · {c.tempo}
              </p>
              <h3>{txt.titulo}</h3>
              <p>{txt.texto}</p>
            </div>
            <ResponsiveImage
              nome={c.imagem}
              alt={txt.imagemAlt}
              sizes="(min-width: 900px) 55vw, 100vw"
              className={styles.imagem}
            />
          </article>
        );
      })}
    </section>
  );
}
