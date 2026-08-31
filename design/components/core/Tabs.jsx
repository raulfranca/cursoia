import React from 'react';

/** Underlined tab row; the active tab gets a terracotta 2px rule. */
export function Tabs({ items = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={`iap-tabs ${className}`} role="tablist" {...rest}>
      {items.map((it) => {
        const id = it.id ?? it.label;
        return (
          <button key={id} type="button" role="tab" aria-selected={value === id} disabled={it.disabled}
            className={`iap-tab ${value === id ? 'is-active' : ''}`}
            onClick={() => onChange && onChange(id)}>
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
