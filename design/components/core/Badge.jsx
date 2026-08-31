import React from 'react';
import { Icon } from './Icon.jsx';

/** Small uppercase status/label chip. Non-interactive. */
export function Badge({ tone = 'brand', icon, className = '', children, ...rest }) {
  return (
    <span className={`iap-badge iap-badge--${tone} ${className}`} {...rest}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}
