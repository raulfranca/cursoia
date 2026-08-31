# Design system — índice de consulta

**Como usar este arquivo.** Ele é o único ponto de entrada do `design/`. Resolve sozinho a
maioria das tarefas: as regras da marca, os nomes de todos os tokens, a API de todos os
componentes e o vocabulário de classe CSS estão aqui. Só abra outro arquivo quando a tabela
da seção 6 mandar. **Nunca varra `design/` inteiro** — são mais de 150 arquivos e ~6 MB.

Contexto da marca (por que o sistema é assim, origem das ilustrações, caveats) fica em
`design/readme.md`. Leia só se a tarefa for *sobre* a identidade, não para executar com ela.

---

## 1. Regras inegociáveis

Valem em qualquer superfície — site, e-mail, slide, protótipo. Violar isso é erro, não estilo.

- **Papel e tinta, cor é acontecimento.** Alvo por tela: ~85% papel + tinta, ~10% um acento,
  ~5% o segundo. Se o layout parece colorido, está errado.
- **Zero gradiente.** O sistema não tem nenhum. Precisa de contraste sobre imagem? Cápsula
  sólida de papel ou tinta — nunca véu degradê.
- **Fundo sólido.** Sem padrão repetido, sem grão, sem ruído. A textura vem do traço do PNG.
- **Sombra é desenhada**, `4px 4px 0 0` de tinta. Blur real só em hover de card
  (`--shadow-soft`) e toast/popover (`--shadow-lift`). Modal é o único `backdrop-filter`.
- **Botão é pílula, sempre.** Card 14px, campo 8px.
- **Caixa de sentença em tudo** — título, botão, badge, menu. Nunca Title Case. A única caixa
  alta é o eyebrow, e vem do CSS: escreva "O programa" no código.
- **Emoji: nunca.** Ícone é Lucide. Unicode como ícone: nunca (exceção técnica: `✓` em e-mail).
- **Ilustração entra crua.** Sem `mix-blend-mode`, sem filtro, sem recorte de rosto, sem texto
  por cima. O creme do PNG já é `--paper-1`.
- **Foco é terracota** (`2px solid`, `outline-offset:2px`), nunca o azul do navegador.
- **Hover escurece ou tinge**, nunca opacidade, nunca clarear.
- **Movimento discreto.** Uma curva só (`--ease-out`). Sem bounce, spring, parallax ou
  scroll-reveal. Nada gira, nada pulsa.
- **Duas colunas assimétricas** (1.05fr / .95fr) é o padrão. Nunca 50/50 exato.

**Texto (pt-BR sempre).** Fale com *você* (professora, singular); sobre a marca, *a gente*.
Feminino como default, sem "@"/"x"/"(a)". Números concretos e verificáveis ("4 semanas",
"R$ 390") — nunca "centenas de". Botão = verbo de quem clica ("Quero participar"), nunca
"Saiba mais". Título = frase com verbo, sem dois-pontos de palestra. Parágrafo de 1–3 frases.
Nada de inglês decorativo — "prompt" é a única palavra emprestada aceita.

---

## 2. Tokens — lista completa

Definidos em `design/tokens/*.css` e expostos por `design/styles.css`. **Os nomes abaixo são a
lista inteira; não abra os arquivos de token só para conferir um nome.**

### Cor — paleta base
```
--paper-0 #FBF9F2   --paper-1 #F4F1E7   --paper-2 #EDE8DA   --paper-3 #E3DCC9
--ink-0 #000000  --ink-1 #14130E  --ink-2 #3D3A31  --ink-3 #6B675B  --ink-4 #9C978A
--ink-5 #C9C4B4  --ink-wash #D6D2C6
--lousa-700 #224035  --lousa-600 #2E574A  --lousa-500 #35604F  --lousa-300 #8FAEA2  --lousa-100 #DDE7E1
--terracota-600 #A6432C  --terracota-500 #C2543A  --terracota-300 #E0A292  --terracota-100 #F6E3DC
--ocre-600 #B87F1B  --ocre-500 #E0A02E  --ocre-300 #EFCE8C  --ocre-100 #FAEED4
--caneta-600 #22406B  --caneta-500 #2C4C7C  --caneta-300 #93A8C4  --caneta-100 #DEE5EF
```
Papel de fundo · tinta de texto e traço (`--ink-0` só para ilustração e régua de piso; texto usa
`--ink-1`) · **lousa** = primário, único verde · **terracota** = caneta de correção, nunca em área
grande · **ocre** = giz, um por tela · **caneta** = só informação neutra.

### Cor — aliases semânticos (prefira estes no código)
```
--bg-canvas --bg-sheet --bg-band --bg-sunken --bg-inverse --bg-brand --bg-brand-soft
--text-body --text-muted --text-caption --text-disabled --text-on-inverse --text-on-brand
--text-brand --text-link --text-link-hover
--line-hairline --line-strong --line-soft
--surface-card --surface-card-alt --surface-field
--accent-primary --accent-secondary --accent-highlight --accent-info
--status-success --status-success-bg --status-warning --status-warning-bg
--status-danger --status-danger-bg --status-info --status-info-bg
--focus-ring
```

