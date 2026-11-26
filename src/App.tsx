import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { AsQuatro } from './components/AsQuatro';
import { Capitulos } from './components/Capitulos';
import { Coracao } from './components/Coracao';
import { AssistaClipe } from './components/AssistaClipe';
import { Rodape } from './components/Rodape';
import { Respiro } from './components/Respiro';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useLanguage } from './i18n/LanguageContext';

export function App() {
  const reduzido = useReducedMotion();
  const { idioma } = useLanguage();
  useLenis(!reduzido);

  // entrada das seções: títulos e imagens de tela cheia se revelam de baixo para cima por máscara.
  // A máscara final passa da caixa (o glow dos títulos não é cortado) e sai ao terminar.
  useGSAP(
    () => {
      if (reduzido) return;
      gsap.utils.toArray<HTMLElement>('.cabecalho, #manifesto h2, [data-revelar]').forEach((el) =>
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% -10% -20% -10%)', y: 40 },
          {
            clipPath: 'inset(-20% -10% -20% -10%)',
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            clearProps: 'clipPath,transform',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        ),
      );
    },
    { dependencies: [reduzido], revertOnUpdate: true },
  );

  // textos mudam de altura ao trocar de idioma: recalcula os gatilhos
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [idioma]);

  return (
    <>
      <Header />
      <main>
        <Hero reduzido={reduzido} />
        <Manifesto reduzido={reduzido} />
        {/* 1:11.25: asas de fogo */}
        <Respiro nome="cap2-ignicao" reduzido={reduzido} />
        <AsQuatro reduzido={reduzido} />
        <Capitulos reduzido={reduzido} />
        <Coracao reduzido={reduzido} />
        <AssistaClipe />
      </main>
      <Rodape />
    </>
  );
}
