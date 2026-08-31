import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Square ink checkbox with label. */
export function Checkbox({ checked, onChange, disabled, className = '', children, ...rest }) {
  const cls = ['iap-check', checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <input type="checkbox" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span className="iap-check__box"><Icon name="check" size={14} /></span>
      <span>{children}</span>
    </label>
  );
}
