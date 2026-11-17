# Vídeo do hero · os caixões pegam fogo e estouram

> Ferramenta: **Google Flow**. Frames de referência extraídos do clipe em 0:10 e 1:31.
> Atualizado depois da análise dos frames reais.

## O que os frames mostram

- **Início (0:10):** plano aberto e escuro. Os quatro caixões ficam **em pé**, bordô-escuro, com moldura de metal prateado em forma de espinhos e um emblema prateado de naipe em cada um. Os dois das pontas ficam **inclinados para fora**, em leque. Atrás, rosas; na frente, a coroa de lírios rosa com a faixa holográfica. Tudo fica num palco de pedra no alto de uma escadaria larga, com centenas de velas brancas dos dois lados e cortinas escuras formando um triângulo.
- **Fim (1:31):** plano bem mais próximo e frontal. Os quatro caixões ficam retos, iluminados de vermelho, no meio de **chamas 2D chapadas** em rosa, salmão, pêssego e creme, com manchas de sombra bordô. A escadaria some.
- No próprio clipe, **os caixões não estouram**: eles queimam inteiros, e bolas de fogo pintadas (laranja, rosa e creme) explodem ao redor (frames de 91.5 s e 91.54 s).

**Conclusão:** como os dois planos são bem diferentes, o vídeo vai em **duas partes**:
1. **Ignição:** do frame de 0:10 até o frame de 1:31, com a IA criando a aproximação da câmera e o fogo subindo. As duas pontas são reais.
2. **Estouro:** começa no frame de 1:31, e a IA cria os caixões estourando e o fogo tomando a tela.

O último quadro da parte 1 é o mesmo primeiro quadro da parte 2, então a emenda fica invisível.

## Frames escolhidos

| Uso | Arquivo | Motivo |
|---|---|---|
| Início | `inicio_1_10.0s.png` | Os cinco de 0:10 são praticamente iguais; este é o primeiro e o mais nítido. |
| Fim / início da parte 2 | `fim_1_91.375s.png` | É o único de 1:31 sem desfoque de movimento. Os outros têm motion blur. |

**Antes de usar o `inicio_1`: remova o texto da faixa.** A faixa holográfica na coroa tem o logo "K/DA", e a política da Riot não permite usar o logo. No Flow, abra a imagem no editor de imagem (Nano Banana) e peça:

```
Remove only the lettering from the holographic ribbon on the flower wreath.
Keep the ribbon, its holographic color and every other pixel of the image exactly the same.
```

Confira se nada mais mudou (caixões, naipes, velas) antes de seguir.

---

## Configuração no Google Flow

| Ajuste | Parte 1 · Ignição | Parte 2 · Estouro |
|---|---|---|
| Modo | **Frames to Video: First and last** | **Frames to Video: First** |
| Primeiro frame | `inicio_1` (com a faixa limpa) | `fim_1_91.375s.png` |
| Último frame | `fim_1_91.375s.png` | — |
| Modelo | **Veo 3.1 Quality** | **Veo 3.1 Quality** |
| Duração | **8 s** | **8 s** |
| Proporção | **16:9 (paisagem)** | **16:9 (paisagem)** |
| Saídas por prompt | o máximo disponível (4) | o máximo disponível (4) |
| Download | a maior resolução oferecida (1080p, se houver upscale) | idem |

- Use o **Fast** só para testar o prompt rapidamente, e gere a versão final no **Quality**.
- Alternativa: o **Gemini Omni Flash 1.1** também aceita primeiro e último frame e chega a **10 s**. Mais segundos significam mais quadros para o scroll. Vale testar se o Veo ficar curto.
- O áudio que o Veo gera não importa: o hero fica sem som.

---

## Prompt · Parte 1 · Ignição (primeiro + último frame)

```
A slow, smooth cinematic dolly-in from the wide shot of the first frame to the close frontal shot of the
last frame. No cuts. Keep the exact art style of both frames: stylized 3D animation with hand-painted 2D
effects, premium animated music video look.

Scene: a dark gothic cathedral funeral. Four tall coffins stand upright side by side on a stone stage at
the top of a wide stone staircase. They are dark burgundy with ornate silver thorn-shaped metal frames and
a silver card-suit emblem on each one (diamond, spade, heart and a spiked figure emblem). Pink roses behind
them, a wreath of pink lilies in front, hundreds of white candles on tiered stands on both sides, dark
drapes overhead.

Action, in order:
1. Stillness. Candle flames flicker, dust floats in warm candlelight, deep shadows.
2. The camera starts moving forward. The candle flames grow taller and turn pink.
3. Flat, hand-painted 2D flames in pink, coral, peach and cream rise from the floor and the candles and
   spread around the coffins, with dark burgundy shadow shapes inside the fire.
4. The coffins catch the red firelight. As the camera arrives, the two outer coffins straighten upright
   and the four coffins end up facing the camera, matching the last frame exactly.

The coffins stay intact, the emblems stay visible, there are always exactly four coffins.
Fire style: flat, graphic, painted anime-style flame shapes, never realistic fire.
Avoid: people, faces, text, letters, logos, watermarks, extra or missing coffins, realistic fire, daylight,
blue tones, handheld shake, scene changes.
```

## Prompt · Parte 2 · Estouro (só primeiro frame)

