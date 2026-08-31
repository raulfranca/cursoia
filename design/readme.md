# IA para Professores — Design System

Identidade visual e biblioteca de UI para um **curso de inteligência artificial para professores**
(conteúdo em português do Brasil). Serve e-mails HTML, páginas estáticas, slides e protótipos.

## Fontes deste sistema

Tudo aqui foi derivado de **quatro ilustrações** enviadas pelo cliente. Não havia código,
Figma, site publicado, logotipo, deck nem guia de marca anterior.

A pasta `uploads/` com os arquivos originais foi removida do repositório: era duplicata byte a
byte de `assets/illustrations/`. A tabela abaixo fica só como registro da origem.

| Arquivo original (não versionado) | Neste projeto |
|---|---|
| `uploads/professora no laptop.png` | `assets/illustrations/professora-no-laptop.png` |
| `uploads/professora tem ideias.png` | `assets/illustrations/professora-tem-ideias.png` |
| `uploads/professora na atividade robo anotando.png` | `assets/illustrations/atividade-em-sala.png` |
| `uploads/montando robo.png` | `assets/illustrations/montando-robo.png` |

Consequências honestas dessa origem única:

- **Não existe logotipo.** Nenhum foi fornecido e nenhum foi inventado. Onde entraria uma marca,
  o sistema escreve **IA para Professores** em Bricolage Grotesque semibold, duas linhas,
  `letter-spacing:-.03em`. Ver `guidelines/brand-wordmark.html`.
- **As fontes são substituições.** Ver "Tipografia" abaixo.
- **Os produtos (site, e-mail, slides) são composições novas**, não recriações de telas
  existentes. São referência de ritmo e densidade, não cópia.

## Sobre o produto

Uma formação curta e prática (4 semanas, encontros de 45 min, ao vivo com gravação) para
professores da educação básica. A promessa não é "aprender IA": é sair de cada encontro com
**um material utilizável na aula seguinte** — plano de aula, atividade adaptada, rubrica,
combinados de uso na escola. O público é majoritariamente feminino, com pouco tempo e
alguma desconfiança de ferramenta nova — as ilustrações mostram exatamente isso: uma
professora trabalhando sozinha no laptop, uma professora conduzindo a turma, o robô como
um ajudante pequeno que anota, nunca como protagonista.

Superfícies previstas: site do curso (venda + área do aluno), e-mails transacionais e de
campanha, slides de aula, materiais para baixar.

---

## CONTENT FUNDAMENTALS

**Idioma.** Português do Brasil, sempre. Nada de inglês decorativo ("insights", "framework",
"AI-powered"). "Prompt" é a única palavra emprestada aceita, porque já é o termo que o público usa.

**Pessoa.** Fale com **você** (professora, no singular). Sobre a marca, use **a gente** —
"a gente parte de uma situação real de sala". Evite "nós" (formal demais) e evite a voz
institucional sem sujeito ("serão abordados os temas").

**Gênero.** O público é majoritariamente de professoras e o material assume o feminino como
default natural ("Bem-vinda à turma de março", "Você não precisa virar programadora"). Não use
"@", "x" nem "(a)". Quando o texto for para um grupo misto, prefira formas neutras
("quem dá aula", "docentes", "a turma").

**Tom.** Prático, adulto, sem entusiasmo forçado. A marca respeita o tempo de quem lê e
reconhece o ceticismo em vez de combatê-lo. Três coisas que ela nunca faz: prometer revolução,
chamar a IA de mágica, e fingir que a decisão pedagógica pode ser terceirizada.

Exemplos reais do sistema:

> **IA que cabe na sua aula de segunda-feira**
> Você não precisa virar programadora. Precisa de quatro semanas, um caderno e uma turma real para testar.

> **Não é um curso de ferramenta.** A gente não ensina a clicar em botão. Ensina a pedir bem,
> ler com desconfiança e decidir o que entra na sua aula.

> **Onde ela ajuda, onde ela erra.**

**Caixa.** Sentença em tudo — títulos, botões, badges, itens de menu. **Nunca** Title Case.
A única caixa alta do sistema é o *eyebrow* em mono (`O PROGRAMA`, `SEMANA 03 · AO VIVO`),
e ela vem do CSS: escreva "O programa" no código.

**Números.** Sempre concretos e verificáveis: "4 semanas", "45 min", "R$ 390", "+1.200
professores formados", "9 de março, 19h30". Nunca "centenas de", "milhares de", "muito mais rápido".

**Botões.** Verbo na primeira pessoa de quem clica, curto: "Quero participar",
"Garantir minha vaga", "Entrar na sala", "Baixar o guia". Nunca "Saiba mais", "Clique aqui",
"Enviar".

