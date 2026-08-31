# Card

The boxed content surface — paper with a hairline border.

```jsx
<Card variant="ink" media={<img src="assets/illustrations/professora-no-laptop.png" alt="" />}>
  <h3>Aula 1 — O que a IA faz bem</h3>
  <p>Onde a IA ajuda de verdade no seu planejamento.</p>
</Card>
```

`default` for most content. `band` when cards sit on white/paper-0 and need separation. `ink` for the one card that must be picked up (featured module, pricing). Never combine `ink` with `interactive` — the drawn shadow already reads as raised.
