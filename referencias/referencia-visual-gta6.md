# Referência visual: site do GTA VI → KDA Projeto

> Análise feita em 24/nov com o Context.dev (mapa do site, guia de estilo e leitura da página principal e da página de personagens), mais um print da página inteira em 1920px. Custou 13 créditos.
> **Uso:** referência de *linguagem visual* para o FIRESTARTER. Não copiar textos, logo, fontes proprietárias (a "ArtDeco" é fonte própria da Rockstar), imagens nem o layout literal.

---

## 1. O que existe no site

Seis páginas na seção VI: a principal, edições, música, trailer de lançamento, "An Extended Look" e mídia. Há também a página de personagens ("Only in Leonida"), que é a mais próxima da nossa seção "As quatro".

## 2. O DNA visual (o que faz parecer premium)

### Cor
- **Fundo azul-marinho muito escuro (`#0C0D1B`), não preto puro.** O escuro tem tom, e isso deixa tudo mais rico.
- Texto branco. Destaque em **lilás claro (`#CCC2F5`)** e **rosa-pêssego (`#FEE8EA`)**.
- Sombras com **brilho rosado** (`rgba(255,179,199,.15) 0 2px 50px`) em vez de sombra preta.
- Paleta das imagens: pôr do sol (roxo → rosa → laranja). Cada card tem uma cor dominante própria.
- O parágrafo de história principal aparece **em coral/rosa**, não em branco: o texto vira parte da paleta.

### Tipografia
- **Uma família display condensada, em caixa-alta, para todos os títulos** (LAUNCH TRAILER, ULTIMATE EDITION). É o elemento mais reconhecível.
- **Rótulo pequeno acima do título** ("WATCH", "DIGITAL ADD-ON", "SCREENSHOTS"): sobretítulo em caixa-alta, pequeno e espaçado.
- Texto corrido grande: **21,6 px com 32 px de entrelinha**, com letter-spacing levemente negativo.
- Pouca variedade: uma fonte display + uma de texto. Nada de três estilos competindo.

### Espaçamento
- Escala de espaços bem marcada: **14 · 26 · 60 · 76 · 154 px**. Os 154 px entre blocos grandes dão o "respiro" de site caro.

### Ritmo da página (de cima para baixo)
1. Arte-chave grande no topo, com o título e o botão de compra logo abaixo.
2. **Bloco de vídeo em tela cheia** ("Launch Trailer") com botão de play no centro.
3. Grade de **cards de vídeo** numa coluna central (~1000 px): um card largo e três menores.
4. **Imagem em tela cheia sem texto** (um "respiro" cinematográfico).
5. Cards largos de produto, cada um com fundo de cor própria.
6. Outro respiro em tela cheia (a cidade ao anoitecer, com degradê para o fundo).
7. **Bloco de história:** título curto + parágrafo grande em rosa.
8. Pilha de **cards largos de navegação**, cada um com uma imagem forte, cor dominante diferente, sobretítulo, título, uma frase e um botão pequeno.
9. Loja e notícias em cards menores.
10. Rodapé compacto e escuro.

**A regra:** alternar **tela cheia (emoção)** com **coluna central de cards (informação)**. Nunca duas seções seguidas com o mesmo formato.

### Componentes
- **Cards de imagem** com cantos bem arredondados, imagem cobrindo tudo e **degradê escuro de baixo para cima**. Texto no canto inferior esquerdo: sobretítulo → título condensado → uma frase → botão-pílula.
- **Botões em pílula** (raio total), pequenos, rosa com texto escuro, ou só com contorno.
- **Imagens com degradê para a cor do fundo** nas bordas, para que as fotos "derretam" na página em vez de terem corte reto.

### Página de personagem (modelo para "As quatro")
Cada personagem segue a mesma estrutura:
1. **Nome** grande.
2. **Uma frase-gancho** que resume o conflito dela.
3. **Um parágrafo de biografia** curto.
4. **Duas falas em primeira pessoa**, como citações grandes, entre imagens.
5. **Uma frase de fechamento** que puxa para a próxima.
6. Imagens grandes intercaladas com o texto, e um vídeo ("Rewatch Video").

Entre os personagens entram **seções-respiro** sobre o lugar ("Only in Leonida — home to…").

---

## 3. Tradução para o FIRESTARTER

| No GTA VI | No KDA Projeto |
|---|---|
| Fundo `#0C0D1B` (escuro com tom) | Trocar o preto `#0A0608` por um **ameixa-escuro** (ex.: `#140A12`), mantendo o tom quente do velório |
| Lilás e rosa-pêssego de destaque | Já temos: **magenta `#E0218A`** e **pétala `#F7B6C8`**. Usar a pétala nos botões e o magenta nos destaques |
| Brilho rosado nas sombras | `box-shadow` com glow magenta suave nos cards e botões |
| Display condensada em caixa-alta | Títulos em **display condensada caixa-alta** (sugestão gratuita: *Big Shoulders Display* 800). A Bodoni Moda itálica fica só para frases de impacto e citações |
| Sobretítulo acima do título | Em toda seção e card: "CAPÍTULO II", "A INCENDIÁRIA", "ASSISTA" |
| Texto corrido de 21–22 px | Subir o texto corrido para **20–22 px**, entrelinha 1,5 |
| Parágrafo de história em cor | O manifesto em **rosa-pétala** sobre o fundo escuro, como o "Vice City, USA." |
| Escala 14 · 26 · 60 · 76 · 154 | Adotar a mesma lógica de escala, com **150 px+ entre seções** |
| Tela cheia ↔ cards | Intercalar os **frames 4K do clipe em tela cheia** (respiros) com seções em coluna de cards |
| Cards com degradê e botão-pílula | Capítulos viram **cards grandes** com o frame, degradê na cor da fase, sobretítulo, título, uma frase e "Ver no clipe" |
| Imagens que "derretem" no fundo | Todas as imagens em tela cheia com degradê para a cor do fundo em cima e embaixo |
| Página de personagem | Cada ficha de "As quatro" ganha: nome → gancho → biografia curta → **duas falas próprias** (escritas por nós, nunca trechos da letra) → frase de fechamento → botão para o momento no clipe |

### Nova ordem sugerida das seções (aplicando o ritmo)

1. **Hero** (caixões, vídeo com scroll) — tela cheia
2. **Manifesto** em rosa-pétala — coluna de texto
3. **Respiro:** frame das asas de fogo (1:11) em tela cheia
4. **As quatro** — uma personagem por tela, no modelo da página de personagem
5. **Respiro:** grupo saindo da explosão (1:33) em tela cheia
6. **Capítulos** — pilha de cards grandes, um por fase
7. **Coração** — interlúdio
8. **Assista ao clipe** — bloco de vídeo em tela cheia com play no centro
9. **Rodapé** compacto

### O que NÃO trazer
- Logo, textos, fontes "ArtDeco" e imagens da Rockstar.
- O layout literal da home (o nosso continua sendo uma história em scroll, não uma página de vendas).
- Botão "Comprar" e qualquer elemento comercial: o projeto é de fã e gratuito.