### Tipografia
```
--font-display  Bricolage Grotesque   (display, sempre 600, track -.02/-.03em)
--font-body     Instrument Sans       (corpo, base 17px)
--font-hand     Caveat                (nota à mão, raríssimo)
--font-mono     JetBrains Mono        (eyebrow caixa alta, metadado, prompt)

--size-2xs 12  --size-xs 13  --size-sm 15  --size-md 17  --size-lg 20  --size-xl 25
--size-2xl 31  --size-3xl 39  --size-4xl 49  --size-5xl 61  --size-6xl 76
--lh-tight 1.06  --lh-snug 1.18  --lh-normal 1.35  --lh-relaxed 1.55  --lh-loose 1.7
--weight-light/regular/medium/semibold/bold   --track-tight/snug/normal/wide/caps

atalhos: --text-display --text-h1 --text-h2 --text-h3 --text-lead --text-base
         --text-small --text-caption-font --text-eyebrow --text-note
```
Mínimos: **13px** em tela, **22px** em slide, **12pt** impresso.

### Espaço, medida, contêiner
```
--space-0..13  = 0 4 6 8 12 16 20 24 32 40 56 72 96 128
--gutter(24) --section-y(96) --section-y-tight(56) --card-pad(24) --card-pad-lg(32)
--stack-tight(8) --stack(16) --stack-loose(32)
--measure-narrow 34ch  --measure 62ch  --measure-wide 78ch
--container 1120px  --container-wide 1320px  --container-prose 680px
```

### Raio, borda, sombra, movimento
```
--radius-0/sm(4)/md(8)/lg(14)/xl(22)/pill   --radius-card(14) --radius-field(8) --radius-button(pill)
--border-hairline 1px  --border-ink 1.5px  --border-heavy 2px
--shadow-none --shadow-line --shadow-ink-sm --shadow-ink --shadow-ink-brand --shadow-soft --shadow-lift
--dur-instant 80 --dur-fast 140 --dur-base 220 --dur-slow 380
--ease-out cubic-bezier(.22,.61,.36,1)   --ease-in-out   --ease-draw   --transition-ui
```

---

## 3. Componentes React — 23

Cada um tem `.jsx`, `.d.ts` e `.prompt.md` em `design/components/<grupo>/`. A coluna **Props**
já é a assinatura útil; abra o `.prompt.md` (todos ≤ 1 KB) só quando precisar de exemplo de uso
ou de nuance de quando aplicar.

| Componente | Grupo | Props principais |
|---|---|---|
| `Icon` | core | `name` (slug Lucide), `size` (px, default 20) |
| `Button` | core | `variant` primary·secondary·ghost·**ink**, `size` sm·md·lg, `icon`, `iconRight`, `block`, `as`, `href` |
| `IconButton` | core | `icon`, `label` (obrigatório), `variant` outline·solid·bare, `size` |
| `Badge` | core | `tone` brand·warning·danger·info·neutral·outline, `icon` |
| `Tag` | core | `selected`, `onSelect`, `onRemove`, `icon` |
| `Card` | core | `variant` default·band·**ink**·flat, `interactive`, `media`, `mediaHeight`, `footer` |
| `Tabs` | core | `items[{id,label,disabled}]`, `value`, `onChange` |
| `Input` | forms | `label`, `hint`, `error`, `required`, `multiline` (+ props de `<input>`) |
| `Select` | forms | `label`, `hint`, `error`, `options[]`, `placeholder` |
| `Checkbox` | forms | `checked`, `onChange(bool)`, `disabled` |
| `Radio` | forms | `checked`, `onChange(value)`, `name`, `value` |
| `Switch` | forms | `checked`, `onChange(bool)`, `disabled` |
| `Callout` | feedback | `tone` brand·warning·danger·info, `icon` (default lightbulb, `null` omite), `title` |
| `Dialog` | feedback | `open`, `title`, `onClose`, `actions` |
| `Toast` | feedback | `tone` success·danger·info, `icon`, `onClose` |
| `Tooltip` | feedback | `label`, `placement` top·bottom, `open` |
| `SectionHeading` | brand | `eyebrow`, `title`, `lead`, `align` left·center |
| `Stat` | brand | `value`, `label`, `variant` plain·rule |
| `ModuleCard` | brand | `index`, `title`, `description`, `duration`, `format`, `done` |
| `Quote` | brand | `name`, `role`, children |
| `Illustration` | brand | `src`, `alt`, `variant` plain·framed·**ink**, `caption` |
| `Checklist` | brand | `items[]`, `icon` (default check) |
| `HandNote` | brand | `tone` default·brand·accent |

**Um por tela, no máximo:** `Button variant="ink"`, `Card variant="ink"`, `HandNote`.
**Nunca em e-mail:** `HandNote` (o fallback da Caveat quebra o tom).

Peças autorais deste produto (não são genéricas): `ModuleCard` (curso é lista de módulos
numerados), `Checklist` ("o que você vai aprender" aparece em toda superfície), `HandNote`.

