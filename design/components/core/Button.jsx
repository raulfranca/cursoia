import React from 'react';
import { Icon } from './Icon.jsx';

/** Primary action control. Pill shaped; 'ink' variant carries the drawn offset shadow. */
export function Button({ variant = 'primary', size = 'md', icon, iconRight, block, disabled, as = 'button', className = '', children, ...rest }) {
  const Tag = as;
  const cls = ['iap-btn', `iap-btn--${variant}`, `iap-btn--${size}`, block ? 'iap-btn--block' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const glyph = size === 'lg' ? 20 : size === 'sm' ? 15 : 17;
  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined} {...rest}>
      {icon && <Icon name={icon} size={glyph} />}
      {children}
      {iconRight && <Icon name={iconRight} size={glyph} />}
    </Tag>
  );
}
