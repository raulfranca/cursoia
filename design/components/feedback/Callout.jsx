import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Tinted advisory block — tips, warnings, pedagogical notes. */
export function Callout({ tone = 'brand', icon = 'lightbulb', title, className = '', children, ...rest }) {
  return (
    <div className={`iap-callout iap-callout--${tone} ${className}`} {...rest}>
      {icon && <span className="iap-callout__icon"><Icon name={icon} size={22} /></span>}
      <div>
        {title && <div className="iap-callout__title">{title}</div>}
        <div className="iap-callout__body">{children}</div>
      </div>
    </div>
  );
}