```
Static, locked-off frontal camera. No cuts. Continue the exact scene and art style of the first frame:
four tall dark-red coffins with silver thorn-shaped frames and silver card-suit emblems, standing in a sea
of flat, hand-painted 2D flames in pink, coral, peach and cream, with dark burgundy shadow shapes.

Action, in order:
1. The flames roar higher and the coffins tremble. Thin cracks open along the silver frames and bright
   hot-magenta light leaks out.
2. Round, painted fireball puffs in orange, pink and cream burst up between the coffins, like the
   stylized explosions of the reference.
3. The four coffins burst open at the same time: the front panels blow outward and break into dark red
   fragments, with sparks, pink rose petals and violet smoke. A short white flash.
4. Pink and golden painted fire rises from the four open coffins and spreads like a pair of wings until
   it fills the whole frame.

Fire style: flat, graphic, painted anime-style flame shapes, never realistic fire.
Color: hot magenta, blood red, fire pink, coral, peach, cream and gold, with near-black burgundy shadows.
Avoid: people, faces, text, letters, logos, watermarks, extra or missing coffins, realistic fire,
daylight, blue tones, camera movement, scene changes.
```

---

## Resultado da 1ª geração (17/nov · Veo 3.1 Fast, 720p)

O Quality (100 créditos por vídeo) não coube no saldo, então a primeira rodada saiu no **Fast** (20 créditos cada), uma versão por parte. A faixa da coroa foi limpa antes no editor do Flow.

- **Parte 1 · "Camera moving toward four coffins":** boa de 0 a ~6 s. A câmera se aproxima, as velas acendem em rosa e o fogo 2D sobe com os quatro naipes certos. **Problema entre ~6,3 s e 7,5 s:** os caixões das pontas tombam e aparecem dois a mais (seis caixões na tela) antes de chegar ao frame final.
- **Parte 2 · "Coffins burst open with fire":** o estouro acontece e termina com **asas de fogo** rosa e douradas, como pedido. **Problemas:** por volta de 2 s os quatro naipes viram o mesmo símbolo (espadas), e a partir do estouro o estilo fica bem mais "desenho chapado" que o clipe (bolas de fogo e nuvens roxas cartunescas).

**Ajustes para a próxima rodada** (de preferência no Quality), acrescentar aos prompts:

Parte 1:
```
Only the camera moves. The four coffins never fall, never tilt over and never duplicate:
there are exactly four coffins in every frame of the video.
```

Parte 2:
```
Each coffin keeps its own different silver emblem at all times: diamond on the first,
spade on the second, heart on the third, spiked figure on the fourth. Never the same emblem twice.
Keep the soft painterly shading and lighting of the first frame during the explosion,
not a flat cartoon look. No purple clouds.
```

## Resultado da 2ª geração · parte 1 (17/nov · outra conta, Veo 3.1 Fast ×2)

Gerada com o prompt corrigido (frases contra caixões duplicados já incluídas) e a faixa limpa de novo nessa conta.

- **Versão A (escolhida):** quatro caixões do começo ao fim, cada um com seu naipe. Velas ficam rosa por volta de 3 s, o fogo 2D sobe do chão a partir de ~4 s e o vídeo termina igual ao frame de 1:31. Fogo mais orgânico e próximo do clipe.
- **Versão B:** também sem caixões extras, mas por volta de 3,5–4,5 s o fogo vira quatro labaredas idênticas e simétricas, com cara mais de desenho.

Parte 1 resolvida.

## Resultado da 2ª geração · parte 2 (17/nov · terceira conta, Veo 3.1 Fast ×2)

Gerada só com o frame `fim_1` como início e o prompt com as frases de ajuste (naipes travados, sombreado do clipe, sem nuvens roxas).

- **Versão A (escolhida):** os quatro naipes certos até o estouro. Rachaduras magenta (~2 s), nuvens de fogo laranja, rosa e creme saindo dos caixões (~3–4 s), estouro com flash e fragmentos (~5 s) e final com **asas de fogo** rosa, creme e dourado sobre os caixões abertos (~7–8 s). As nuvens de fogo ainda são um pouco mais "desenho" que o clipe, mas sem roxo.
- **Versão B:** estoura antes (~4 s), mas logo depois os caixões aparecem inteiros de novo, o que quebra a lógica, e surgem cinco nuvens em vez de quatro.

As duas partes estão resolvidas: parte 1 versão A + parte 2 versão A.

## Depois de gerar

1. Escolha a melhor versão de cada parte usando o checklist abaixo.
2. Salve como `assets/hero/parte1-ignicao.mp4` e `assets/hero/parte2-estouro.mp4`.
3. Peça ao Claude Code:

```
Junte assets/hero/parte1-ignicao.mp4 e assets/hero/parte2-estouro.mp4 num só vídeo
(removendo o quadro repetido da emenda) e converta em sequência de imagens para o hero com scroll:
- desktop: 180 quadros WebP, 1920px de largura, qualidade 80, em public/hero/desktop/
- mobile: 90 quadros WebP, recorte central 9:16 com 1080px de altura, em public/hero/mobile/
Nomeie 0001.webp, 0002.webp… e me diga o tamanho total de cada pasta.
```

Meta de peso: até ~8 MB no desktop e ~3 MB no mobile.

No scroll, a parte 1 ocupa de 0% a ~50% do hero, e a parte 2 de ~50% a ~90%. A transição em mármore rosa, feita em código, fecha os últimos 10%.

## Checklist de fidelidade

- [ ] Sempre **exatamente quatro** caixões, em pé, na posição dos frames.
- [ ] Os **naipes prateados** continuam visíveis até o estouro.
- [ ] Escadaria, velas, rosas e coroa iguais ao frame de 0:10 no começo.
- [ ] **Nenhum texto ou logo**, inclusive na faixa da coroa.
- [ ] Fogo **2D chapado e pintado**, nas cores do frame de 1:31, nunca fogo realista.
- [ ] A parte 1 termina idêntica ao `fim_1`, e a emenda com a parte 2 não "pula".
- [ ] Nenhum corte de câmera dentro de cada parte.
