import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** "O que você vai aprender" list; one masked glyph per line. */
export function Checklist({ items = [], icon = 'check', className = '', ...rest }) {
  return (
    <ul className={`iap-checklist ${className}`} {...rest}>
      {items.map((it, i) => (
        <li className="iap-checklist__item" key={i}>
          <span className="iap-checklist__mark"><Icon name={icon} size={18} /></span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
