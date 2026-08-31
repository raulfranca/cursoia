import React from 'react';

/** Labelled text field. Set multiline for a textarea. */
export function Input({ label, hint, error, required, multiline, id, className = '', ...rest }) {
  const fid = id || `iap-${Math.random().toString(36).slice(2, 8)}`;
  const Field = multiline ? 'textarea' : 'input';
  return (
    <div className={`iap-field ${error ? 'is-invalid' : ''} ${className}`}>
      {label && <label className="iap-label" htmlFor={fid}>{label}{required && <span className="iap-label__req"> *</span>}</label>}
      <Field id={fid} className={`iap-input ${multiline ? 'iap-textarea' : ''}`} {...rest} />
      {(error || hint) && <span className={`iap-hint ${error ? 'iap-hint--error' : ''}`}>{error || hint}</span>}
    </div>
  );
}
