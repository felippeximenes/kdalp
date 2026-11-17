import type { Dicionario } from './pt';

export const en: Dicionario = {
  htmlLang: 'en',
  idiomaRotulo: 'Language',
  hero: {
    rotulo: 'A fan project · Firestarter',
    titulo: 'From funeral',
    tituloEm: 'to wildfire',
    subtitulo: 'The story of the four, told by fire',
    dica: 'Scroll to awaken',
  },
  manifesto: {
    rotulo: 'Manifesto',
    texto:
      'They were laid to rest by candlelight, four coffins side by side. No one expected the silence to catch fire. They turned their own funeral into a show: chaos became rhythm, ashes became a crown, and a cold world was dyed red.',
    palavrasChave: ['fire', 'chaos', 'crown'],
  },
  quatro: {
    titulo: 'The four',
    retratoAlt: 'Placeholder portrait',
    personagens: {
      ahri: {
        papel: 'The firestarter',
        tracos: ['Leader', 'Provocative', 'Keeper of the flame'],
        momentos: ['Wings of fire', 'The transformation', 'Heart of fire'],
      },
      evelynn: {
        papel: 'The dark diva',
        tracos: ['Cold', 'Seductive', 'Star pose'],
        momentos: ['Rings on the lens', 'Above the smoke', 'Purple glasses'],
      },
      akali: {
        papel: 'The rebel',
        tracos: ['Attitude', 'Fast rap', 'Street energy'],
        momentos: ['Visor portrait', 'The bridge'],
      },
      kaisa: {
        papel: 'The cosmic force',
        tracos: ['Ethereal', 'Powerful', 'Otherworldly'],
        momentos: ['Cosmic dance', 'Violet dunes', 'Hands on the lens'],
      },
    },
  },
  capitulos: {
    titulo: 'The story in chapters',
    navRotulo: 'Chapters',
    imagemAlt: 'Placeholder image',
    itens: {
      velorio: {
        titulo: 'Funeral',
        texto:
          'Four coffins atop the stairs, a sea of candles and a wreath of lilies. The silence before the fire.',
      },
      ignicao: {
        titulo: 'Ignition',
        texto:
          'Pink marble tears open and she walks out of an explosion shaped like wings. The dark world catches fire.',
      },
      cosmos: {
        titulo: 'Cosmos',
        texto:
          'A hard cut and the whole palette shifts: glowing gold on violet, and the light comes from within her.',
      },
      coroacao: {
        titulo: 'Coronation',
        texto: 'The four together under a rain of iridescent confetti. The burial became a party.',
      },
      fogoFinal: {
        titulo: 'Final fire',
        texto:
          "Frame-by-frame cuts, everything in red, and a flash in negative. If you can't take the heat, get out.",
      },
    },
  },
  coracao: { frase: 'Every fire starts with a spark.' },
  assista: { titulo: 'Watch', tituloEm: 'the video', botao: 'Watch the video' },
  rodape: { projeto: 'A free, non-commercial fan project.', clipeOficial: 'Official video' },
};
