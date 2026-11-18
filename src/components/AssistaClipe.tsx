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
    <section className={styles.assista} id="assista">
      <h2>
        {t.assista.titulo} <em>{t.assista.tituloEm}</em>
      </h2>
      <div className={styles.player}>
        {carregado ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${CLIPE_ID}?autoplay=1`}
            title="Firestarter"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.capa} onClick={() => setCarregado(true)}>
            <ResponsiveImage
              nome="capa-clipe"
              alt={t.assista.capaAlt}
              sizes="(min-width: 1100px) 1100px, 100vw"
              className={styles.foto}
            />
            <span className={styles.botao}>
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
