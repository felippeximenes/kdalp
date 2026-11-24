import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
        <Respiro nome="cap2-ignicao" />
        <AsQuatro reduzido={reduzido} />
        {/* 1:33.65: as quatro saindo da explosão */}
        <Respiro nome="capa-clipe" />
        <Capitulos reduzido={reduzido} />
        <Coracao reduzido={reduzido} />
        <AssistaClipe />
      </main>
      <Rodape />
    </>
  );
}
