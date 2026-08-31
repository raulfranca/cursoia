import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.470.0/icons';

/** Monoline glyph from the Lucide set, masked so it inherits currentColor. */
export function Icon({ name, size = 20, strokeWidth, className = '', style, ...rest }) {
  const url = `url("${CDN}/${name}.svg")`;
  return (
    <span
      className={`iap-icon ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size, WebkitMaskImage: url, maskImage: url, ...style }}
      data-stroke={strokeWidth}
      {...rest}
    />
  );
}
