import React from 'react';
import { Icon } from './Icon.jsx';

/** Pill tag for topics and filters; selectable and optionally removable. */
export function Tag({ selected, onSelect, onRemove, icon, className = '', children, ...rest }) {
  const interactive = Boolean(onSelect);
  const cls = ['iap-tag', interactive ? 'iap-tag--interactive' : '', selected ? 'is-selected' : '', className].filter(Boolean).join(' ');
  const Tag_ = interactive ? 'button' : 'span';
  return (
    <Tag_ className={cls} onClick={onSelect} type={interactive ? 'button' : undefined} {...rest}>
      {icon && <Icon name={icon} size={14} />}
      {children}
      {onRemove && (
        <span className="iap-tag__remove" role="button" aria-label="Remover" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <Icon name="x" size={13} />
        </span>
      )}
    </Tag_>
  );
}
