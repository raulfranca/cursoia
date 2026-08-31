import React from 'react';

/** Binary toggle; on state fills with chalkboard green. */
export function Switch({ checked, onChange, disabled, className = '', children, ...rest }) {
  const cls = ['iap-switch', checked ? 'is-on' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls} {...rest}>
      <input type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span className="iap-switch__track"><span className="iap-switch__knob" /></span>
      {children && <span>{children}</span>}
    </label>
  );
}
