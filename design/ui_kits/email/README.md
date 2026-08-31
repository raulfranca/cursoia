# UI kit — E-mail HTML

Três modelos prontos para colar em qualquer ESP (Mailchimp, Brevo, RD, Sendgrid).

| Arquivo | Uso |
|---|---|
| `boas-vindas.html` | Pós-inscrição: confirmação, próxima data, calendário das 4 semanas |
| `aula-da-semana.html` | Lembrete do encontro ao vivo, com checklist "leve com você" |
| `convite-turma.html` | Campanha de abertura de inscrições, centrada, com depoimento |
| `index.html` | Contact sheet com os três lado a lado |

## Regras técnicas
- Tabelas `role="presentation"`, largura fixa 600px, tudo inline. Uma única `<style>` no head para `@media` e cor de link — nunca classes de layout.
- Cores escritas em hex literal (os `var(--token)` não são suportados por clientes de e-mail). Os hex usados são exatamente os tokens: papel `#FBF9F2`, tinta `#14130E`, lousa `#35604F`, terracota `#C2543A`, ocre `#E0A02E`.
- Botões são `<td>` com `border-radius` + `<a>` em bloco — sem imagens de botão.
- Ilustrações entram como `<img>` de largura total e sem tratamento — o fundo creme do PNG é o mesmo `#F4F1E7` do e-mail. Nunca `mix-blend-mode` (não é suportado em cliente de e-mail e escureceria o creme).
- Nunca use Caveat (`HandNote`) em e-mail — o fallback quebra o tom.
- Preheader escondido em toda peça, primeira linha do `<body>`.
