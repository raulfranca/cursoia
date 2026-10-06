# cursoia — Inteligência Artificial para Educadores

Repositório de **Inteligência Artificial para Educadores**, curso de introdução à IA
para a rede municipal de Pindamonhangaba.
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

## As outras pastas do projeto

Este repositório é só a landing. O projeto inteiro vive em quatro pastas, e o critério
é simples: **em git só entra software; todo conteúdo do curso mora na pasta do Drive.**

| Pasta | O que é | O que vive lá |
|---|---|---|
| `C:\Dev\cursoia` (esta) | git público | landing e design system |
| `C:\Dev\curso-ia-ava` | git privado, **repositório-chefe** | CLI do Google Sala de Aula e o roteamento do workspace |
| `C:\Dev\video` | git | ferramentas e projetos de edição de vídeo |
| projeto Codex `Curso IA - Conteúdo` | pasta física do Google Drive, **sem git** | tópicos, ementa, roteiros, materiais, dados de inscrição |
| projeto Codex de ilustrações | pasta física do Google Drive, **sem git** | geração de personagens e cenas |

As pastas do Drive são cadastradas diretamente no Codex em cada computador. O endereço
físico muda conforme o usuário do Windows e fica apenas nessa configuração local. Não
criar junctions nem registrar caminhos absolutos em documentos.

No VS Code, cada computador pode ter seu próprio espaço de trabalho com os três
repositórios. Esse arquivo fica fora do Git, pois a localização das pastas varia entre
máquinas. Conteúdo e ilustrações abrem como projetos separados no Codex. Os
repositórios são independentes:
cada um tem seu próprio commit e seu próprio push, e não existe merge entre eles.

Em um computador novo, clone os três e instale as dependências do CLI:

```powershell
cd C:\Dev
git clone https://github.com/raulfranca/cursoia.git
git clone https://github.com/raulfranca/curso-ia-ava.git
git clone https://github.com/raulfranca/video.git
cd curso-ia-ava\classroom
npm install
```

O passo a passo completo — incluindo as credenciais, que não vêm pelo git — está na seção
0.1 do `AGENTS.md` do `curso-ia-ava`, que é também onde está a regra de roteamento entre
as pastas.

Para atualizar o **painel interno da turma** (artifact "Turma IA para Educadores"), o
passo a passo está na seção 0.2 do `AGENTS.md` do projeto de conteúdo. Os scripts e os
dados ficam em `dados/painel/` lá, nunca aqui, porque têm dado pessoal.

Quando um título ou subtítulo de tópico muda, a fonte canônica é
`curso-topicos.md`, na raiz do projeto de conteúdo — a landing deriva dele, nunca
o contrário.

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

## Ensinar junto, não só resolver

O Raul não quer só o problema resolvido: quer entender o que aconteceu, para não ficar
defasado nem dependente do agente. **Se você está explicando como fazer algo, é porque ele
ainda não sabe fazer sozinho — então explique o significado, não só o clique.**

Modelo mental antes do passo a passo; cada etapa com o seu porquê; em tela de permissão,
credencial ou configuração externa, sempre dizer o que está sendo autorizado, para quem e
como se desfaz. Linguagem simples, termo técnico definido na primeira vez. Ao terminar,
dizer o que ficou diferente e o que ele precisa saber para fazer sozinho na próxima.

**Sinal de que está errado:** uma sequência de cliques sem explicação do que cada um faz.

Versão completa na seção 0.2 do `AGENTS.md` do `curso-ia-ava`.

## Escrita

Português do Brasil em tudo (código, commits, conteúdo). Tom direto, frases curtas, sem emoji.
As regras completas de voz da marca estão na seção 1 de `design/INDEX.md`; as regras de
conteúdo pedagógico do curso estão no `AGENTS.md` do projeto `Curso IA - Conteúdo`.

## Botões

