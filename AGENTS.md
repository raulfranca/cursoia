# cursoia — Inteligência Artificial para Educadores

Repositório de **Inteligência Artificial para Educadores**, curso de introdução à IA
para a rede municipal de Pindamonhangaba.
Publicado por GitHub Pages a partir da raiz: <https://raulfranca.github.io/cursoia/>.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Landing da turma 2026, no ar. Arquivo único: CSS e sprite de ícones SVG inline. |
| `t1/`, `t2/`, `t3/`… | Artigos, devolutivas e tutoriais de cada tópico, uma pasta por tópico. Ver "Pastas por tópico". |
| `assets/artigos.css` | Folha de estilos única de todas as páginas das pastas `t<n>/`. Ver "CSS compartilhado". |
| `assets/capturas/`, `assets/ilustracoes/` | Capturas de tela e ilustrações usadas pelas páginas. |
| `*.html` da raiz (exceto `index.html`) | Redirecionamentos dos endereços antigos, de antes das pastas. Não editar; não criar novos. |
| `divulgacao/` | Matriz do card 1:1 para o grupo de WhatsApp (`card-whatsapp.html`), ilustrações de fundo transparente (`ilustracoes/`) e o script que as gera (`transparente.py`). Receita na seção 7.4 do `AGENTS.md` da pasta de conteúdo. |
| `old/index.html` | Landing do piloto de 2025 ("Sua Rotina Mais Leve na Escola"), arquivada. Referência de conteúdo, não de forma. |
| `design/` | **Design system da marca — referência, não código de produção.** Ver abaixo. |

**Deploy:** o GitHub Pages republica a raiz da `main` a cada push. Não há build nem dependência
a instalar — editar `index.html` e empurrar é o fluxo inteiro.

**Este repositório é público.** Nada de dado pessoal de professor inscrito, planilha de
inscrição ou credencial entra aqui — nem sequer não-commitado na pasta, porque um `git add .`
distraído publica para sempre.

## As outras pastas do projeto

Este repositório é a landing e as páginas do curso. O projeto inteiro vive em quatro pastas, e o critério
é simples: **em git só entra software; todo conteúdo do curso mora na pasta do Drive.**

| Pasta | O que é | O que vive lá |
|---|---|---|
| `C:\Dev\cursoia` (esta) | git público | landing, páginas do curso (artigos, devolutivas, tutoriais) e design system |
| `C:\Dev\curso-ia-ava` | git privado, **repositório-chefe** | CLI do Google Sala de Aula e o roteamento do workspace |
| `C:\Dev\video-edit` | git | ferramentas e projetos de edição de vídeo |
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
git clone https://github.com/raulfranca/video-edit.git
cd curso-ia-ava\classroom
npm install
```

O passo a passo completo — incluindo as credenciais, que não vêm pelo git — está na seção
0.1 do `AGENTS.md` do `curso-ia-ava`, que é também onde está a regra de roteamento entre
as pastas.

Para atualizar o **painel interno da turma** (artifact "Turma IA para Educadores"), o
passo a passo está na seção 0.2 do `AGENTS.md` do projeto de conteúdo. Os scripts e os
dados ficam em `dados/painel/` lá, nunca aqui, porque têm dado pessoal.

**Memória do agente:** fica em `memoria/`, no projeto de conteúdo, nunca na memória local
do Claude. Ao começar, ler `memoria/INDICE.md` lá; para registrar, seguir a seção 11 do
`AGENTS.md` do projeto de conteúdo.

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

## Pastas por tópico

Toda página nova do curso (artigo, devolutiva, tutorial) vai para a pasta do tópico a que
pertence: `t1/`, `t2/`, `t3/`… O tópico é o do eyebrow da página (`Tópico 3 · …` vai para
`t3/`). Nada de página nova na raiz: a raiz fica só com `index.html`, `assets/` e as pastas.

Por estar uma pasta abaixo da raiz, os caminhos relativos da página sobem um nível:

| O quê | Como fica numa página de `t<n>/` |
|---|---|
| CSS, capturas, ilustrações, avatar | `../assets/artigos.css`, `../assets/capturas/…` |
| Wordmark (link para a landing) | `href="../"` |
| Página do mesmo tópico | só o nome: `devolutiva-t1-2.html` |
| Página de outro tópico | `../t2/dados-dos-alunos.html` |
| `og:url` (absoluto) | `https://raulfranca.github.io/cursoia/t<n>/<pagina>.html` |

