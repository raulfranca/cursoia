import React from 'react';

/** Paper surface with a hairline border. 'ink' adds the drawn 4px offset shadow. */
export function Card({ variant = 'default', interactive, media, mediaHeight = 180, footer, className = '', children, ...rest }) {
  const cls = ['iap-card', variant !== 'default' ? `iap-card--${variant}` : '', interactive ? 'iap-card--interactive' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {media && <div className="iap-card__media" style={{ height: mediaHeight }}>{media}</div>}
      <div className="iap-card__body">{children}</div>
      {footer && <div className="iap-card__footer">{footer}</div>}
    </div>
  );
}
