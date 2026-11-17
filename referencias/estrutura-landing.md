# Estrutura da landing page · FIRESTARTER

> Projeto de fã, gratuito e não comercial. Base: `referencias/firestarter-analise.md`.
> Este documento define as seções, o comportamento do scroll e o sistema visual. A implementação fica com o Claude Code no repositório `kdalp`.

---

## Visão geral

A página repete o arco do clipe: **funeral → ressurreição → incêndio → coroação**. O scroll é a "linha do tempo". A página começa escura e dessaturada e termina saturada e luminosa, como o clipe.

| # | Seção | Fase do clipe | Altura aprox. | Tipo |
|---|---|---|---|---|
| 0 | Preloader | Velório | tela cheia | Fixo, some ao carregar |
| 1 | **Hero: o caixão estoura** | Velório → Fogo | ~400vh (fixado) | Scroll-scrub |
| 2 | Manifesto | Despertar | 100vh | Texto + revelação |
| 3 | As quatro | Retratos | 4 × 100vh ou scroll horizontal | Fichas de personagem |
| 4 | A história em capítulos | Todas as fases | ~5 × 100vh | Linha do tempo com troca de paleta |
| 5 | Interlúdio: o coração | Celebração (2:22) | 100vh | Micro-animação ícone |
| 6 | Assista ao clipe | Final | 100vh | Embed do YouTube |
| 7 | Rodapé | Final (3:09) | auto | Vermelho mono + aviso legal |

---

## 0 · Preloader

- Fundo `#0A0608`. Uma vela acende no centro, e a chama cresce conforme o carregamento.
- Em 100%, a chama "apaga" com fumaça e entra o hero.
- Serve também para pré-carregar a sequência de imagens do hero.

## 1 · Hero: o caixão estoura

**Ideia:** a tela fica fixada no velório (catedral, escadaria e mar de velas). O scroll controla o estouro dos caixões quadro a quadro. Quando o fogo toma a tela inteira, o site de fato começa.

**Composição inicial:** os quatro caixões vermelhos lado a lado, simétricos, no alto da escadaria. Cada um com seu naipe (losango, espada, coração, figura), centenas de velas e poeira no ar. Luz de vela quente e pontual, com o resto em sombra profunda.

> Decidido: **os quatro caixões**, para manter a fidelidade ao clipe.

**Linha do tempo do scroll (0% → 100% da seção fixada):**

| Scroll | O que acontece | Paleta |
|---|---|---|
| 0–15% | Câmera parada, velas tremulando, poeira caindo. Microtexto: "role para despertar". | Velório `#0A0608` `#2B1A1C` `#E8DCC8` |
| 15–35% | A câmera aproxima lentamente. Tampa começa a tremer. **Rachaduras com luz magenta** nas frestas. | + `#E0218A` nas rachaduras |
| 35–55% | As velas viram chamas altas (referência 0:13). Pétalas rosa começam a cair. Tremor de tela. | + `#C98A9E` `#B3122E` |
| 55–75% | **Estouro:** tampa e madeira explodem em fragmentos, com fagulhas, pétalas e fumaça violeta. Flash branco curto. | Fogo `#FF7A1A` `#FFC94A` `#D7262E` |
| 75–90% | Fogo rosa e dourado se abre **em forma de asas** e preenche a tela (referência 1:06). O título surge de dentro das chamas. | `#FF6FA0` `#FFC94A` |
| 90–100% | Transição em **mármore líquido rosa** (1:06) dissolve o fogo e revela a seção 2. A seção é liberada. | `#E0218A` → `#4B2A6B` |

