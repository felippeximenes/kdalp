import type { CapituloId } from '../data/capitulos';
import type { PersonagemId } from '../data/personagens';

type Ficha = {
  papel: string;
  gancho: string;
  bio: string;
  /** falas originais, escritas para o site: nunca trechos da letra */
  falas: [string, string];
  fechamento: string;
  retratoAlt: string;
};

export interface Dicionario {
  htmlLang: string;
  idiomaRotulo: string;
  verNoClipe: string;
  hero: { rotulo: string; titulo: string; tituloEm: string; subtitulo: string; dica: string };
  manifesto: { rotulo: string; titulo: string; texto: string; palavrasChave: string[] };
  quatro: { rotulo: string; titulo: string; personagens: Record<PersonagemId, Ficha> };
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
    rotulo: 'O elenco',
    titulo: 'As quatro',
    personagens: {
      ahri: {
        papel: 'A incendiária',
        gancho: 'Acordou no próprio velório e decidiu que o silêncio já tinha durado demais.',
        bio: 'Foi a primeira a abrir os olhos. Enquanto as velas ainda tremiam, ela já sabia o caminho: rasgar o mármore, atravessar as chamas e chamar as outras pelo nome. Lidera sem pedir licença e faz de qualquer cinza um palco.',
        falas: [
          'Me enterraram com flores. Eu trouxe o fósforo.',
          'Não vim pedir espaço. Vim acender o lugar inteiro.',
        ],
        fechamento: 'Atrás dela, alguém já sorria no escuro.',
        retratoAlt: 'Ahri em close frontal, com visor felino rosa e marcas de bigode no rosto',
      },
      evelynn: {
        papel: 'A diva sombria',
        gancho: 'Nunca teve medo do escuro: foi nele que aprendeu a brilhar.',
        bio: 'Saiu do caixão como quem desce de uma limusine. Fria, calculista e impossível de ignorar, transforma cada olhar em plateia e cada sombra em figurino. Quando a fumaça sobe, é porque ela quer ser vista de cima.',
        falas: [
          'Velório ou estreia? Para mim sempre foi a mesma noite.',
          'Quem me olha por tempo demais esquece de piscar.',
        ],
        fechamento: 'Mas toda diva precisa de alguém que bagunce o roteiro.',
        retratoAlt: 'Evelynn em close, com óculos roxos e cabelo platinado, sob luz violeta',
      },
      akali: {
        papel: 'A rebelde',
        gancho: 'Recusou o descanso eterno, porque descanso nunca foi com ela.',
        bio: 'Rápida na fala e mais rápida nos pés, trouxe a rua para dentro do mausoléu. Não segue coreografia: inventa a própria e desafia quem tentar acompanhar. Onde as outras queimam devagar, ela explode de uma vez.',
        falas: [
          'Regra de velório? Nunca li. Não pretendo ler.',
          'Se o chão tremeu, fui eu que pisei primeiro.',
        ],
        fechamento: 'Quando a poeira baixou, o céu já tinha mudado de cor.',
        retratoAlt: 'Akali com chapéu de pelo e visor espelhado rosa, mechas rosa ao vento',
      },
      kaisa: {
        papel: 'A força cósmica',
        gancho: 'Voltou de um lugar onde a luz ainda não tem nome.',
        bio: 'Enquanto as outras incendiavam a terra, ela atravessou o vazio e trouxe de lá um brilho que vem de dentro. Etérea, precisa e quase silenciosa, é quem segura o ritmo quando tudo parece prestes a se desfazer.',
        falas: [
          'Passei tempo demais entre as estrelas para ter medo de um caixão.',
          'Meu brilho não precisa de fósforo.',
        ],
        fechamento: 'Juntas, as quatro já não cabiam em túmulo nenhum.',
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