O `og:image` já é absoluto e não muda. Ao mover ou renomear uma página, conferir por
script que todo `href`/`src` relativo resolve para um arquivo que existe, e depois atualizar
os links que apontam para ela no Classroom (material com link, pelo CLI do
`curso-ia-ava`), no `indice-conteudo.md` do projeto de conteúdo e no `AGENTS.md` do
`curso-ia-ava`, se for o caso.

**Endereço publicado não morre.** Uma página que já foi para a turma (Classroom, WhatsApp,
descrição de vídeo) deixa no endereço antigo um redirecionamento: HTML mínimo com
`meta refresh`, `location.replace` mantendo o `#`, `link rel="canonical"` para o novo e
`noindex`. Os cinco da raiz (`qual-ia-usar.html`, `devolutiva-t1-*.html`,
`dados-dos-alunos.html`, `treinamento-chatgpt.html`) são desses e servem de modelo.

## CSS compartilhado

Todas as páginas das pastas `t<n>/` usam **uma só folha de estilos**,
`assets/artigos.css`. Nenhuma delas tem `<style>` próprio: estilo novo entra no
`artigos.css`, na seção do tipo de página, para ser reaproveitado pelas próximas. A
`index.html` continua autônoma, com CSS inline, e não usa esse arquivo.

- Antes de criar classe, procurar no `artigos.css` uma que já resolva. Componente do design
  system leva prefixo `iap-`; estrutura comum de página, `pg-`; peça de tutorial, `tt-`.
- Regra que mexe na página inteira (`body`, cabeçalho, rolagem) **nunca** vai solta: fica
  presa à classe do `body` daquele tipo de página, para não vazar para os outros. Exemplo:
  o tutorial ocupa a tela sem rolagem com `.pg-tutorial{…}` e `<body class="pg-tutorial">`.
- Seções do arquivo, na ordem: tokens e base; componentes `iap-`; estruturas `pg-`;
  artigos; devolutivas; telas estreitas dos artigos; tutorial guiado (com as próprias
  quebras de 1100px e 860px). A ordem importa: o bloco do tutorial vem por último porque
  sobrescreve peças de artigo (`.tt-visual .pg-caderno`, `.tt-visual .pg-shot`).
- Mudou o `artigos.css`? Conferir em Chrome headless pelo menos um artigo, uma devolutiva e
  um tutorial, já que todos dependem dele.

## Tutoriais guiados

A partir do tópico 3, as práticas com IA ganham tutoriais guiados: uma tela, um passo por
vez, como uma apresentação. **Modelo e guia de estilo: `t3/ditado-tutorial.html`.** Todo
tutorial novo parte de uma cópia dele: mesmo cabeçalho, mesmo rodapé de navegação, mesmo
script de passos, trocando o conteúdo. Nome do arquivo: `<tema>-tutorial.html`.

### Lista de tutoriais do tópico

Cada pasta de tópico com tutoriais tem uma página de entrada, `t<n>/index.html` (endereço
`https://raulfranca.github.io/cursoia/t<n>/`). É ela que vai para o Classroom, não os
tutoriais soltos. Modelo: `t3/index.html`.

- Um card (`iap-module`) por tutorial, com número, título igual ao `h1` da capa, uma frase
  do que se faz, passos e minutos iguais aos da capa.
- **Ordem: do mais simples ao mais complexo, e quem ensina vem antes de quem reaproveita.**
  Se um tutorial explica em detalhe um recurso (abrir o Gemini e conferir o escudo,
  microfone, Ctrl + A/C/V/F, anexar arquivo pelo +) e outro só o cita de passagem, o que
  explica vem primeiro. No tópico 3: ditado (escudo, Shift + Enter, microfone), termos
  (atalhos de copiar, colar e buscar), prova, metamorfose, bilhete (anexar pelo +),
  biografias, edital e cartazes (duas conversas e tradução de volta).
