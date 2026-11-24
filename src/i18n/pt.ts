import type { CapituloId } from '../data/capitulos';
import type { PersonagemId } from '../data/personagens';

export interface Dicionario {
  htmlLang: string;
  idiomaRotulo: string;
  verNoClipe: string;
  hero: { rotulo: string; titulo: string; tituloEm: string; subtitulo: string; dica: string };
  manifesto: { rotulo: string; titulo: string; texto: string; palavrasChave: string[] };
  quatro: {
    titulo: string;
    personagens: Record<
      PersonagemId,
      { papel: string; tracos: [string, string, string]; momentos: string[]; retratoAlt: string }
    >;
  };
  capitulos: {
    rotulo: string;
    titulo: string;
    navRotulo: string;
    capitulo: string;
    itens: Record<CapituloId, { titulo: string; texto: string; imagemAlt: string }>;
  };
  coracao: { rotulo: string; frase: string };
  assista: { rotulo: string; titulo: string; botao: string };
  rodape: { projeto: string; clipeOficial: string; imagemAlt: string };
}

export const pt: Dicionario = {
  htmlLang: 'pt-BR',
  idiomaRotulo: 'Idioma',
  verNoClipe: 'Ver no clipe',
  hero: {
    rotulo: 'Um projeto de fã · Firestarter',
    titulo: 'Do velório',
    tituloEm: 'ao incêndio',
    subtitulo: 'A história das quatro, contada pelo fogo',
    dica: 'Role para despertar',
  },
  manifesto: {
    rotulo: 'Manifesto',
    titulo: 'O silêncio pegou fogo',
    texto:
      'Elas foram veladas à luz de vela, em quatro caixões lado a lado. Ninguém esperava que o silêncio pegasse fogo. Do próprio enterro fizeram um show: o caos virou ritmo, as cinzas viraram coroa, e o mundo frio foi tingido de vermelho.',
    palavrasChave: ['fogo', 'caos', 'coroa'],
  },
  quatro: {
    titulo: 'As quatro',
    personagens: {
      ahri: {
        papel: 'A incendiária',
        tracos: ['Líder', 'Provocadora', 'Dona do fogo'],
        momentos: ['Asas de fogo', 'A transformação', 'Coração de fogo'],
        retratoAlt: 'Ahri em close frontal, com visor felino rosa e marcas de bigode no rosto',
      },
      evelynn: {
        papel: 'A diva sombria',
        tracos: ['Fria', 'Sedutora', 'Pose de estrela'],
        momentos: ['Anéis na lente', 'Acima da fumaça', 'Óculos roxos'],
        retratoAlt: 'Evelynn em close, com óculos roxos e cabelo platinado, sob luz violeta',
      },
      akali: {
        papel: 'A rebelde',
        tracos: ['Atitude', 'Rap rápido', 'Energia de rua'],
        momentos: ['Retrato com visor', 'O bridge'],
        retratoAlt: 'Akali com chapéu de pelo e visor espelhado rosa, mechas rosa ao vento',
      },
      kaisa: {
        papel: 'A força cósmica',
        tracos: ['Etérea', 'Poderosa', 'Sobrenatural'],
        momentos: ['Dança no cosmos', 'Dunas violeta', 'Mãos na lente'],
        retratoAlt: "Kai'Sa em close, com visor rosa e choker de anéis prateados",
      },
    },
  },
  capitulos: {
    rotulo: 'A história',
    titulo: 'Em cinco capítulos',
    navRotulo: 'Capítulos',
    capitulo: 'Capítulo',
    itens: {
      velorio: {
        titulo: 'Velório',
        texto:
          'Quatro caixões no alto da escadaria, um mar de velas e uma coroa de lírios. O silêncio antes do fogo.',
        imagemAlt:
          'Vista de dentro do caixão: o forro roxo acolchoado e, através do vidro, saltos vermelhos entre as velas',
      },
      ignicao: {
        titulo: 'Ignição',
        texto:
          'O mármore rosa se rasga e ela sai caminhando de uma explosão em forma de asas. O mundo escuro pega fogo.',
        imagemAlt: 'Ahri caminha no centro de um par de asas de fogo, cercada de chamas',
      },
      cosmos: {
        titulo: 'Cosmos',
        texto:
          'Um corte seco e a paleta inteira muda: ouro incandescente sobre violeta, e a luz vem de dentro dela.',
        imagemAlt: "Kai'Sa brilha em neon laranja no cosmos violeta, envolta por fitas de energia",
      },
      coroacao: {
        titulo: 'Coroação',
        texto: 'As quatro juntas sob uma chuva de confete iridescente. O enterro virou festa.',
        imagemAlt: 'As quatro posam juntas sob uma chuva de confete iridescente em tons de rosa',
      },
      fogoFinal: {
        titulo: 'Fogo final',
        texto:
          'Cortes quadro a quadro, tudo em vermelho, e um flash em negativo. Quem não aguenta o calor que saia.',
        imagemAlt: 'As quatro em close de grupo, tudo em vermelho monocromático',
      },
    },
  },
  coracao: { rotulo: 'Interlúdio', frase: 'Todo fogo começa com uma faísca.' },
  assista: {
    rotulo: 'Assista',
    titulo: 'O clipe inteiro',
    botao: 'Assistir ao clipe',
  },
  rodape: {
    projeto: 'Projeto de fã, gratuito e não comercial.',
    clipeOficial: 'Clipe oficial',
    imagemAlt: 'As quatro em close de grupo, em vermelho monocromático',
  },
};
