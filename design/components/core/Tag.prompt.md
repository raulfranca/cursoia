# Tag

Pill tag for topics and filters; selectable and removable.

```jsx
<Tag icon="hash">Avaliação</Tag>
<Tag selected onSelect={() => {}}>Fundamental II</Tag>
<Tag onRemove={() => {}}>Prompt</Tag>
```

Passing `onSelect` makes it a real button with hover state; `selected` fills it with ink. Use `Badge` instead when the chip is informational rather than interactive.
