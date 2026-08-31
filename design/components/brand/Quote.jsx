import React from 'react';

/** Testimonial with a terracotta rule; attribution below. */
export function Quote({ children, name, role, className = '', ...rest }) {
  return (
    <blockquote className={`iap-quote ${className}`} {...rest}>
      <p className="iap-quote__text">{children}</p>
      {(name || role) && <footer className="iap-quote__who"><span><strong>{name}</strong>{role ? ` — ${role}` : ''}</span></footer>}
    </blockquote>
  );
}
