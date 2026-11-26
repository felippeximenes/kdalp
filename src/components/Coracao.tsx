import { useRef, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Coracao.module.css';

export const CORACAO_PATH =
  'M50 88C20 65 4 46 4 28 4 14 15 4 28 4c10 0 18 6 22 14 4-8 12-14 22-14 13 0 24 10 24 24 0 18-16 37-46 60z';

// fagulhas subindo ao redor do coração: posições fixas, espalhadas sem padrão aparente
const FAGULHAS = Array.from({ length: 16 }, (_, i) => ({
  '--x': `${(i * 37) % 100}%`,
  '--atraso': `${((i * 0.53) % 4).toFixed(2)}s`,
  '--duracao': `${3 + (i % 4)}s`,
  '--tam': `${3 + (i % 3) * 2}px`,
})) as CSSProperties[];

export function Coracao({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  // o coração acende e depois flutua
  useGSAP(
    () => {
      if (reduzido) return;
      gsap
        .timeline({ scrollTrigger: { trigger: secao.current, start: 'top 55%' } })
        .from(svg.current, {
          scale: 0.4,
          autoAlpha: 0,
          transformOrigin: '50% 80%',
          duration: 1,
          ease: 'back.out(2)',
        })
        .to(svg.current, { y: -12, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.coracao} id="coracao">
      {!reduzido && (
        <div className={styles.fagulhas} aria-hidden="true">
          {FAGULHAS.map((f, i) => (
            <span key={i} style={f} />
          ))}
        </div>
      )}
      <p className="rotulo">{t.coracao.rotulo}</p>
      <svg ref={svg} className={styles.svg} viewBox="-10 -14 120 116" aria-hidden="true">
        <defs>
          <linearGradient id="coracao-fogo" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#FFF1C2" />
            <stop offset=".3" stopColor="#FFC94A" />
            <stop offset=".65" stopColor="#FF7A1A" />
            <stop offset="1" stopColor="#E0218A" />
          </linearGradient>
          {/* borda de chama: ruído largo deslocando o contorno, animado para tremular.
              O deslocamento sai serrilhado; o desfoque leve depois dele alisa a borda,
              e um desfoque largo da mesma chama vira o halo */}
          <filter
            id="coracao-chama"
            x="-30%"
            y="-40%"
            width="160%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.028 0.055"
              numOctaves="3"
              seed="3"
              result="ruido"
            >
              {!reduzido && (
                <animate
                  attributeName="baseFrequency"
                  dur="2.4s"
                  values="0.028 0.055;0.034 0.068;0.028 0.055"
                  calcMode="spline"
                  keySplines=".45 0 .55 1;.45 0 .55 1"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="ruido"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
              result="chama"
            />
            <feGaussianBlur in="chama" stdDeviation="1.1" result="borda" />
            <feGaussianBlur in="chama" stdDeviation="7" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="borda" />
            </feMerge>
          </filter>
        </defs>
        <path className={styles.brasa} d={CORACAO_PATH} />
        <path className={styles.fogo} d={CORACAO_PATH} filter="url(#coracao-chama)" />
      </svg>
      <p className={styles.frase}>{t.coracao.frase}</p>
    </section>
  );
}
