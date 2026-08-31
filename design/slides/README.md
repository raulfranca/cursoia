# Modelos de slide

Sete tipos, 1280×720, HTML puro com os tokens do sistema (nenhum React) — copie o arquivo,
troque o texto. Não havia deck de origem: os modelos foram compostos a partir das fundações
deste design system e das quatro ilustrações enviadas.

| Arquivo | Tipo | Fundo |
|---|---|---|
| `01-capa.html` | Capa com ilustração e régua no piso | papel |
| `02-secao.html` | Abertura de seção com numeral gigante | verde lousa |
| `03-conteudo.html` | Lista numerada + ilustração de apoio | papel |
| `04-comparacao.html` | Duas colunas (faz bem × faz mal) | papel + blocos tingidos |
| `05-prompt.html` | Bloco de prompt em mono com sombra desenhada | papel |
| `06-citacao.html` | Citação em display com ilustração sangrando | papel |
| `07-encerramento.html` | Próximo passo / CTA | tinta |

## Regras do deck
- Só dois fundos além do papel: **verde lousa** (abertura de seção) e **tinta** (encerramento). Máximo um de cada por deck.
- Assinatura "IA para Professores" no canto inferior direito de todo slide, em `--ink-3` (ou `--ink-4`/`--lousa-300` sobre fundo escuro).
- Corpo nunca abaixo de 22px; listas em 24px; título de conteúdo em 54px; capa em 82px.
- Ilustrações entram cruas: o creme do PNG é o mesmo `--paper-1` do slide. Sem blend mode, sem moldura. Em slide de fundo escuro, não use ilustração — use tipo.
- A nota à mão (Caveat) aparece em no máximo um slide por deck.
