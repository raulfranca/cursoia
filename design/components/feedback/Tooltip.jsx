import React from 'react';

/** Hover label on an ink bubble. Wraps its trigger. */
export function Tooltip({ label, placement = 'top', open, className = '', children, ...rest }) {
  return (
    <span className={`iap-tooltip ${className}`} {...rest}>
      {children}
      <span className={['iap-tooltip__bubble', placement === 'bottom' ? 'iap-tooltip__bubble--bottom' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')}>{label}</span>
    </span>
  );
}
