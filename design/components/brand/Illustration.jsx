import React from 'react';

/** Frame for the brand's monoline ink illustrations; multiplies onto paper. */
export function Illustration({ src, alt = '', variant = 'plain', caption, className = '', style, ...rest }) {
  const cls = ['iap-illo', variant !== 'plain' ? `iap-illo--${variant}` : '', className].filter(Boolean).join(' ');
  return (
    <figure className={cls} style={{ margin: 0, ...style }} {...rest}>
      <img src={src} alt={alt} />
      {caption && <figcaption className="iap-illo__caption">{caption}</figcaption>}
    </figure>
  );
}
