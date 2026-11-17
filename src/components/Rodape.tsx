import { useLanguage } from '../i18n/LanguageContext';
import { linkClipe } from '../data/personagens';
import styles from './Rodape.module.css';

export function Rodape() {
  const { t } = useLanguage();
  return (
    <footer className={styles.rodape}>
      <p className={styles.titulo}>Firestarter</p>
      <p>
        {t.rodape.projeto}{' '}
        <a href={linkClipe()} target="_blank" rel="noopener noreferrer">
          {t.rodape.clipeOficial}
        </a>
      </p>
      {/* aviso obrigatório da Riot: fica em inglês nos dois idiomas */}
      <p className={styles.aviso}>
        [Nome do projeto] was created under Riot Games&apos; &quot;Legal Jibber Jabber&quot; policy
        using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
      </p>
    </footer>
  );
}