Botão de chamada para ação dentro de um box ou card (por exemplo, "Ir para a próxima
leitura" no fim de um artigo) fica **centralizado horizontalmente**, abaixo do conteúdo do
box. Estilo: `iap-btn iap-btn--lg iap-btn--ink`, com seta `i-arrow-right` depois do texto.
Num card em coluna (`iap-card__body`), use `align-self:center`. Se a página não tiver as
regras `iap-btn--lg`/`--ink` nem o símbolo da seta, copie-as de `index.html`.

## Tempo de leitura dos artigos

O `Leitura de N minutos` (`pg-post__meta`) de cada artigo HTML é **calculado, nunca estimado
a olho**, e recalculado sempre que o texto muda. Algoritmo: **palavras ÷ 200, arredondado ao
inteiro mais próximo, mínimo 1 minuto** (200 palavras por minuto é a faixa conservadora de
leitura em português na tela).

Conta-se o texto visível de dentro do `<article class="pg-post">`: título (h1), subtítulo
(`pg-post__lead`) e todo o `pg-prose`, incluindo listas, quadros e callouts. Não entram:
eyebrow, autoria e data (`pg-byline`), a própria linha de tempo, figuras (`alt` incluso) e
ícones SVG. Palavra é qualquer trecho separado por espaço que contenha letra ou número.

## Páginas de devolutiva

Depois de cada bloco de questões conceituais, a turma recebe uma devolutiva coletiva em
página HTML. Modelo: `devolutiva-t1-1.html`. Nome do arquivo: `devolutiva-t<tópico>-<n>.html`.

**Por que página e não comentário:** a API do Classroom não escreve comentário em entrega
e não devolve atividade criada pela interface. A devolutiva é coletiva, não individual.

### Fluxo

1. **Exportar as respostas** com `exportar-respostas.js`, no `curso-ia-ava` (ver seção 1 do
   `AGENTS.md` de lá). O `.md` gerado tem nome de aluno: vai para
   `devolutivas/T<n>/` no projeto de conteúdo, nunca para este repositório.
2. **Montar a rubrica.** O agente principal lê o enunciado, o `indice-conteudo.md` e a
   transcrição `.srt` do vídeo em `FINAL/`. A referência de correção é o que o vídeo ensinou.
3. **Relatório por subagente Haiku** (sempre Haiku para volume de texto): nível de 1 a 5 por
   aluno, conceitos equivocados com trechos literais, dificuldades relatadas, respostas de
   destaque. Sai em `devolutivas/T<n>/T<x>-relatorio.md`, no projeto de conteúdo.
4. **Conferir o relatório por script antes de usar.** O Haiku erra contas: recalcular a
   distribuição a partir da tabela por aluno, checar que toda citação é literal e revisar
   notas que contradizem a própria justificativa.
5. **Escrever a página** a partir do relatório, seguindo a estrutura abaixo.
6. Conferir em Chrome headless (desktop e 390px), e só publicar com o aval do Raul.

### O que entra e o que não entra

Entra: os conceitos que respondem corretamente, trechos de boas respostas e os equívocos
desfeitos. **Não entra:** nível, nota, distribuição, porcentagem ou contagem de quem errou,
nem nome ligado a equívoco. Este repositório é público. Citação é literal (corte com `[…]`,
sem reescrever) e leva o nome completo de quem escreveu, como está no Classroom, em
`<footer class="iap-quote__who"><strong>Nome</strong></footer>` dentro do `blockquote`.
O nome aparece só em citação de ideia correta, nunca em equívoco.

**Variar as pessoas citadas.** Antes de escolher um trecho, conferir quem já foi citado
nas devolutivas do mesmo tópico. Só repetir alguém quando a ideia for muito boa, e evitar
repetir no mesmo tópico e, menos ainda, na mesma questão. Havendo trecho de outra pessoa
com o mesmo teor, usar o dela.

**Autoria vem do arquivo de respostas, nunca do relatório.** Cada trecho é localizado,
literal, no `.md` exportado (`T<x>-respostas.md`). Se o arquivo não existir, exportar pelo
CLI do Classroom (`exportar-respostas.js`, com `CLASSROOM_SECRETS` na pasta `cursoia`)
antes de atribuir. Não deduzir autor pelo relatório do Haiku.

### Estrutura da página

- Cabeçalho, rodapé, tokens e classes copiados de `devolutiva-t1-1.html`. O cabeçalho tem
  só o wordmark: **nunca** colocar o atalho "Voltar ao curso" (em nenhuma página). Diferente dos
  artigos, **sem ilustração no topo e sem tempo de leitura**; mantém eyebrow
  (`Tópico N · Devolutiva das questões conceituais`), h1, lead e autoria com data.
- **Uma seção por questão**, aberta por `.pg-secao`: régua grossa de tinta no topo, `h2`
  curto ("Questão 1") e o enunciado em `.pg-secao__enunciado`, em tamanho de leitura.
  O enunciado nunca vira título: texto longo em letra grande polui a página.
- Dentro da seção: `h3` com a resposta em forma de frase com verbo ("O Google encontra, o
  ChatGPT escreve"), prosa curta, **um recurso visual** que explique o conceito (esquema
  comparativo `.pg-duas`, gráfico de barras `.pg-grafico`, quadro de dois eixos
  `.pg-quadro`) e um `h4` com os trechos da turma em `.iap-quote`, com o nome do autor.
- Quando um trecho usa uma metáfora, dizer onde ela deixa de valer (guia de linguagem, §7).
- **Seção "Atenção!"**, também em `.pg-secao` (`--atencao`, título em terracota): um card
  `.pg-ajuste` por equívoco, com a ideia equivocada (x terracota) em cima e o que acontece
  de fato (check lousa) embaixo. Escrever a ideia como frase genérica, não como citação de
  aluno. Dúvidas que apareceram nas respostas entram logo depois, em `h4`.
- **Fecho** em `iap-card--ink` (o único da página) com o que levar para a prática.
- Quando existe uma devolutiva seguinte, o fim do artigo leva o botão "Ir para o próximo"
  (`.pg-proximo` com `iap-btn--primary`) apontando para ela.

Hierarquia: h1 da página > `h2` da seção (Questão / Atenção) > `h3` explicativo > `h4`.
Valores de gráfico inventados para ilustrar levam a nota "Valores ilustrativos".