**Títulos.** Frase completa, com verbo, sem dois-pontos de palestra. Bom: "Você sai com material
pronto, não com teoria". Ruim: "Benefícios: produtividade e personalização".

**Cuidado ético é conteúdo, não rodapé.** Quando o assunto for dados de aluno, o texto é
direto e específico, sem juridiquês: "Nada de nome completo, nota ou laudo de aluno em
ferramenta aberta."

**Emoji.** Fora de comunicação de marca — nenhum em site, e-mail, slide ou botão. Aparecem no
máximo dentro de uma nota à mão informal (`HandNote`), que já é um recurso raro. Como marcadores
de lista, ícones ou substitutos de bullet: nunca. O sistema usa ícones Lucide para isso.

**Comprimento.** Parágrafo de site: 1–3 frases. Callout: até 3 frases. Item de checklist:
uma linha, começando por verbo no infinitivo. Legenda: até 12 palavras.

---

## VISUAL FOUNDATIONS

### A ideia central
As ilustrações são **traço monolinha preto sobre papel creme**, sem preenchimento colorido —
só o cabelo é chapado de preto e algumas manchas cinza de tinta. O sistema inteiro é uma
extensão disso: **papel, tinta, e o mínimo de cor possível**. Cor é acontecimento, não
ambiente. Se um layout parece colorido, ele está errado.

### Cor
- **Papel** (`--paper-0..3`, `#FBF9F2 → #E3DCC9`): o fundo de tudo. `--paper-1` (`#F4F1E7`) é
  exatamente o creme das ilustrações, então elas se fundem no fundo sem moldura.
- **Tinta** (`--ink-0..5`, `#000000 → #C9C4B4`): texto e traço. `--ink-0` (preto puro) é
  reservado às ilustrações e às réguas de "piso"; texto usa `--ink-1` (`#14130E`).
- **Verde lousa** (`--lousa-500 #35604F`): o primário. Ações principais, confirmação, marcadores
  de checklist, fundo de abertura de seção. É o único verde do sistema.
- **Terracota** (`--terracota-500 #C2543A`): a caneta de correção. Eyebrows, link em hover,
  régua da citação, aba ativa, erro. Nunca em área grande.
- **Ocre** (`--ocre-500 #E0A02E`): giz amarelo. O botão "adesivo" (`variant="ink"`), realce,
  anel de foco, atenção. Um por tela.
- **Azul caneta** (`--caneta-500 #2C4C7C`): só informação neutra/contexto.
- **Proporção alvo por tela:** ~85% papel + tinta, ~10% um acento, ~5% o segundo. Nada de
  gradiente — o sistema **não tem nenhum gradiente**, nem de proteção. Onde texto precisa
  contraste sobre imagem, use uma cápsula sólida (papel ou tinta), nunca um véu degradê.

### Tipografia
Nenhum arquivo de fonte foi fornecido. **Substituições do Google Fonts** (sinalizado — ver
"Caveats" no fim):
- **Bricolage Grotesque** — display. Grotesca com irregularidades deliberadas nas terminações;
  é o que mais se aproxima do traço desenhado à mão sem virar fonte "fofa". Sempre semibold (600),
  `letter-spacing` de −0.02em a −0.03em, `line-height` 1.02–1.18.
- **Instrument Sans** — corpo. Humanista, calorosa, alta legibilidade em 17px. Regular/medium/semibold.
- **Caveat** — nota à mão, uso raríssimo (`HandNote`).
- **JetBrains Mono** — eyebrow em caixa alta, metadados, blocos de prompt.
Escala 1.25 sobre base 17px (`--size-2xs 12` … `--size-6xl 76`). Mínimos: 13px em tela,
22px em slide, 12pt em impresso.

### Espaçamento e layout
Base de 4px com meio-passo de 6px (`--space-2`), porque os fios de 1px pedem folgas ímpares.
Padding de card 24px; pilha padrão 16px; seção vertical 96px (`--section-y`). Contêiner de
1120px, prosa em 680px, medida de leitura 62ch. Layout é de coluna larga e generosa —
duas colunas assimétricas (1.05fr / .95fr) é o padrão do sistema, nunca 50/50 exato.
Elementos fixos: só o cabeçalho do site (`position:sticky`) e o resumo de compra na inscrição.
Sem barra flutuante de CTA, sem banner de cookie desenhado.