- **Tutorial novo do tópico entra nessa lista**, ou a cursista não chega a ele.
- O botão **Concluir** do último passo grava no navegador (`localStorage`, chave
  `cursoia:tutoriais-concluidos`) e volta para a lista, que mostra o check e "N de M
  concluídos". O registro é por navegador: não segue a cursista para outro computador, e a
  página avisa isso. Quem só abre e fecha, ou volta pelo botão do cabeçalho, não conclui.
- O código que lê e grava está em `assets/tutoriais.js`, usado pela lista e pelos tutoriais.

### Formato

- **Sem rolagem no computador.** A página ocupa a tela (`body.pg-tutorial`): cabeçalho com
  o botão "Tutoriais" no canto superior esquerdo (volta para a lista do tópico, `href="./"`),
  wordmark, barra de progresso e "Passo N de M"; palco no meio; rodapé com Voltar, "A
  seguir: <título do próximo passo>" e Próximo. No último passo, o Próximo dá lugar ao
  **Concluir** (`data-concluir`, `iap-btn--ink`), que marca o tutorial como feito e volta
  para a lista. Setas do teclado navegam. O endereço guarda
  o passo (`#passo-3`), então dá para mandar o link direto para um passo.
- **Passo 0 é a capa:** eyebrow `Tópico N · <nome do tópico>`; `h1` com a tarefa no
  infinitivo ("Passar registros a limpo"); lead de uma frase, sem ponto final, dizendo o que
  a pessoa vai fazer; três pílulas (`tt-capa__meta`) com número de passos, tempo de leitura e
  ferramenta/conta; botão "Começar" (`iap-btn--ink`). À direita, um esquema animado do
  processo inteiro, da entrada à saída (`tt-fluxo`), com dados do próprio exemplo.
- **Cada passo** tem a "mesa" à esquerda (`tt-visual`, fundo rebaixado) e o texto à direita
  (`tt-texto`): `tt-num` "Passo N", `h2.tt-titulo` curto no imperativo ("Abra o Gemini",
  "Envie o ditado", "Leia a resposta") e 2 a 4 dicas (`tt-dicas`). No celular a mesa vai
  para cima e o texto para baixo, com rolagem própria.
- **Entre 6 e 10 passos.** Um passo = uma ação ou uma coisa para observar. Se o texto não
  cabe em quatro dicas curtas, são dois passos.

### O que vai na mesa

Um elemento por passo, escolhido pelo que o passo pede:

| Tipo | Quando | Como |
|---|---|---|
| Captura de tela | mostrar onde clicar ou o que vai aparecer | `pg-shot` com `.webp` em `assets/capturas/<tema>-<n>-<descricao>.webp`, `width`/`height` reais e `alt` que descreve o que se vê |
| Material recriado | a entrada da tarefa (caderno, lista, texto) | componente em HTML (`pg-caderno`), não foto |
| Comando para copiar | o prompt | `pg-prompt` com rótulo "Comando (Prompt)" e botão "Copiar instrução" (`iap-btn--quieto`) |
| Demonstração animada | uma ação que acontece no tempo (falar, digitar) | animação disparada ao entrar no passo (`data-ao-entrar`), com botão "Ver de novo" e versão parada para quem pede menos movimento |
| Antes e depois interativo | o fechamento: o que mudou | pares clicáveis (`tt-par`), o primeiro já aberto |

### Como escrever

- **Segunda pessoa e imperativo**, frases curtas, uma ideia por dica. O verbo da ação ou
  o termo-chave vai em `<strong>` (no máximo um ou dois por dica).
- **Dizer o porquê do que parece estranho.** O passo do prompt explica por que pedimos ao
  modelo que liste dúvidas em vez de adivinhar; o passo do envio avisa que o ditado "parece
  uma bagunça" e que é isso mesmo que a IA vai arrumar.
- **Antecipar o erro provável** no próprio passo: a transcrição erra nomes e números; se o
  Gemini responder "sou apenas uma IA de texto", abrir nova conversa. Erro e solução vão em
  `tt-aviso--alerta` (terracota); regra de segurança vai em `tt-aviso` (lousa), com link
  para o artigo que explica ("Por quê?").
- **Segurança primeiro:** se o tutorial lida com dado de aluno, o passo de abrir a
  ferramenta diz qual conta usar (Gemini da conta @educa, nunca celular nem ChatGPT) e como
  conferir (o escudo).
