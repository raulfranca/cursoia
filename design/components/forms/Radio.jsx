import React from 'react';

/** Single radio option; group them with a shared name. */
export function Radio({ checked, onChange, name, value, disabled, className = '', children, ...rest }) {
  const cls = ['iap-radio', checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span className="iap-radio__dot" />
      <span>{children}</span>
    </label>
  );
}
