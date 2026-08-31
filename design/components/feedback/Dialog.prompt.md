# Dialog

Modal sheet for a confirmation or a short form.

```jsx
<Dialog title="Confirmar inscrição" onClose={close} actions={<><Button variant="secondary" onClick={close}>Voltar</Button><Button>Confirmar</Button></>}>
  Você receberá o link da primeira aula em seguida.
</Dialog>
```

Renders an absolutely-positioned overlay, so the nearest positioned ancestor must be the screen container. Ink border + drawn shadow; enters with an 8px rise.