**Ícones Lucide já usados no sistema** — procure aqui antes de escolher outro:
`arrow-right` `play` `play-circle` `check` `check-circle` `x` `chevron-down` `chevron-left`
`clock` `calendar` `download` `bookmark` `video` `award` `users` `file-text` `file-check`
`pen-line` `book-open` `clipboard-list` `presentation` `messages-square` `repeat` `lightbulb`
`info` `alert-triangle` `alert-circle` `shield-alert` `undo-2` `settings` `folder` `radio`
`more-horizontal` `hash` `send`.
Tamanhos: 12 (badge) · 14–16 (inline/tag) · 17–19 (botão/menu) · 22 (callout) · 28+ (destaque).
Nunca meio-pixel. Cor sempre herdada (`currentColor` via `mask-image`).

---

## 4. Classes CSS — para HTML puro, slide e e-mail (sem React)

Definidas em `design/components/components.css` (183 linhas), importado por `design/styles.css`.
Prefixo `iap-`. **Este é o vocabulário inteiro — não invente classe fora desta lista.**

```
btn        .iap-btn + --primary --secondary --ghost --ink --sm --md --lg --block
iconbtn    .iap-iconbtn + --solid --bare --sm --md --lg
badge      .iap-badge + --brand --warning --danger --info --neutral --outline
tag        .iap-tag + --interactive .is-selected  · __remove
card       .iap-card + --band --ink --flat --interactive · __media __body __footer
tabs       .iap-tabs · .iap-tab .is-active
campo      .iap-field .is-invalid · .iap-label __req · .iap-input .iap-textarea
           .iap-select .iap-select-wrap · .iap-hint --error
check      .iap-check .is-checked .is-disabled · __box
radio      .iap-radio .is-checked .is-disabled · __dot
switch     .iap-switch .is-on .is-disabled · __track __knob
callout    .iap-callout + --brand --warning --danger --info · __icon __title __body
dialog     .iap-overlay · .iap-dialog · __head __title __body __foot
toast      .iap-toast + --success --danger --info · __text __close
tooltip    .iap-tooltip · __bubble --bottom
marca      .iap-section-heading --center · __title __lead
           .iap-stat --rule · __value __label
           .iap-module .is-done · __num __title __desc __meta
           .iap-quote · __text __who
           .iap-illo --framed --ink · __caption
           .iap-checklist · __item __mark
           .iap-note --brand --accent
utilitário .iap-eyebrow  .iap-icon
```

**E-mail HTML não usa classe nem `var()`** — clientes não suportam. Escreva o hex literal do
token, tabelas `role="presentation"` de 600px, tudo inline. Regras completas em
`design/ui_kits/email/README.md`.

---

## 5. Peças prontas para copiar

Antes de compor do zero, veja se já existe. Copie o arquivo e troque o texto.

| Preciso de | Copie |
|---|---|
| Landing/página de venda | `design/templates/landing-curso/LandingCurso.dc.html` |
| E-mail (3 modelos) | `design/ui_kits/email/boas-vindas.html` · `aula-da-semana.html` · `convite-turma.html` |
| Slide (7 tipos) | `design/slides/01-capa.html` … `07-encerramento.html` |
| Deck de 5 slides pronto | `design/templates/deck-aula/DeckAula.dc.html` |
| Site navegável de referência | `design/ui_kits/curso-site/index.html` (React, 4 telas) |
| Ilustração | `design/assets/illustrations/professora-no-laptop.png` · `professora-tem-ideias.png` · `atividade-em-sala.png` · `montando-robo.png` (1344×768) |

**Não existe logotipo.** A assinatura é tipográfica: "IA para Professores" em Bricolage
Grotesque 600, duas linhas, `letter-spacing:-.03em`. Espécime em
`design/guidelines/brand-wordmark.html`.

Ao copiar um template para fora de `design/`, ajuste a linha `base` do `ds-base.js` que
acompanha a pasta — é a única linha que aponta para o sistema.

---

## 6. Onde ler mais — roteamento

| Se a tarefa for | Abra |
|---|---|
| Usar um componente com nuance / ver exemplo | `design/components/<grupo>/<Nome>.prompt.md` (≤1 KB) |
| Ver a implementação real de um componente | `design/components/<grupo>/<Nome>.jsx` |
| Conferir uma classe CSS exata | `design/components/components.css` |
| Entender *por que* a marca é assim, tom de voz completo, caveats | `design/readme.md` |
| Montar um deck | `design/slides/README.md` |
| Montar um e-mail | `design/ui_kits/email/README.md` |
| Ver um espécime visual (cor, tipo, espaço, marca) | `design/guidelines/*.html` — 25 cards |
| Valor exato de um token que não está na seção 2 | `design/tokens/<arquivo>.css` |

`design/_ds_bundle.js` e `design/_ds_manifest.json` são artefatos compilados do sistema
(bundle React + manifesto de cards). Servem às demos e aos templates — **não edite à mão**.