**Técnica recomendada:**
- **Sequência de imagens em `<canvas>`**, com ~120–180 quadros WebP controlados pelo scroll (padrão das páginas de produto da Apple). Os quadros vêm de um vídeo do caixão estourando, renderizado em 3D ou gerado por IA, e exportado quadro a quadro.
- **Camadas por cima do canvas** em código: partículas (fagulhas e pétalas), tremor de tela, flash e texto. Isso deixa o estouro "vivo" mesmo com poucos quadros.
- **GSAP + ScrollTrigger** com `pin` e `scrub`, e **Lenis** para o scroll suave.
- **Mobile:** sequência menor (~60 quadros, 720px) e menos partículas.
- **`prefers-reduced-motion`:** troca o scrub por três imagens fixas (inteiro → rachado → em chamas) com fade.

**Texto do hero (proposta):**
- Antes do estouro: rótulo pequeno "UM PROJETO DE FÃ · FIRESTARTER".
- Depois do estouro: título grande **"Do velório ao incêndio"**, com subtítulo "A história das quatro, contada pelo fogo".

## 2 · Manifesto

- Fundo da fase Despertar (`#4B2A6B` com fumaça), magenta como destaque.
- Um parágrafo curto de sinopse, em texto próprio: elas foram veladas e voltaram queimando tudo, transformando o próprio enterro num show.
- As palavras surgem linha a linha com o scroll. As palavras-chave (fogo, caos, coroa) acendem em magenta.
- Fagulhas sobem lentamente do rodapé da seção.

## 3 · As quatro

Uma ficha por personagem, no estilo dos **retratos frontais com visor** (1:36–1:38). Cada ficha usa a cor-assinatura da personagem.

| Personagem | Papel na história | Cores-assinatura | Momento de destaque |
|---|---|---|---|
| **Ahri** | A incendiária, protagonista | Preto, vermelho-sangue `#B3122E`, dourado-fogo `#FFC94A` | Asas de fogo (1:06) e coração de fogo (2:22) |
| **Evelynn** | A diva sombria | Lilás `#B9A3E3`, magenta `#E0218A`, prata cromada `#C9CED6` | Pose acima da fumaça (0:50) |
| **Akali** | A rebelde street | Preto, rosa-chiclete `#E5407F`, prata espelhada | Retrato com chapéu e visor (1:38), bridge |
| **Kai'Sa** | A força cósmica | Ouro `#FFD54A`, violeta `#8A3FFC`, galáxia `#2A0F5C` | Dança no cosmos (1:39–1:53) |

**Comportamento:**
- **Desktop:** scroll horizontal fixado, uma personagem por tela. O fundo troca de cor entre elas.
- **Mobile:** fichas empilhadas na vertical.
- Cada ficha tem retrato, nome, papel, três traços de personalidade e os momentos-chave com timestamp. Clicar num timestamp abre o clipe naquele ponto.
- Entrada: rack focus (o retrato vem desfocado e entra em foco), como em 0:48 e 3:07.

## 4 · A história em capítulos

Cinco capítulos, um por virada do clipe. **A cor de fundo da página muda conforme o capítulo**, usando a tabela de paletas da análise.

| Capítulo | Tempo no clipe | Fundo | Imagem-chave | Transição de entrada |
|---|---|---|---|---|
| I · Velório | 0:00 | `#0A0608` | Coroa de flores e caixões | Fade lento |
| II · Ignição | 1:06 | `#120A0A` → `#FF7A1A` | Asas de fogo | Muralha de fogo atravessando a tela |
| III · Cosmos | 1:39 | `#2A0F5C` | Kai'Sa em neon | Corte seco (sem transição) |
| IV · Coroação | 2:24 | `#F9C7DD` | As quatro sob confete | Zoom-túnel rosa |
| V · Fogo final | 3:05 | `#E0102A` | Retrato do grupo em vermelho | Flash em negativo |

- Cada capítulo: número em romano, título, duas a três frases próprias e uma imagem grande.
- Barra lateral fina com os cinco capítulos, mostrando onde o leitor está.

## 5 · Interlúdio: o coração

- Tela quase vazia em céu pastel.
- Ao entrar na tela, um **coração de fogo** (contorno de chamas 2D) se transforma num **coração rosa flutuante** (referência 2:22–2:23).
- Uma frase curta e própria.
- É o elemento-ícone da página: reaparece pequeno no botão principal (CTA) e no cursor sobre links.

