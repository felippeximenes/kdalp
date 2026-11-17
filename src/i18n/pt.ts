import type { CapituloId } from '../data/capitulos';
import type { PersonagemId } from '../data/personagens';

export interface Dicionario {
  htmlLang: string;
  idiomaRotulo: string;
  hero: { rotulo: string; titulo: string; tituloEm: string; subtitulo: string; dica: string };
  manifesto: { rotulo: string; texto: string; palavrasChave: string[] };
  quatro: {
    titulo: string;
    retratoAlt: string;
    personagens: Record<
      PersonagemId,
      { papel: string; tracos: [string, string, string]; momentos: string[] }
    >;
  };
  capitulos: {
    titulo: string;
    navRotulo: string;
    imagemAlt: string;
    itens: Record<CapituloId, { titulo: string; texto: string }>;
  };
  coracao: { frase: string };
  assista: { titulo: string; tituloEm: string; botao: string };
  rodape: { projeto: string; clipeOficial: string };
}

export const pt: Dicionario = {
  htmlLang: 'pt-BR',
  idiomaRotulo: 'Idioma',
  hero: {
    rotulo: 'Um projeto de fã · Firestarter',
    titulo: 'Do velório',
    tituloEm: 'ao incêndio',
    subtitulo: 'A história das quatro, contada pelo fogo',
    dica: 'Role para despertar',
  },
  manifesto: {
    rotulo: 'Manifesto',
    texto:
      'Elas foram veladas à luz de vela, em quatro caixões lado a lado. Ninguém esperava que o silêncio pegasse fogo. Do próprio enterro fizeram um show: o caos virou ritmo, as cinzas viraram coroa, e o mundo frio foi tingido de vermelho.',
    palavrasChave: ['fogo', 'caos', 'coroa'],
  },
  quatro: {
    titulo: 'As quatro',
    retratoAlt: 'Retrato provisório',
    personagens: {
      ahri: {
        papel: 'A incendiária',
        tracos: ['Líder', 'Provocadora', 'Dona do fogo'],
        momentos: ['Asas de fogo', 'A transformação', 'Coração de fogo'],
      },
      evelynn: {
        papel: 'A diva sombria',
        tracos: ['Fria', 'Sedutora', 'Pose de estrela'],
        momentos: ['Anéis na lente', 'Acima da fumaça', 'Óculos roxos'],
      },
      akali: {
        papel: 'A rebelde',
        tracos: ['Atitude', 'Rap rápido', 'Energia de rua'],
        momentos: ['Retrato com visor', 'O bridge'],
      },
      kaisa: {
        papel: 'A força cósmica',
        tracos: ['Etérea', 'Poderosa', 'Sobrenatural'],
        momentos: ['Dança no cosmos', 'Dunas violeta', 'Mãos na lente'],
      },
    },
  },
  capitulos: {
    titulo: 'A história em capítulos',
    navRotulo: 'Capítulos',
    imagemAlt: 'Imagem provisória',
    itens: {
      velorio: {
        titulo: 'Velório',
        texto:
          'Quatro caixões no alto da escadaria, um mar de velas e uma coroa de lírios. O silêncio antes do fogo.',
      },
      ignicao: {
        titulo: 'Ignição',
        texto:
          'O mármore rosa se rasga e ela sai caminhando de uma explosão em forma de asas. O mundo escuro pega fogo.',
      },
      cosmos: {
        titulo: 'Cosmos',
        texto:
          'Um corte seco e a paleta inteira muda: ouro incandescente sobre violeta, e a luz vem de dentro dela.',
      },
      coroacao: {
        titulo: 'Coroação',
        texto: 'As quatro juntas sob uma chuva de confete iridescente. O enterro virou festa.',
      },
      fogoFinal: {
        titulo: 'Fogo final',
        texto:
          'Cortes quadro a quadro, tudo em vermelho, e um flash em negativo. Quem não aguenta o calor que saia.',
      },
    },
  },
  coracao: { frase: 'Todo fogo começa com uma faísca.' },
  assista: { titulo: 'Assista', tituloEm: 'ao clipe', botao: 'Assistir ao clipe' },
  rodape: { projeto: 'Projeto de fã, gratuito e não comercial.', clipeOficial: 'Clipe oficial' },
};
