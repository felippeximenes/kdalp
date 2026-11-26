// todos os AVIF/WebP de src/assets/images, nomeados <nome>-<largura>.<ext>
const arquivos = import.meta.glob<string>('../assets/images/*.{avif,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const FORMATOS = {
  retrato: { larguras: [480, 960, 1200], altura: 1600 }, // 3:4; altura inteira do 4K (1224×1632), sem ampliar
  paisagem: { larguras: [640, 1280, 1920], altura: 1080 }, // 16:9
};

interface Props {
  nome: string;
  alt: string;
  sizes: string;
  formato?: keyof typeof FORMATOS;
  className?: string;
  /** 'eager' quando a imagem não pode faltar ao entrar na tela */
  loading?: 'lazy' | 'eager';
}

export function ResponsiveImage({
  nome,
  alt,
  sizes,
  formato = 'paisagem',
  className,
  loading = 'lazy',
}: Props) {
  const { larguras, altura } = FORMATOS[formato];
  const srcset = (ext: string) =>
    larguras
      .map((w) => {
        const url = arquivos[`../assets/images/${nome}-${w}.${ext}`];
        if (!url) throw new Error(`Imagem ausente: ${nome}-${w}.${ext}`);
        return `${url} ${w}w`;
      })
      .join(', ');
  const maior = larguras[larguras.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={srcset('avif')} sizes={sizes} />
      <img
        className={className}
        srcSet={srcset('webp')}
        sizes={sizes}
        src={arquivos[`../assets/images/${nome}-${maior}.webp`]}
        alt={alt}
        width={maior}
        height={altura}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