## 6 · Assista ao clipe

- Embed do YouTube com capa personalizada: o vídeo só carrega ao clicar (página mais leve).
- Atrás do player, chuva de confete iridescente e fogos rosa e dourados (2:46).
- Botão principal: **"Assistir ao clipe"**, com o coração.

## 7 · Rodapé

- Fundo vermelho monocromático `#E0102A`. Ao passar o mouse sobre o título, ele pisca em **negativo azul e rosa** (`#3A4BD8` / `#F2A6E0`), como em 3:09.
- Créditos do projeto e link para o clipe oficial.
- **Aviso obrigatório (Riot):** "[Nome do projeto] was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project."

---

## Sistema visual

### Cores base (tokens)

| Token | Hex | Uso |
|---|---|---|
| `--noite` | `#0A0608` | Fundo base, velório |
| `--madeira` | `#2B1A1C` | Superfícies escuras |
| `--marfim` | `#E8DCC8` | Texto sobre escuro |
| `--magenta` | `#E0218A` | Destaque principal (constante do clipe) |
| `--sangue` | `#B3122E` | Destaque secundário |
| `--chama` | `#FF7A1A` | Fogo |
| `--ouro` | `#FFC94A` | Fogo claro, brilhos |
| `--fumaca` | `#4B2A6B` | Fundos da fase Despertar |
| `--petala` | `#F7B6C8` | Fase Retratos e Celebração |
| `--violeta` | `#8A3FFC` | Cosmos |
| `--cromo` | `#C9CED6` | Detalhes metálicos, bordas |

**Regra:** escuro e dessaturado no topo, saturado e luminoso no fim. Magenta e vermelho aparecem em todas as seções, como fio condutor.

### Tipografia (proposta)

A análise não define fontes, então esta é uma proposta para validar. As três são gratuitas no Google Fonts.

| Papel | Fonte | Por quê |
|---|---|---|
| Títulos de capítulo e hero | **Bodoni Moda** (itálico e regular) | Serifa de alto contraste: lembra convite de velório e capa de revista de moda. Faz o lado gótico-glamouroso. |
| Rótulos, números, timestamps, botões | **Unbounded** (caixa-alta, espaçado) | Larga e geométrica, com cara de pop e palco. Faz o lado "show". |
| Texto corrido | **Manrope** | Limpa e legível em fundo escuro. |

- Títulos grandes (clamp 56–160px), com contraste forte entre Bodoni em itálico e Unbounded em caixa-alta.
- **Sem o logo do K/DA:** o nome do grupo aparece só em texto corrido, na tipografia do site.

### Texturas e efeitos

- **Fogo 2D pintado à mão** (formas chapadas), não fogo realista: é a assinatura do clipe.
- Cromo líquido em bordas, botões e detalhes (gradiente metálico com reflexo).
- Grão sutil de filme sobre toda a página.
- Glitter e partículas iridescentes nas seções claras.
- Bloom e aberração cromática leves nas bordas das imagens de fogo.

### Movimento

- **Biblioteca:** GSAP + ScrollTrigger, e Lenis para scroll suave.
- **Transições do clipe usadas na página:** muralha de fogo, mármore líquido, zoom-túnel, speed-lines, rack focus e flash em negativo.
- **Ritmo:** lento e simétrico no topo (velório), acelerando até cortes rápidos no fim (clímax), como o clipe.
- **Acessibilidade:** respeitar `prefers-reduced-motion` em todas as animações.

---

## Stack

A landing é uma SPA em **Vite + React + TypeScript** (modo `strict`, com `noUncheckedIndexedAccess`), com **ESLint** (typescript-eslint strict + regras de hooks) e **Prettier**. Comandos: `npm run dev`, `npm run build`, `npm run lint`, `npm run format`.

