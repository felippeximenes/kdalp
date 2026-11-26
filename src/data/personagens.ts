export type PersonagemId = 'ahri' | 'evelynn' | 'akali' | 'kaisa';

export interface Personagem {
  id: PersonagemId;
  nome: string;
  cores: { bg: string; a1: string; a2: string; fg: string };
  /** segundos no clipe: o momento do botão "Ver no clipe" */
  momento: number;
  /** object-position vertical do retrato (o topo da cabeça encosta no quadro em algumas) */
  foco?: string;
}

export const CLIPE_ID = 'Mmw-PpWhKFg';
export const linkClipe = (segundos?: number) =>
  `https://www.youtube.com/watch?v=${CLIPE_ID}${segundos ? `&t=${segundos}s` : ''}`;

export const tempo = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export const personagens: Personagem[] = [
  {
    id: 'ahri',
    nome: 'Ahri',
    cores: { bg: '#14070A', a1: '#B3122E', a2: '#FFC94A', fg: '#E8DCC8' },
    momento: 71,
    foco: '0%', // orelhas encostam no topo do quadro
  },
  {
    id: 'evelynn',
    nome: 'Evelynn',
    cores: { bg: '#2B1838', a1: '#E0218A', a2: '#B9A3E3', fg: '#F4EEF8' },
    momento: 50,
  },
  {
    id: 'akali',
    nome: 'Akali',
    cores: { bg: '#0F0B0E', a1: '#E5407F', a2: '#C9CED6', fg: '#F7EEF2' },
    momento: 98,
  },
  {
    id: 'kaisa',
    nome: "Kai'Sa",
    cores: { bg: '#2A0F5C', a1: '#8A3FFC', a2: '#FFD54A', fg: '#FFF6DA' },
    momento: 109,
  },
];
