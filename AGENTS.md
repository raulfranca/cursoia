# cursoia — Curso de IA para Professores

Repositório do curso de introdução à IA para a rede municipal de Pindamonhangaba.
Publicado por GitHub Pages a partir da raiz: <https://raulfranca.github.io/cursoia/>.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Landing da turma 2026, no ar. Arquivo único: CSS e sprite de ícones SVG inline. |
| `old/index.html` | Landing do piloto de 2025 ("Sua Rotina Mais Leve na Escola"), arquivada. Referência de conteúdo, não de forma. |
| `design/` | **Design system da marca — referência, não código de produção.** Ver abaixo. |

**Deploy:** o GitHub Pages republica a raiz da `main` a cada push. Não há build nem dependência
a instalar — editar `index.html` e empurrar é o fluxo inteiro.

**Este repositório é público.** Nada de dado pessoal de professor inscrito, planilha de
inscrição ou credencial entra aqui — nem sequer não-commitado na pasta, porque um `git add .`
distraído publica para sempre.

## O outro repositório

O conteúdo do curso mudou de casa. O que era `work/` agora vive em
`C:\Dev\curso-ia-ava` (repositório **privado** `curso-ia-ava`): tópicos, ementa, dados de
inscrição e o CLI que opera o Google Sala de Aula. Este repositório aqui é só a landing.

Os dois abrem juntos no VSCode pelo workspace `C:\Dev\curso-ia.code-workspace`. São
repositórios independentes: cada um tem seu próprio commit e seu próprio push, e não existe
merge entre eles.

Quando um título ou subtítulo de tópico muda, a fonte canônica é
`curso-ia-ava/conteudo/curso-topicos.md` — a landing deriva dele, nunca o contrário.

## Design — como consultar

`design/` é a identidade visual completa da marca "IA para Professores": tokens, 23
componentes React, classes CSS, ilustrações, templates de landing/e-mail/slide e 25 cards de
espécime. Está aqui **só para consulta** — nada em `design/` é build ou dependência do site.

**Regra de leitura:**

1. Qualquer tarefa de design, UI, layout, cor, tipografia, texto de marca, e-mail ou slide
   começa lendo **`design/INDEX.md`** — e só ele.
2. `design/INDEX.md` resolve a maioria dos casos sozinho: traz as regras inegociáveis, a lista
   completa dos tokens, a API dos 23 componentes e todo o vocabulário de classe CSS.
3. Precisa de mais? A seção 6 do índice diz exatamente qual arquivo abrir. Abra **esse**
   arquivo, não a pasta.
4. **Nunca varra `design/` inteiro** e não leia `design/readme.md` por padrão — são mais de
   150 arquivos, ~6 MB, e o readme é contexto de origem da marca, não instrução de execução.
   Ele só vale quando a tarefa for *sobre* a identidade (por que a marca é assim, caveats).

**Atalho para acertos rápidos**, sem abrir nada: papel creme + tinta preta, ~85% da tela;
verde lousa `#35604F` é o primário; terracota `#C2543A` e ocre `#E0A02E` são acentos pontuais;
zero gradiente; sombra é `4px 4px 0` sólida, não difusa; botão é pílula; caixa de sentença em
tudo; sem emoji. Se o layout parece colorido, está errado.

**Estado atual:** a landing da raiz segue a marca — tokens do sistema, Bricolage Grotesque e
Instrument Sans, classes `iap-*` para os componentes e `pg-*` para o que é só dela. Mexer nela
é editar CSS inline; não há Tailwind. Ao acrescentar seção ou componente, reaproveite o
vocabulário `iap-*` que já está no arquivo antes de inventar classe nova.

A landing arquivada em `old/index.html` é outra história: Tailwind CDN, fonte Inter e paleta
azul, feita antes do design system e **fora da marca**. Não a use como referência visual nem
copie o CSS dela. Vale como fonte de *conteúdo* (estrutura de seções, textos, links de
formulário, tag do Google Analytics `G-GS6YNMGLZ9`, hoje também na landing nova).

## Escrita

Português do Brasil em tudo (código, commits, conteúdo). Tom direto, frases curtas, sem emoji.
As regras completas de voz da marca estão na seção 1 de `design/INDEX.md`; as regras de
conteúdo pedagógico do curso estão no repositório `curso-ia-ava`, em `AGENTS.md`.