- **Exemplo fictício e contínuo.** Os dados do exemplo são inventados e a legenda diz isso;
  reaproveitar personagens de tópicos anteriores (a Alice, do tópico 2) dá continuidade. A
  resposta da IA mostrada é **real**, capturada numa execução de verdade, com a data
  anotada no código.
- **Último passo fecha com o ganho e a responsabilidade:** o que a pessoa acabou de fazer,
  quanto tempo economizou e que deve conferir o resultado antes de usar.
- Sem byline e sem rodapé de página. O tempo da capa (e do card na lista do tópico) é o de
  **ler o tutorial com atenção**, sem reproduzir a tarefa no computador. É **calculado, não
  estimado**, e recalculado quando o texto muda. Regra: palavras das dicas (`tt-texto`)
  inteiras + palavras da mesa (`tt-visual`) a 60%, no máximo 250 por passo, porque abas,
  carrossel e antes e depois escondem a maior parte + 120 palavras por captura com resposta
  do Gemini; tudo a 200 palavras por minuto. Somar 8 segundos por passo, contando a capa, e
  a duração das animações de ditado. Arredondar ao minuto mais próximo. A contagem é do
  texto já montado pelo script, em Chrome headless.

### Código

- O `<head>` carrega `../assets/tutoriais.js` (com `defer`) depois do `artigos.css`; sem
  ele, o Concluir volta para a lista mas não marca o check.
- Estrutura por atributos: cada passo é `<section class="tt-passo" data-passo>`; botões com
  `data-ir`, `data-copiar`, `data-tocar`, `data-concluir`; ações ao entrar com `data-ao-entrar`. O script de
  navegação do modelo conta os passos sozinho: acrescentar ou tirar uma `section` basta.
- Os dados do exemplo ficam num array no topo do `<script>` e alimentam todas as peças que
  os repetem (caderno, animação, antes e depois), para nunca divergirem.
- Acessibilidade: esquema da capa com `role="img"` e `aria-label`; contagem com
  `aria-live`; respeitar `prefers-reduced-motion`.
- Conferir em Chrome headless na capa, num passo com captura e no último, em desktop
  (1440×900) e em 390px.

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
página HTML. Modelo: `t1/devolutiva-t1-1.html`. Nome do arquivo:
`t<tópico>/devolutiva-t<tópico>-<n>.html`.

**Por que página:** a API do Classroom não escreve comentário em entrega e não devolve
atividade criada pela interface. A página é a devolutiva coletiva. Desde 13/10/2026 cada
entrega também recebe um comentário particular curto ao ser devolvida (ver abaixo).

### Comentário particular por aluno

1. **Esqueleto do `.md` por script** (sem ler as respostas no contexto principal): um bloco
   por entrega `TURNED_IN`, com nome, `<!-- submission: id · status: pendente · link -->`
   (o `/u/N/` do link não importa: o script de devolução escolhe a conta pelo e-mail),
   resposta citada e `**Devolutiva:**` vazia. Vai para `devolutivas/T<n>/` no projeto de
   conteúdo (modelo: `T1.1-devolutivas-individuais.md`). O Raul (entrega de teste) fica fora.
2. **Subagentes Haiku escrevem**, em lotes de ~20, com as regras de estilo do Raul (2 a 4
   frases, valida algo específico com o primeiro nome, ajuste gentil, fecho apontando a
   devolutiva geral do tópico seguinte; nunca "X de um lado, Y do outro"). O ajuste
   ("Vale a pena lembrar que…") só entra quando a resposta erra ou omite o ponto. O Haiku
   tende a "corrigir" repetindo o que a pessoa já tinha dito: instruir a conferir isso antes
   e, se a ideia já está na resposta, reconhecê-la ("Você lembrou bem que…").
3. **Conferência por script** (preenchido, primeiro nome, fecho, sem padrões vetados) e
   leitura por amostragem.
4. **O Raul revisa e edita.** Ler o diff da revisão dele e incorporar às regras de estilo.
5. **Com o OK dele**, `devolver-comentarios.py` (no `curso-ia-ava/classroom`, ver README)
   devolve pelo Chrome e marca `devolvido`. Teste antes com `DEV_SIMULAR=1` e uma entrega real.

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

- Cabeçalho, rodapé e classes copiados de `t1/devolutiva-t1-1.html`. O cabeçalho tem
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
