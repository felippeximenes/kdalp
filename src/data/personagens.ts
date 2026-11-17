export type PersonagemId = 'ahri' | 'evelynn' | 'akali' | 'kaisa';

export interface Personagem {
  id: PersonagemId;
  nome: string;
  /** timestamp (m:ss) do retrato de referência no clipe */
  retrato: string;
  cores: { bg: string; a1: string; a2: string; fg: string };
  /** segundos no clipe; os rótulos ficam em i18n, na mesma ordem */
  momentos: number[];
}

export const CLIPE_ID = 'Mmw-PpWhKFg';
export const linkClipe = (segundos?: number) =>
  `https://www.youtube.com/watch?v=${CLIPE_ID}${segundos ? `&t=${segundos}s` : ''}`;

export const tempo = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export const personagens: Personagem[] = [
  {
    id: 'ahri',
    nome: 'Ahri',
    retrato: '1:36',
    cores: { bg: '#14070A', a1: '#B3122E', a2: '#FFC94A', fg: '#E8DCC8' },
    momentos: [66, 71, 142],
  },
  {
    id: 'evelynn',
    nome: 'Evelynn',
    retrato: '0:56',
    cores: { bg: '#2B1838', a1: '#E0218A', a2: '#B9A3E3', fg: '#F4EEF8' },
    momentos: [48, 50, 56],
  },
  {
    id: 'akali',
    nome: 'Akali',
    retrato: '1:38',
    cores: { bg: '#0F0B0E', a1: '#E5407F', a2: '#C9CED6', fg: '#F7EEF2' },
    momentos: [98, 101],
  },
  {
    id: 'kaisa',
    nome: "Kai'Sa",
    retrato: '1:39',
    cores: { bg: '#2A0F5C', a1: '#8A3FFC', a2: '#FFD54A', fg: '#FFF6DA' },
    momentos: [99, 186, 187],
  },
];
