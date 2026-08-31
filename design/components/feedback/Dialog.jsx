import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Modal sheet with ink border and drawn shadow. Renders inline (absolute overlay). */
export function Dialog({ open = true, title, onClose, actions, className = '', children, ...rest }) {
  if (!open) return null;
  return (
    <div className="iap-overlay" onClick={onClose}>
      <div className={`iap-dialog ${className}`} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} {...rest}>
        <div className="iap-dialog__head">
          <h3 className="iap-dialog__title">{title}</h3>
          {onClose && <IconButton icon="x" label="Fechar" variant="bare" size="sm" onClick={onClose} />}
        </div>
        <div className="iap-dialog__body">{children}</div>
        {actions && <div className="iap-dialog__foot">{actions}</div>}
      </div>
    </div>
  );
}
