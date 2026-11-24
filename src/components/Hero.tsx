import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

export function Hero({ reduzido }: { reduzido: boolean }) {
  const { t } = useLanguage();
  const secao = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const v = video.current;
      if (!v) return;
      let progresso = reduzido ? 0.5 : 0; // movimento reduzido: quadro fixo já em chamas
      const irPara = () => {
        if (v.duration) v.currentTime = progresso * (v.duration - 0.05);
      };
      v.addEventListener('loadedmetadata', irPara);
      irPara();
      const limpar = () => v.removeEventListener('loadedmetadata', irPara);
      if (reduzido) return limpar;

      // 400vh fixado, scroll = tempo do vídeo
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: secao.current,
            start: 'top top',
            end: '+=400%',
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
          { autoAlpha: 1, y: 0, duration: 0.15 },
          0.75,
        )
        .to(`.${styles.flash}`, { opacity: 1, duration: 0.1 }, 0.9)
        .set({}, {}, 1);

      return limpar;
    },
    { scope: secao, dependencies: [reduzido], revertOnUpdate: true },
  );

  return (
    <section ref={secao} className={styles.hero} id="inicio">
      <video
        ref={video}
        className={styles.video}
        src="/media/hero-a.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.flash} aria-hidden="true" />
      <p className={`rotulo ${styles.rotulo}`}>{t.hero.rotulo}</p>
      <div className={styles.titulo}>
        <p className="rotulo">Firestarter</p>
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
