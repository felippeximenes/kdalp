import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

// o vídeo chega ao último quadro (as asas de fogo) aqui; o resto do pin é o título sobre ele
const FIM_DO_VIDEO = 0.85;

export function Hero({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const v = video.current;
      if (!v) return;
      let progresso = reduzido ? 1 : 0; // movimento reduzido: quadro fixo, o último de fogo
      const irPara = () => {
        if (v.duration) v.currentTime = Math.min(progresso / FIM_DO_VIDEO, 1) * (v.duration - 0.05);
      };
      v.addEventListener('loadedmetadata', irPara);
      irPara();
      const limpar = () => v.removeEventListener('loadedmetadata', irPara);
      if (reduzido) return limpar;

      // 450vh fixado, scroll = tempo do vídeo até FIM_DO_VIDEO; depois, o título
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: secao.current,
            start: 'top top',
            end: '+=450%',
            pin: true,
            scrub: true,
            onUpdate: (s) => {
              progresso = s.progress;
              irPara();
            },
          },
        })
        .to(`.${styles.dica}`, { autoAlpha: 0, duration: 0.15 }, 0)
        .to(`.${styles.rotulo}`, { autoAlpha: 0, duration: 0.1 }, 0.45)
        .fromTo(
          `.${styles.titulo}`,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.1 },
          FIM_DO_VIDEO + 0.02,
        )
        .from(`.${styles.sombra}`, { opacity: 0, duration: 0.1 }, FIM_DO_VIDEO)
        .set({}, {}, 1);

      return limpar;
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={`vinheta ${styles.hero}`} id="inicio">
      <video
        ref={video}
        className={styles.video}
        src="/media/hero-a.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.sombra} aria-hidden="true" />
      <p className={`rotulo ${styles.rotulo}`}>{t.hero.rotulo}</p>
      <div className={styles.titulo}>
        <h1>
          {t.hero.titulo} <em>{t.hero.tituloEm}</em>
        </h1>
        <p>{t.hero.subtitulo}</p>
      </div>
      {!reduzido && (
        <p className={`rotulo ${styles.dica}`} aria-hidden="true">
          {t.hero.dica}
        </p>
      )}
    </section>
  );
}
