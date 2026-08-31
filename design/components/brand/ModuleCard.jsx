import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Numbered course-module row: index, title, description and meta. */
export function ModuleCard({ index, title, description, duration, format, done, className = '', ...rest }) {
  return (
    <div className={['iap-module', done ? 'is-done' : '', className].filter(Boolean).join(' ')} {...rest}>
      <span className="iap-module__num">{done ? <Icon name="check" size={18} /> : index}</span>
      <div>
        <div className="iap-module__title">{title}</div>
        {description && <div className="iap-module__desc">{description}</div>}
        {(duration || format) && (
          <div className="iap-module__meta">
            {duration && <span>{duration}</span>}
            {format && <span>{format}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
