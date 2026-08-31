import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Labelled native select with a masked chevron. */
export function Select({ label, hint, error, required, options = [], placeholder, id, className = '', ...rest }) {
  const fid = id || `iap-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={`iap-field ${error ? 'is-invalid' : ''} ${className}`}>
      {label && <label className="iap-label" htmlFor={fid}>{label}{required && <span className="iap-label__req"> *</span>}</label>}
      <span className="iap-select-wrap">
        <select id={fid} className="iap-select" defaultValue={placeholder ? '' : undefined} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const v = typeof o === 'string' ? o : o.value;
            const l = typeof o === 'string' ? o : o.label;
            return <option key={v} value={v}>{l}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={17} />
      </span>
      {(error || hint) && <span className={`iap-hint ${error ? 'iap-hint--error' : ''}`}>{error || hint}</span>}
    </div>
  );
}
