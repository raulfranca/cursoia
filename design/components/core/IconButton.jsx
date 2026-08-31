import React from 'react';
import { Icon } from './Icon.jsx';

/** Square-footprint circular control for a single glyph action. */
export function IconButton({ icon, label, variant = 'outline', size = 'md', disabled, className = '', ...rest }) {
  const cls = ['iap-iconbtn', `iap-iconbtn--${size}`, variant !== 'outline' ? `iap-iconbtn--${variant}` : '', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      <Icon name={icon} size={size === 'lg' ? 22 : size === 'sm' ? 16 : 19} />
    </button>
  );
}
