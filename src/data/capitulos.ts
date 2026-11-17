export type CapituloId = 'velorio' | 'ignicao' | 'cosmos' | 'coroacao' | 'fogoFinal';

export interface Capitulo {
  id: CapituloId;
  numeral: string;
  tempo: string;
  bg: string;
  fg: string;
  /** placeholder da imagem-chave até as imagens finais */
  imagem: string;
}

export const capitulos: Capitulo[] = [
  {
    id: 'velorio',
    numeral: 'I',
    tempo: '0:00',
    bg: '#0A0608',
    fg: '#E8DCC8',
    imagem: 'linear-gradient(160deg,#2B1A1C,#C98A9E)',
  },
  {
    id: 'ignicao',
    numeral: 'II',
    tempo: '1:06',
    bg: '#120A0A',
    fg: '#FFE9D6',
    imagem: 'linear-gradient(160deg,#120A0A,#FF7A1A 60%,#FFC94A)',
  },
  {
    id: 'cosmos',
    numeral: 'III',
    tempo: '1:39',
    bg: '#2A0F5C',
    fg: '#FFF6DA',
    imagem: 'linear-gradient(160deg,#8A3FFC,#FFD54A)',
  },
  {
    id: 'coroacao',
    numeral: 'IV',
    tempo: '2:24',
    bg: '#F9C7DD',
    fg: '#2B1A1C',
    imagem: 'linear-gradient(160deg,#D9219B,#E8F0FF 70%,#E6FF5A)',
  },
  {
    id: 'fogoFinal',
    numeral: 'V',
    tempo: '3:05',
    bg: '#E0102A',
    fg: '#FFF1F4',
    imagem: 'linear-gradient(160deg,#7A0614,#E0102A 55%,#F2A6E0)',
  },
];
