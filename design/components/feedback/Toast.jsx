import React from 'react';
import { Icon } from '../core/Icon.jsx';

const GLYPH = { success: 'check-circle', danger: 'alert-circle', info: 'info' };

/** Transient ink-dark confirmation message. */
export function Toast({ tone = 'success', icon, onClose, className = '', children, ...rest }) {
  return (
    <div className={`iap-toast iap-toast--${tone} ${className}`} role="status" {...rest}>
      <span className="iap-toast__icon"><Icon name={icon || GLYPH[tone] || 'info'} size={19} /></span>
      <span className="iap-toast__text">{children}</span>
      {onClose && <button type="button" className="iap-toast__close" aria-label="Fechar" onClick={onClose}><Icon name="x" size={16} /></button>}
    </div>
  );
}