### Fundos, imagens e textura
Fundos são **sólidos** — papel, verde lousa ou tinta. Sem padrões repetidos, sem grão, sem
ruído sintético (a textura vem do próprio traço das ilustrações). As ilustrações entram de
três formas: sangrando no papel (`variant="plain"`), com fio de cabelo (`framed`), ou com
borda de tinta + sombra desenhada (`ink`, só para o herói). Os PNGs já vêm com o creme
exato de `--paper-1`, então entram **sem tratamento nenhum** — nada de `mix-blend-mode`
(multiply sobre papel escurece o creme e cria um retângulo visível). Sobre fundo diferente do
papel, não force o encaixe: coloque a arte dentro de um bloco de `--paper-1`. **Nunca** recorte
rostos, aplique filtro de cor, inverta para negativo, nem coloque texto sobre a arte.

### Bordas, cantos e sombras
- Três larguras: 1px `--line-hairline` (o padrão, cinza), 1.5px `--border-ink` (tinta, para
  o que precisa ser pego), 2px `--border-heavy` (aba ativa, régua de citação).
- Cantos: 4 / 8 / 14 / 22px e pílula. Card = 14px. Campo = 8px. Botão = pílula, sempre.
- **Sombra é desenhada, não difusa:** `--shadow-ink` é `4px 4px 0 0` de tinta sólida — um
  deslocamento, como um contorno duplo à mão. Blur real só em duas situações: `--shadow-soft`
  no hover de card interativo e `--shadow-lift` em toast/popover. Modal usa
  `backdrop-filter: blur(2px)` sobre `rgba(20,19,14,.42)` — o único blur e a única
  transparência do sistema.

### Cards
Papel `--paper-0`, fio de cabelo de 1px, canto de 14px, **sem sombra em repouso**. Variantes:
`band` (papel mais escuro, quando o card senta sobre papel claro), `ink` (borda 1.5px de tinta
+ sombra desenhada de 4px — no máximo um por tela: módulo destacado, preço), `flat` (canto zero).
Card interativo ganha borda de tinta + `--shadow-soft` no hover e desce 1px no press.

### Estados
- **Hover:** escurece o fundo em um passo (`lousa-500 → 600`) ou tinge o papel
  (`transparent → paper-2`). Link muda de verde lousa para terracota. Nunca opacidade,
  nunca clarear.
- **Press:** `translateY(1px)`. No botão "adesivo", a sombra desenhada colapsa e o botão
  desce 2px — o botão literalmente se encosta no papel.
- **Focus:** `2px solid --terracota-500` com `outline-offset:2px`; em campos, borda de tinta
  + anel `0 0 0 3px --ocre-100`. Nunca o azul padrão do navegador.
- **Disabled:** fundo `--paper-3`, texto `--ink-4`, sem sombra. Sem opacidade global.
- **Seleção de texto:** `--ocre-300` — como marca-texto.

### Movimento
Discreto e curto. `--dur-fast 140ms` para estados de UI, `--dur-base 220ms` para entrada de
modal e knob de switch, `--dur-slow 380ms` só para o raro. Curva única: ease-out
`cubic-bezier(.22,.61,.36,1)`. **Sem bounce, sem spring, sem parallax, sem scroll-reveal.**
Modal entra com fade + 8px de subida. Nada gira, nada pulsa.

---

## ICONOGRAPHY

**Não havia nenhum ícone nas fontes fornecidas** — as ilustrações são desenhos completos,
não um conjunto de glifos. Portanto:

- **Substituição sinalizada: Lucide** (`lucide-static@0.470.0`, via jsDelivr). Escolhido por ser
  monolinha, traço de 2px, cantos levemente arredondados — a família que mais se aproxima do
  traço das ilustrações. Se você tiver um conjunto próprio, troque `CDN` em
  `components/core/Icon.jsx` e nada mais muda.
- **Como são renderizados:** o componente `Icon` aplica o SVG como `mask-image` sobre
  `background-color: currentColor`. Assim o ícone herda a cor do texto e nunca precisa de
  variante colorida. Não há sprite nem fonte de ícones local.
- **Tamanhos:** 12px (badge), 14–16px (inline, tag), 17–19px (botão, item de menu), 22px
  (callout), 28px+ (marca de destaque). Nunca meio-pixel.
- **Cor:** herdada. Ícone decorativo em `--accent-primary`; ícone dentro de texto herda `--ink-2`.
- **Vocabulário usado nos kits:** `arrow-right`, `play`, `check`, `x`, `chevron-down`,
  `chevron-left`, `clock`, `calendar`, `download`, `bookmark`, `video`, `award`, `users`,
  `file-text`, `pen-line`, `book-open`, `clipboard-list`, `file-check`, `presentation`,
  `messages-square`, `repeat`, `lightbulb`, `info`, `alert-triangle`, `alert-circle`,
  `shield-alert`, `check-circle`, `undo-2`, `settings`, `folder`, `play-circle`, `radio`,
  `more-horizontal`, `hash`, `send`.
