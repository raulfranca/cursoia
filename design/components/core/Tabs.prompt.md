# Tabs

Underlined tab row for switching between sibling views.

```jsx
<Tabs items={[{id:"programa",label:"Programa"},{id:"materiais",label:"Materiais"}]} value={tab} onChange={setTab} />
```

Controlled only — hold `value` in the parent. The active tab is marked by a 2px terracotta rule, never by a filled pill.
