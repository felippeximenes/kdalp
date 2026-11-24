export type CapituloId = 'velorio' | 'ignicao' | 'cosmos' | 'coroacao' | 'fogoFinal';

export interface Capitulo {
  id: CapituloId;
  numeral: string;
  /** início da fase no clipe, em segundos */
  segundos: number;
  bg: string;
  fg: string;
  /** nome do arquivo em src/assets/images (sem largura nem extensão) */
  imagem: string;
}

export const capitulos: Capitulo[] = [
  {
    id: 'velorio',
    numeral: 'I',
    segundos: 0,
    bg: '#140A12',
    fg: '#E8DCC8',
    imagem: 'cap1-velorio',
  },
  {
    id: 'ignicao',
    numeral: 'II',
    segundos: 66,
    bg: '#120A0A',
    fg: '#FFE9D6',
    imagem: 'cap2-ignicao',
  },
  {
    id: 'cosmos',
    numeral: 'III',
    segundos: 99,
    bg: '#2A0F5C',
    fg: '#FFF6DA',
    imagem: 'cap3-cosmos',
  },
  {
    id: 'coroacao',
    numeral: 'IV',
    segundos: 144,
    bg: '#F9C7DD',
    fg: '#2B1A1C',
    imagem: 'cap4-coroacao',
  },
  {
    id: 'fogoFinal',
    numeral: 'V',
    segundos: 185,
    bg: '#E0102A',
    fg: '#FFF1F4',
    imagem: 'cap5-fogo-final',
  },
];
