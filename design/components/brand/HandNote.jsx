import React from 'react';

/** Handwritten aside in Caveat, rotated slightly — margin annotations only. */
export function HandNote({ tone = 'default', className = '', children, ...rest }) {
  return <span className={['iap-note', tone !== 'default' ? `iap-note--${tone}` : '', className].filter(Boolean).join(' ')} {...rest}>{children}</span>;
}
