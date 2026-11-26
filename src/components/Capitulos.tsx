import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { gsap } from 'gsap';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import { capitulos, type CapituloId } from '../data/capitulos';
import { linkClipe, tempo } from '../data/personagens';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './Capitulos.module.css';

const MEIO_DA_TELA = { rootMargin: '-50% 0px -50% 0px' };
const ULTIMO = capitulos.length - 1;

export function Capitulos({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const pilha = useRef<HTMLDivElement>(null);
  const gatilho = useRef<ScrollTrigger | null>(null);
  const [ativo, setAtivo] = useState<CapituloId | null>(null);
  const [navVisivel, setNavVisivel] = useState(false);

  // movimento reduzido: barra lateral aparece enquanto a seção cruza o meio da tela
  // (com movimento, segue o pin dos painéis: ver onToggle abaixo)
  useEffect(() => {
    const s = secao.current;
    if (!reduzido || !s) return;
    const obs = new IntersectionObserver(
      ([e]) => setNavVisivel(e?.isIntersecting ?? false),
      MEIO_DA_TELA,
    );
    obs.observe(s);
    return () => obs.disconnect();
  }, [reduzido]);

  // movimento reduzido: painéis em fluxo, o ativo é o que está no meio da tela
  useEffect(() => {
    const s = secao.current;
    if (!reduzido || !s) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setAtivo(e.target.id as CapituloId));
    }, MEIO_DA_TELA);
    s.querySelectorAll('article').forEach((a) => obs.observe(a));
    return () => obs.disconnect();
  }, [reduzido]);

  // painéis empilhados e fixados; cada capítulo se revela de baixo para cima sobre o anterior
  useGSAP(
    () => {
      if (reduzido) return;
      const paineis = gsap.utils.toArray<HTMLElement>('article');
      const texto = (p: HTMLElement) => p.querySelector(`.${styles.texto}`)?.children ?? [];
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: pilha.current,
          start: 'top top',
          end: `+=${ULTIMO * 100}%`,
          pin: true,
          scrub: true,
          onToggle: (s) => setNavVisivel(s.isActive),
          onUpdate: (s) => setAtivo(capitulos[Math.round(s.progress * ULTIMO)]?.id ?? null),
        },
      });
      gatilho.current = tl.scrollTrigger ?? null;
      if (paineis[0])
        gsap.from(texto(paineis[0]), {
          autoAlpha: 0,
          y: 60,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: pilha.current, start: 'top 65%' },
        });
      paineis.slice(1).forEach((p, i) => {
        // a máscara sobe com a borda em degradê (ver .painel no CSS) e o painel acende junto
        tl.fromTo(
          p,
          { '--mascara': 100, opacity: 0 },
          { '--mascara': -20, opacity: 1, duration: 0.8 },
          i + 0.1,
        )
          .from(p.querySelector('img'), { scale: 1.2, duration: 0.8 }, i + 0.1)
          .from(
            texto(p),
            { autoAlpha: 0, y: 40, stagger: 0.05, duration: 0.25, ease: 'power2.out' },
            i + 0.6,
          );
      });
      tl.set({}, {}, ULTIMO);
      return () => {
        gatilho.current = null;
        setNavVisivel(false);
      };
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  // com os painéis fixados, o link leva ao ponto do scroll em que o capítulo está inteiro
  const irPara = (e: MouseEvent, i: number) => {
    const s = gatilho.current;
    if (!s) return;
    e.preventDefault();
    scrollTo({ top: s.start + (s.end - s.start) * (i / ULTIMO) + 1 });
  };

  return (
    <section ref={secao} className={styles.capitulos} id="capitulos" aria-labelledby="cap-titulo">
      <nav
        className={`${styles.nav} ${navVisivel ? styles.visivel : ''}`}
        aria-label={t.capitulos.navRotulo}
      >
        <ol>
          {capitulos.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                onClick={(e) => irPara(e, i)}
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

      <div ref={pilha} className={styles.pilha}>
        {capitulos.map((c) => {
          const txt = t.capitulos.itens[c.id];
          const vars = { '--bg': c.bg, '--fg': c.fg } as CSSProperties;
          return (
            <article key={c.id} id={c.id} className={`vinheta ${styles.painel}`} style={vars}>
              <ResponsiveImage
                nome={c.imagem}
                alt={txt.imagemAlt}
                sizes="100vw"
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
