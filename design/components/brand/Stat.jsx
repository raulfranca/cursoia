import React from 'react';

/** Single large figure with a caption. 'rule' adds a hairline on the left. */
export function Stat({ value, label, variant = 'plain', className = '', ...rest }) {
  return (
    <div className={['iap-stat', variant === 'rule' ? 'iap-stat--rule' : '', className].filter(Boolean).join(' ')} {...rest}>
      <span className="iap-stat__value">{value}</span>
      <span className="iap-stat__label">{label}</span>
    </div>
  );
}
