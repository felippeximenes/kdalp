import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en } from './en';
import { pt, type Dicionario } from './pt';

export type Idioma = 'pt' | 'en';

const dicionarios: Record<Idioma, Dicionario> = { pt, en };
const CHAVE = 'lang';

function idiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo === 'pt' || salvo === 'en') return salvo;
  } catch {
    /* storage bloqueado: segue o navegador */
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

interface Contexto {
  idioma: Idioma;
  setIdioma: (i: Idioma) => void;
  t: Dicionario;
}

const LanguageContext = createContext<Contexto | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdiomaState] = useState<Idioma>(idiomaInicial);
  const t = dicionarios[idioma];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t]);

  const setIdioma = (i: Idioma) => {
    setIdiomaState(i);
    try {
      localStorage.setItem(CHAVE, i);
    } catch {
      /* sem persistência, sem problema */
    }
  };

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, t }}>{children}</LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook acompanha o provider
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>');
  return ctx;
}
