import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CLIPE_ID } from '../data/personagens';
import { CORACAO_PATH } from './Coracao';
import { ResponsiveImage } from './ResponsiveImage';
import styles from './AssistaClipe.module.css';

export function AssistaClipe() {
  const { t } = useLanguage();
  const [carregado, setCarregado] = useState(false); // o YouTube só carrega no clique

  return (
    <section className={styles.assista} id="assista" aria-labelledby="assista-titulo">
      <header className="cabecalho">
        <p className="rotulo">{t.assista.rotulo}</p>
        <h2 id="assista-titulo">{t.assista.titulo}</h2>
      </header>
      <div className={styles.player}>
        {carregado ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${CLIPE_ID}?autoplay=1`}
            title="Firestarter"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={`vinheta ${styles.capa}`}
            onClick={() => setCarregado(true)}
          >
            {/* 1:33.65: as quatro saindo da explosão */}
            <ResponsiveImage nome="capa-clipe" alt="" sizes="100vw" className={styles.foto} />
            <span className="pilula">
              <svg viewBox="0 0 100 92" aria-hidden="true">
                <path d={CORACAO_PATH} />
              </svg>
              {t.assista.botao}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