| Camada | Escolha | Onde |
| --- | --- | --- |
| Estilos | CSS Modules por componente + tokens globais (cores, fontes, espaçamentos) | `src/components/*.module.css`, `src/styles/tokens.css`, `src/styles/global.css` |
| Fontes | Bodoni Moda, Unbounded e Manrope pelo Google Fonts | `index.html` |
| Animação | `gsap` + ScrollTrigger com `useGSAP` (`@gsap/react`), sempre com `scope` no componente, para que animações e gatilhos sejam limpos ao desmontar | cada componente |
| Scroll suave | `lenis`, ligado ao ScrollTrigger pelo ticker do GSAP | `src/hooks/useLenis.ts` |
| Movimento reduzido | `useReducedMotion` desliga Lenis, fixação, scrub e entradas animadas. O hero mostra um quadro fixo já em chamas | `src/hooks/useReducedMotion.ts` |
| Idiomas | `pt.ts` e `en.ts` com o mesmo tipo `Dicionario`, contexto React e seletor PT/EN. Lembra a escolha (localStorage) e segue o navegador na primeira visita | `src/i18n/` |
| Dados das seções | Personagens e capítulos tipados. Os textos ficam no i18n, os dados fixos (cores, timestamps) ficam aqui | `src/data/` |

**Componentes**, na ordem da página: `Header`, `Hero`, `Manifesto`, `AsQuatro`, `Capitulos`, `Coracao`, `AssistaClipe`, `Rodape`.

**Mídia:** o vídeo do hero fica em `public/media/hero-a.mp4`, fora do git (pastas `media/` no `.gitignore`). Quem clonar o repositório precisa copiá-lo para lá.

GSAP, `@gsap/react` e Lenis vêm do npm, sem CDN. O `prototipos/hero-teste/` continua como HTML estático, isolado da SPA.

---

## Assets necessários

| Asset | Seção | Origem possível |
|---|---|---|
| Sequência do caixão estourando (120–180 quadros) | Hero | Render 3D (Blender) ou vídeo gerado por IA, exportado em WebP |
| Fundo do velório (escadaria, velas) | Hero, cap. I | Frame do clipe (permitido pela política da Riot para fã) ou ilustração própria |
| Retratos das quatro | As quatro | Frames do clipe 1:36–1:38 ou arte oficial da Riot |
| Imagens dos capítulos | Capítulos | Frames do clipe nos timestamps da tabela |
| Coração de fogo → coração rosa | Interlúdio | SVG animado próprio |
| Partículas (fagulhas, pétalas, confete) | Várias | Código (canvas) |

## Decisões tomadas

1. **Hero com os quatro caixões**, fiel ao clipe (0:10 e 1:31).
2. **Nome do projeto:** sem "K/DA" nem nomes de personagem no domínio. Nome ainda a definir.
3. **Vídeo do caixão:** gerado por IA a partir de dois frames reais do clipe. O frame de 0:10 (caixões intactos) é o primeiro quadro, e o de 1:31 (caixões em chamas) é o último. O prompt está em `docs/prompt-video-hero.md`.
4. **Idiomas:** português e inglês, com seletor PT/EN no topo.

## Pendências

- **Fogo da abertura (hero):** o protótipo em `prototipos/hero-teste/` funciona (scroll controlando o vídeo, combos A, B e Clipe), mas o fogo gerado por IA ficou infantil. Por enquanto fica a versão A para seguir com o site. Caminhos para revisitar depois:
  1. Trocar a parte 2 pelo trecho real do clipe (1:31.375 em diante), já testado no combo "Clipe".
  2. Regerar a parte 2 no modelo Qualidade, sem as palavras "anime", "chapado" e "bolas de fogo", pedindo fogo pintado em camadas, brasas, fumaça volumétrica e brilho cinematográfico.
  3. Fazer o estouro em código (WebGL: fagulhas, brasas, distorção de calor, flash) por cima dos frames reais.
