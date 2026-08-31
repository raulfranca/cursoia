# UI kit — Site do curso

Recreação navegável do site de vendas + área do aluno de **IA para Professores**.
Não havia site publicado nem código-fonte: as telas foram compostas a partir das quatro
ilustrações enviadas e das fundações deste design system. Trate-as como referência de
composição (ritmo, densidade, hierarquia), não como cópia de um produto existente.

## Telas
| Arquivo | Tela | Componentes usados |
|---|---|---|
| `Chrome.jsx` | Cabeçalho fixo + rodapé escuro | Button, Badge |
| `Home.jsx` | Landing: herói, faixa de números, três benefícios, para-quem-é, depoimentos, CTA verde | SectionHeading, Card, Stat, Quote, Illustration, Checklist, Callout, Tag, HandNote, Button, Icon |
| `Programa.jsx` | Programa em abas: módulos, materiais, certificado | Tabs, ModuleCard, Card, Callout, Badge, Illustration |
| `Inscricao.jsx` | Formulário de inscrição com resumo fixo, modal de confirmação e toast | Input, Select, Radio, Checkbox, Dialog, Toast, Card, Callout |
| `Aula.jsx` | Área do aluno: sidebar de progresso, player, abas de conteúdo | Tabs, ModuleCard, Card, Switch, Tooltip, IconButton, Checklist, HandNote |

## Como abrir
Abra `index.html`. Ele carrega `styles.css` e `_ds_bundle.js` da raiz do projeto, então
os componentes vêm do bundle real — não há cópias locais de Button, Card etc.

## Fluxo clicável
Início → Programa (abas) → Inscrever-se → validação do checkbox → modal → toast de confirmação.
"Área do aluno" mostra o produto pós-compra.
