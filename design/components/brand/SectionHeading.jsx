import React from 'react';

/** Eyebrow + title + lead block that opens a page section. */
export function SectionHeading({ eyebrow, title, lead, align = 'left', className = '', children, ...rest }) {
  return (
    <div className={['iap-section-heading', align === 'center' ? 'iap-section-heading--center' : '', className].filter(Boolean).join(' ')} {...rest}>
      {eyebrow && <span className="iap-eyebrow">{eyebrow}</span>}
      {title && <h2 className="iap-section-heading__title">{title}</h2>}
      {lead && <p className="iap-section-heading__lead">{lead}</p>}
      {children}
    </div>
  );
}
