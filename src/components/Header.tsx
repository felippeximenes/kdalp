import { useLanguage, type Idioma } from '../i18n/LanguageContext';
import styles from './Header.module.css';

const OPCOES: Idioma[] = ['pt', 'en'];

export function Header() {
  const { idioma, setIdioma, t } = useLanguage();
  return (
    <header className={styles.topo}>
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
