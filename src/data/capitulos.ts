export type CapituloId = 'velorio' | 'ignicao' | 'cosmos' | 'coroacao' | 'fogoFinal';

export interface Capitulo {
  id: CapituloId;
  numeral: string;
  tempo: string;
  bg: string;
  fg: string;
  /** nome do arquivo em src/assets/images (sem largura nem extensão) */
  imagem: string;
}

export const capitulos: Capitulo[] = [
  {
    id: 'velorio',
    numeral: 'I',
    tempo: '0:00',
    bg: '#0A0608',
    fg: '#E8DCC8',
    imagem: 'cap1-velorio',
  },
  {
    id: 'ignicao',
    numeral: 'II',
    tempo: '1:06',
    bg: '#120A0A',
    fg: '#FFE9D6',
    imagem: 'cap2-ignicao',
  },
  {
    id: 'cosmos',
    numeral: 'III',
    tempo: '1:39',
    bg: '#2A0F5C',
    fg: '#FFF6DA',
    imagem: 'cap3-cosmos',
  },
  {
    id: 'coroacao',
    numeral: 'IV',
    tempo: '2:24',
    bg: '#F9C7DD',
    fg: '#2B1A1C',
    imagem: 'cap4-coroacao',
  },
  {
    id: 'fogoFinal',
    numeral: 'V',
    tempo: '3:05',
    bg: '#E0102A',
    fg: '#FFF1F4',
    imagem: 'cap5-fogo-final',
  },
];