- **Emoji como ícone: nunca.** **Caracteres unicode como ícone: nunca** — com uma exceção
  técnica, o `✓` nos e-mails HTML, porque `mask-image` não funciona em cliente de e-mail
  (documentado em `ui_kits/email/README.md`).
- **SVG desenhado à mão: nunca.** Se falta um glifo, procure na Lucide antes de inventar.

---

## Índice

### Raiz
| Arquivo | O que é |
|---|---|
| `styles.css` | Entrada única de CSS — só linhas de `@import`. É o arquivo que o consumidor linka. |
| `readme.md` | Este guia. |
| `SKILL.md` | Envelope de Agent Skill, para uso no Claude Code. |
| `thumbnail.html` | Tile do sistema na home. |

### `tokens/`
`fonts.css` (import do Google Fonts) · `colors.css` (paleta base + aliases semânticos) ·
`typography.css` (famílias, escala, papéis) · `spacing.css` (escala, medidas, contêineres) ·
`radii.css` (cantos e larguras de borda) · `elevation.css` (sombras desenhadas) ·
`motion.css` (durações e curvas) · `base.css` (reset e elementos base).

### `assets/illustrations/`
`professora-no-laptop.png` · `professora-tem-ideias.png` · `atividade-em-sala.png` ·
`montando-robo.png` — as quatro ilustrações originais, 1344×768. Único acervo de imagem
da marca. Uso e enquadramento em `components/brand/Illustration.prompt.md`.

### `components/`
Cada componente tem `.jsx`, `.d.ts` e `.prompt.md`; cada pasta tem um card de especímenes.

- **`components/core/`** — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Tabs`
- **`components/forms/`** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **`components/feedback/`** — `Callout`, `Dialog`, `Toast`, `Tooltip`
- **`components/brand/`** — `SectionHeading`, `Stat`, `ModuleCard`, `Quote`, `Illustration`, `Checklist`, `HandNote`
- **`components/components.css`** — estilos de classe dos componentes (importado por `styles.css`)

**Adições intencionais.** Como nenhuma fonte definia inventário de componentes, o conjunto
padrão foi autorado do zero. Três peças não são genéricas e existem por causa deste produto:
`ModuleCard` (o curso é uma lista de módulos numerados), `Checklist` ("o que você vai
aprender" aparece em toda superfície), `HandNote` (traduz a anotação à mão das ilustrações
para tipo). `Icon` existe como invólucro do conjunto substituto de glifos.

### `guidelines/`
25 cards de especímenes que povoam a aba Design System, nos grupos **Colors** (papel, tinta,
lousa, terracota, ocre, caneta, estados, aliases), **Type** (display, corpo, mono, nota à mão,
pareamento), **Spacing** (escala, em uso, medidas, raios, elevação, movimento) e **Brand**
(as quatro ilustrações, assinatura verbal, motivo da régua).

### `ui_kits/`
| Kit | Entrada | O que mostra |
|---|---|---|
| `ui_kits/curso-site/` | `index.html` | Site navegável: início, programa em abas, inscrição com modal e toast, área do aluno |
| `ui_kits/email/` | `index.html` | Três e-mails HTML tabulares de 600px: boas-vindas, aula da semana, convite de turma |

### `templates/`
Pontos de partida que um projeto consumidor copia e edita. Cada pasta traz um `ds-base.js`
que carrega `styles.css` e o bundle — para usar fora deste projeto, ajuste a linha `base`.

| Template | Entrada | O que é |
|---|---|---|
| Landing do curso | `templates/landing-curso/LandingCurso.dc.html` | Página de venda completa, do herói ao rodapé |
| E-mail do curso | `templates/email-curso/EmailCurso.dc.html` | E-mail HTML tabular de 600px |
| Deck de aula | `templates/deck-aula/DeckAula.dc.html` | Cinco slides 1280×720 |

### `slides/`
Sete modelos 1280×720 em HTML puro: capa, abertura de seção, conteúdo, comparação, prompt,
citação, encerramento. Regras do deck em `slides/README.md`.

---

## Caveats

1. **Fontes substituídas.** Bricolage Grotesque, Instrument Sans, Caveat e JetBrains Mono são
   escolhas minhas, não da marca — carregadas do Google Fonts em `tokens/fonts.css`.
   Se houver fontes próprias, envie os arquivos e eu troco os `@font-face` e a escala.
2. **Ícones substituídos.** Lucide via CDN, por não haver conjunto de origem.
3. **Sem logotipo.** Nenhum foi criado. A assinatura é tipográfica.
4. **Site, e-mails e slides são composições novas**, não recriações — não havia produto de
   origem. Números, datas, preços e depoimentos são de exemplo.
