import { ResponsiveImage } from './ResponsiveImage';
import styles from './Respiro.module.css';

/** frame do clipe em tela cheia, sem texto, derretendo no fundo em cima e embaixo */
export function Respiro({ nome }: { nome: string }) {
  return (
    <div className={`vinheta ${styles.respiro}`} aria-hidden="true">
      <ResponsiveImage nome={nome} alt="" sizes="100vw" className={styles.img} />
    </div>
  );
}
