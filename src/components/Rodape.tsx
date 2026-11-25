import { useLanguage } from '../i18n/LanguageContext';
import { linkClipe } from '../data/personagens';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './Rodape.module.css';

export function Rodape() {
  const { t } = useLanguage();
  return (
    <footer className={`vinheta ${styles.rodape}`}>
      {/* 3:08.81: retrato vermelho do grupo, de fundo em tela cheia */}
      <ResponsiveImage
        nome="cap5-fogo-final"
        alt={t.rodape.imagemAlt}
        sizes="100vw"
        className={styles.fundo}
      />
      {/* 3:08.94: o mesmo quadro em negativo, aparece no hover */}
      <ResponsiveImage
        nome="rodape-negativo"
        alt=""
        sizes="100vw"
        className={`${styles.fundo} ${styles.negativo}`}
      />
      <p className={styles.titulo}>Firestarter</p>
      <div className={styles.linha}>
        <p>
          {t.rodape.projeto}{' '}
          <a href={linkClipe()} target="_blank" rel="noopener noreferrer">
            {t.rodape.clipeOficial}
          </a>
        </p>
        {/* aviso obrigatório da Riot: fica em inglês nos dois idiomas */}
        <p className={styles.aviso}>
          Firestarter (fan project) was created under Riot Games&apos; &quot;Legal Jibber
          Jabber&quot; policy using assets owned by Riot Games. Riot Games does not endorse or
          sponsor this project.
        </p>
      </div>
    </footer>
  );
}
