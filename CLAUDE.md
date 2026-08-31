# cursoia — Curso de IA para Professores

Repositório do curso de introdução à IA para a rede municipal de Pindamonhangaba.
Publicado por GitHub Pages a partir da raiz: <https://raulfranca.github.io/cursoia/>.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | **Não existe no momento.** A landing da turma 2026 ainda não foi escrita. |
| `old/index.html` | Landing do piloto de 2025 ("Sua Rotina Mais Leve na Escola"), arquivada. Referência de conteúdo, não de forma. |
| `design/` | **Design system da marca — referência, não código de produção.** Ver abaixo. |
| `work/` | Conteúdo do curso (tópicos, ementa). Tem `CLAUDE.md` próprio. **Não versionado** (`.gitignore`). |

**Atenção:** sem `index.html` na raiz, o GitHub Pages responde 404. O site fica fora do ar até
a nova landing ser publicada — é uma situação conhecida e intencional, não um bug a corrigir
por conta própria.

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

**Estado atual:** a landing arquivada em `old/index.html` usa Tailwind CDN, fonte Inter e
paleta azul — foi feita antes do design system e **não segue a marca**. Não a use como
referência visual nem copie o CSS dela. Ela serve como fonte de *conteúdo* (estrutura de
seções, textos, links de formulário, tag do Google Analytics `G-GS6YNMGLZ9`). A landing nova
deve ser composta a partir de `design/templates/landing-curso/LandingCurso.dc.html` e dos
tokens do sistema.

## Escrita

Português do Brasil em tudo (código, commits, conteúdo). Tom direto, frases curtas, sem emoji.
As regras completas de voz da marca estão na seção 1 de `design/INDEX.md`; as regras de
conteúdo pedagógico do curso estão em `work/CLAUDE.md`.
