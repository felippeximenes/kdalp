# Seleção de frames do clipe · etapa 1 (imagens reais)

> Escolhidos a partir das folhas de contato extraídas do clipe em 4K (18/nov).
> Recortes: retratos 3:4, capítulos e extras 16:9. Nenhum frame tem logo ou texto "K/DA".
> Fonte: clipe oficial em 4K, fora do repositório (C:\Users\felip\Videos\kda\firestarter.mp4). Nunca versionar o clipe.

## Retratos (As quatro)

| Slot | Timestamp | Recorte 3:4 | Motivo |
|---|---|---|---|
| retrato-ahri | 1:37.56 (97.56 s) | centrado no rosto | Close frontal e simétrico com visor felino e marcas de bigode. |
| retrato-akali | 1:39.19 (99.19 s) | centrado no rosto | Chapéu de pelo e visor espelhado, rosto inteiro e nítido. |
| retrato-kaisa | 1:38.59 (98.59 s) | centrado no rosto, incluindo o choker | Close com visor e choker de anéis vermelhos. |
| retrato-evelynn | 0:56.12 (56.12 s) | rosto à esquerda no quadro original; centralizar o rosto no recorte | Close com óculos roxos e cabelo platinado. |

A confirmar: o close de 1:38.0–1:38.3 (cabelo preto com mechas vermelhas, visor arredondado). Se for a Evelynn, trocar o retrato dela por 1:38.09 (98.09 s). Até lá, vale o 0:56.12.
Alternativas: Kai'Sa sem visor em 1:41.57 (101.57 s); Kai'Sa neon em 1:45.42 (105.42 s).
Recorte dos retratos: altura inteira do quadro, centrado no rosto (x = 1268 na Akali, 1308 nas outras).

## Capítulos (16:9)

| Slot | Timestamp | Motivo |
|---|---|---|
| cap1-velorio | 0:10 (10 s) | Mesmo quadro do início do hero (`assets/hero/frames-referencia/inicio.png`, 4K), com as letras da faixa da coroa removidas. Substitui o 0:24.5, que era borrado. |
| cap2-ignicao | 1:11.25 (71.25 s) | Ahri no centro das asas de fogo. |
| cap3-cosmos | 1:49.69 (109.69 s) | Kai'Sa em neon no cosmos, com as fitas de energia. |
| cap4-coroacao | 2:27.28 (147.28 s) | As quatro sob confete, rostos nítidos. |
| cap5-fogo-final | 3:08.81 (188.81 s) | Retrato do grupo em vermelho monocromático. |

## Extras

| Slot | Timestamp | Uso |
|---|---|---|
| rodape-negativo | 3:08.94 (188.94 s) | Mesmo retrato em negativo azul e rosa, para o hover do rodapé. |
| capa-clipe | 1:33.65 (93.65 s) | As quatro saindo da explosão rosa. Capa do embed. |
| manifesto-fundo | 0:42.64 (42.64 s) | Fumaça violeta e fagulhas. Usar escurecido atrás do texto. |
| ignicao-olhos (opcional) | 1:11.75 (71.75 s) | Close dos olhos da Ahri. Detalhe dentro do capítulo II. |

## Formato de saída

- O clipe é mais largo que 16:9 (3840×1632). Nos capítulos e extras, recortar 16:9 do centro, ou do ponto de interesse quando ele não estiver no centro.
- AVIF + WebP. Capítulos e extras: 640, 1280 e 1920 px de largura. Retratos: 480, 960 e 1200 px de largura (recorte 3:4 com a altura inteira do 4K, 1224×1632, para não cortar o topo da cabeça; 1200×1600 no maior, sem ampliação).
- Meta: ~150 KB no tamanho maior.
