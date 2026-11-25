import { useEffect, useState } from 'react';
import { useLanguage, type Idioma } from '../i18n/LanguageContext';
import styles from './Header.module.css';

const OPCOES: Idioma[] = ['pt', 'en'];

export function Header() {
  const { idioma, setIdioma, t } = useLanguage();
  const [oculto, setOculto] = useState(false);

  // some ao rolar para baixo, volta ao rolar para cima
  useEffect(() => {
    let ultimo = scrollY;
    const onScroll = () => {
      const y = scrollY;
      if (Math.abs(y - ultimo) < 8) return;
      setOculto(y > ultimo && y > 80);
      ultimo = y;
    };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.topo} ${oculto ? styles.oculto : ''}`}>
      <span className="rotulo">Firestarter</span>
      <div className={styles.idioma} role="group" aria-label={t.idiomaRotulo}>
        {OPCOES.map((op) => (
          <button key={op} type="button" aria-pressed={idioma === op} onClick={() => setIdioma(op)}>
            {op.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
