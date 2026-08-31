/* @ds-bundle: {"format":4,"namespace":"IAParaProfessoresDesignSystem_518ecc","components":[{"name":"Checklist","sourcePath":"components/brand/Checklist.jsx"},{"name":"HandNote","sourcePath":"components/brand/HandNote.jsx"},{"name":"Illustration","sourcePath":"components/brand/Illustration.jsx"},{"name":"ModuleCard","sourcePath":"components/brand/ModuleCard.jsx"},{"name":"Quote","sourcePath":"components/brand/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/brand/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/Checklist.jsx":"1df334c7925d","components/brand/HandNote.jsx":"36ede2ec3eb8","components/brand/Illustration.jsx":"d2a5e8612057","components/brand/ModuleCard.jsx":"fb62f96f7818","components/brand/Quote.jsx":"10e9948da2a2","components/brand/SectionHeading.jsx":"b09f4d331d7c","components/brand/Stat.jsx":"3cd43a4b8cd6","components/core/Badge.jsx":"7f1a2f39c8b8","components/core/Button.jsx":"1322db48d67b","components/core/Card.jsx":"db2110332dcf","components/core/Icon.jsx":"c70a63253b7d","components/core/IconButton.jsx":"fd532c9bf9cb","components/core/Tabs.jsx":"60165ed30b54","components/core/Tag.jsx":"9d1af6d280c8","components/feedback/Callout.jsx":"772dab521382","components/feedback/Dialog.jsx":"b0e265a12b01","components/feedback/Toast.jsx":"cdd33d93fd7d","components/feedback/Tooltip.jsx":"f2050cea3865","components/forms/Checkbox.jsx":"40a33e09d737","components/forms/Input.jsx":"4986c5b00175","components/forms/Radio.jsx":"a5dccdb9954d","components/forms/Select.jsx":"4b3541f8b274","components/forms/Switch.jsx":"0e6809335e17","ui_kits/curso-site/Aula.jsx":"69b5251ae1c6","ui_kits/curso-site/Chrome.jsx":"37bfeda85cef","ui_kits/curso-site/Home.jsx":"ee7582253243","ui_kits/curso-site/Inscricao.jsx":"61de865b521b","ui_kits/curso-site/Programa.jsx":"e76c382af411"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IAParaProfessoresDesignSystem_518ecc = window.IAParaProfessoresDesignSystem_518ecc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/HandNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Handwritten aside in Caveat, rotated slightly — margin annotations only. */
function HandNote({
  tone = 'default',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['iap-note', tone !== 'default' ? `iap-note--${tone}` : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { HandNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HandNote.jsx", error: String((e && e.message) || e) }); }

// components/brand/Illustration.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Frame for the brand's monoline ink illustrations; multiplies onto paper. */
function Illustration({
  src,
  alt = '',
  variant = 'plain',
  caption,
  className = '',
  style,
  ...rest
}) {
  const cls = ['iap-illo', variant !== 'plain' ? `iap-illo--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: cls,
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "iap-illo__caption"
  }, caption));
}
Object.assign(__ds_scope, { Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/brand/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Testimonial with a terracotta rule; attribution below. */
function Quote({
  children,
  name,
  role,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: `iap-quote ${className}`
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "iap-quote__text"
  }, children), (name || role) && /*#__PURE__*/React.createElement("footer", {
    className: "iap-quote__who"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, name), role ? ` — ${role}` : '')));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Quote.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + title + lead block that opens a page section. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['iap-section-heading', align === 'center' ? 'iap-section-heading--center' : '', className].filter(Boolean).join(' ')
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "iap-eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "iap-section-heading__title"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "iap-section-heading__lead"
  }, lead), children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single large figure with a caption. 'rule' adds a hairline on the left. */
function Stat({
  value,
  label,
  variant = 'plain',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['iap-stat', variant === 'rule' ? 'iap-stat--rule' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "iap-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "iap-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Paper surface with a hairline border. 'ink' adds the drawn 4px offset shadow. */
function Card({
  variant = 'default',
  interactive,
  media,
  mediaHeight = 180,
  footer,
  className = '',
  children,
  ...rest
}) {
  const cls = ['iap-card', variant !== 'default' ? `iap-card--${variant}` : '', interactive ? 'iap-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "iap-card__media",
    style: {
      height: mediaHeight
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    className: "iap-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "iap-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.470.0/icons';

/** Monoline glyph from the Lucide set, masked so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeWidth,
  className = '',
  style,
  ...rest
}) {
  const url = `url("${CDN}/${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `iap-icon ${className}`,
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      WebkitMaskImage: url,
      maskImage: url,
      ...style
    },
    "data-stroke": strokeWidth
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Checklist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "O que você vai aprender" list; one masked glyph per line. */
function Checklist({
  items = [],
  icon = 'check',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: `iap-checklist ${className}`
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    className: "iap-checklist__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "iap-checklist__mark"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/brand/ModuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered course-module row: index, title, description and meta. */
function ModuleCard({
  index,
  title,
  description,
  duration,
  format,
  done,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['iap-module', done ? 'is-done' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "iap-module__num"
  }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }) : index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "iap-module__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "iap-module__desc"
  }, description), (duration || format) && /*#__PURE__*/React.createElement("div", {
    className: "iap-module__meta"
  }, duration && /*#__PURE__*/React.createElement("span", null, duration), format && /*#__PURE__*/React.createElement("span", null, format))));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small uppercase status/label chip. Non-interactive. */
function Badge({
  tone = 'brand',
  icon,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `iap-badge iap-badge--${tone} ${className}`
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Primary action control. Pill shaped; 'ink' variant carries the drawn offset shadow. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block,
  disabled,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['iap-btn', `iap-btn--${variant}`, `iap-btn--${size}`, block ? 'iap-btn--block' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const glyph = size === 'lg' ? 20 : size === 'sm' ? 15 : 17;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: glyph
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: glyph
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square-footprint circular control for a single glyph action. */
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  disabled,
  className = '',
  ...rest
}) {
  const cls = ['iap-iconbtn', `iap-iconbtn--${size}`, variant !== 'outline' ? `iap-iconbtn--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 22 : size === 'sm' ? 16 : 19
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlined tab row; the active tab gets a terracotta 2px rule. */
function Tabs({
  items = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `iap-tabs ${className}`,
    role: "tablist"
  }, rest), items.map(it => {
    const id = it.id ?? it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": value === id,
      disabled: it.disabled,
      className: `iap-tab ${value === id ? 'is-active' : ''}`,
      onClick: () => onChange && onChange(id)
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill tag for topics and filters; selectable and optionally removable. */
function Tag({
  selected,
  onSelect,
  onRemove,
  icon,
  className = '',
  children,
  ...rest
}) {
  const interactive = Boolean(onSelect);
  const cls = ['iap-tag', interactive ? 'iap-tag--interactive' : '', selected ? 'is-selected' : '', className].filter(Boolean).join(' ');
  const Tag_ = interactive ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: cls,
    onClick: onSelect,
    type: interactive ? 'button' : undefined
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "iap-tag__remove",
    role: "button",
    "aria-label": "Remover",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tinted advisory block — tips, warnings, pedagogical notes. */
function Callout({
  tone = 'brand',
  icon = 'lightbulb',
  title,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `iap-callout iap-callout--${tone} ${className}`
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "iap-callout__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "iap-callout__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "iap-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal sheet with ink border and drawn shadow. Renders inline (absolute overlay). */
function Dialog({
  open = true,
  title,
  onClose,
  actions,
  className = '',
  children,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "iap-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `iap-dialog ${className}`,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "iap-dialog__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "iap-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    variant: "bare",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "iap-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "iap-dialog__foot"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const GLYPH = {
  success: 'check-circle',
  danger: 'alert-circle',
  info: 'info'
};

/** Transient ink-dark confirmation message. */
function Toast({
  tone = 'success',
  icon,
  onClose,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `iap-toast iap-toast--${tone} ${className}`,
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "iap-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || GLYPH[tone] || 'info',
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    className: "iap-toast__text"
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "iap-toast__close",
    "aria-label": "Fechar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover label on an ink bubble. Wraps its trigger. */
function Tooltip({
  label,
  placement = 'top',
  open,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `iap-tooltip ${className}`
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: ['iap-tooltip__bubble', placement === 'bottom' ? 'iap-tooltip__bubble--bottom' : '', open ? 'is-open' : ''].filter(Boolean).join(' ')
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square ink checkbox with label. */
function Checkbox({
  checked,
  onChange,
  disabled,
  className = '',
  children,
  ...rest
}) {
  const cls = ['iap-check', checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "iap-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled text field. Set multiline for a textarea. */
function Input({
  label,
  hint,
  error,
  required,
  multiline,
  id,
  className = '',
  ...rest
}) {
  const fid = id || `iap-${Math.random().toString(36).slice(2, 8)}`;
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: `iap-field ${error ? 'is-invalid' : ''} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "iap-label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "iap-label__req"
  }, " *")), /*#__PURE__*/React.createElement(Field, _extends({
    id: fid,
    className: `iap-input ${multiline ? 'iap-textarea' : ''}`
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `iap-hint ${error ? 'iap-hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single radio option; group them with a shared name. */
function Radio({
  checked,
  onChange,
  name,
  value,
  disabled,
  className = '',
  children,
  ...rest
}) {
  const cls = ['iap-radio', checked ? 'is-checked' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "iap-radio__dot"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled native select with a masked chevron. */
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  placeholder,
  id,
  className = '',
  ...rest
}) {
  const fid = id || `iap-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `iap-field ${error ? 'is-invalid' : ''} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "iap-label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "iap-label__req"
  }, " *")), /*#__PURE__*/React.createElement("span", {
    className: "iap-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "iap-select",
    defaultValue: placeholder ? '' : undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `iap-hint ${error ? 'iap-hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Binary toggle; on state fills with chalkboard green. */
function Switch({
  checked,
  onChange,
  disabled,
  className = '',
  children,
  ...rest
}) {
  const cls = ['iap-switch', checked ? 'is-on' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "iap-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "iap-switch__knob"
  })), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/curso-site/Aula.jsx
try { (() => {
const {
  ModuleCard,
  Card,
  Badge,
  Button,
  IconButton,
  Tabs,
  Callout,
  Checklist,
  Icon,
  Switch,
  Tooltip,
  HandNote
} = window.IAParaProfessoresDesignSystem_518ecc;
function Aula() {
  const [tab, setTab] = React.useState('aula');
  const [lembretes, setLembretes] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '32px',
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--ink-1)',
      color: 'var(--paper-0)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--weight-semibold) 15px var(--font-body)'
    }
  }, "MA"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-sm)',
      fontWeight: 600
    }
  }, "Marina Alves"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-xs)',
      color: 'var(--text-caption)'
    }
  }, "Turma de mar\xE7o"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [['play-circle', 'Aula da semana', true], ['folder', 'Materiais', false], ['messages-square', 'Grupo da turma', false], ['award', 'Certificado', false], ['settings', 'Preferências', false]].map(([ic, label, active]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 12px',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      fontSize: 'var(--size-sm)',
      fontWeight: active ? 600 : 500,
      color: active ? 'var(--ink-1)' : 'var(--ink-3)',
      background: active ? 'var(--paper-2)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  }), label))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-caps)',
      color: 'var(--text-caption)'
    }
  }, "Seu progresso"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--paper-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '50%',
      height: '100%',
      background: 'var(--lousa-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-xs)',
      color: 'var(--text-caption)'
    }
  }, "2 de 4 encontros conclu\xEDdos"), /*#__PURE__*/React.createElement(Switch, {
    checked: lembretes,
    onChange: setLembretes
  }, "Lembretes por e-mail"))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-caps)',
      color: 'var(--accent-secondary)'
    }
  }, "Semana 03 \xB7 ao vivo hoje"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--weight-semibold) 39px/1.08 var(--font-display)',
      letterSpacing: '-.025em'
    }
  }, "Adapta\xE7\xE3o e avalia\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Salvar para depois"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    label: "Salvar"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Baixar materiais"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "Baixar"
  })), /*#__PURE__*/React.createElement(Button, {
    icon: "video"
  }, "Entrar na sala"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      background: 'var(--paper-1)',
      border: '1.5px solid var(--line-strong)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/atividade-em-sala.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: 999,
      background: 'var(--ocre-500)',
      border: '1.5px solid var(--ink-1)',
      boxShadow: 'var(--shadow-ink-sm)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 30
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    icon: "radio"
  }, "Ao vivo 19h30"))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'aula',
      label: 'Nesta aula'
    }, {
      id: 'tarefa',
      label: 'Prática da semana'
    }, {
      id: 'notas',
      label: 'Minhas notas'
    }],
    value: tab,
    onChange: setTab
  }), tab === 'aula' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr .7fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-base)',
      color: 'var(--text-muted)',
      maxWidth: '62ch'
    }
  }, "Hoje pegamos uma atividade sua e a transformamos em tr\xEAs vers\xF5es \u2014 leitura inicial, intermedi\xE1ria e avan\xE7ada \u2014 sem reescrever o enunciado do zero. Depois montamos a rubrica que devolve o crit\xE9rio para a sua m\xE3o."), /*#__PURE__*/React.createElement(Checklist, {
    items: ['Três versões de um mesmo enunciado', 'Uma rubrica de 4 níveis pronta para colar no caderno', 'Um roteiro de devolutiva de 3 linhas']
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "warning",
    icon: "alert-triangle",
    title: "Antes de rodar com a turma"
  }, "Leia as tr\xEAs vers\xF5es em voz alta. Se alguma frase n\xE3o soar como voc\xEA, ela n\xE3o vai para a sala.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "band"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Materiais"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, ['Guia de prompts (PDF)', 'Modelos de rubrica (DOC)', 'Slides do encontro'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: 'var(--size-sm)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 15
  }), t)))), /*#__PURE__*/React.createElement(HandNote, null, "imprima a rubrica antes \uD83D\uDE42"))), tab === 'tarefa' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(ModuleCard, {
    index: "01",
    title: "Traga uma atividade sua",
    description: "Qualquer uma que voc\xEA j\xE1 aplicou neste bimestre.",
    done: true
  }), /*#__PURE__*/React.createElement(ModuleCard, {
    index: "02",
    title: "Gere as tr\xEAs vers\xF5es",
    description: "Use o pedido da p\xE1gina 12 do guia.",
    duration: "20 min"
  }), /*#__PURE__*/React.createElement(ModuleCard, {
    index: "03",
    title: "Poste no grupo da turma",
    description: "Uma frase sobre o que mudou de verdade.",
    duration: "5 min"
  })), tab === 'notas' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Minhas notas"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "Anote aqui o que funcionou com a sua turma. Suas notas ficam vis\xEDveis s\xF3 para voc\xEA."), /*#__PURE__*/React.createElement("textarea", {
    className: "iap-input iap-textarea",
    placeholder: "Na semana passada, o pedido curto funcionou melhor do que o detalhado\u2026",
    style: {
      marginTop: 12
    }
  }))));
}
Object.assign(window, {
  Aula
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/curso-site/Aula.jsx", error: String((e && e.message) || e) }); }

// ui_kits/curso-site/Chrome.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon,
  IconButton
} = window.IAParaProfessoresDesignSystem_518ecc;
function Nav({
  route,
  go
}) {
  const items = [['home', 'Início'], ['programa', 'Programa'], ['aula', 'Área do aluno']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--paper-1)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none',
      font: 'var(--weight-semibold) 19px/1.05 var(--font-display)',
      letterSpacing: '-.03em',
      color: 'var(--ink-1)'
    }
  }, "IA para", /*#__PURE__*/React.createElement("br", null), "Professores"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      textDecoration: 'none',
      fontSize: 'var(--size-sm)',
      fontWeight: route === id ? 600 : 500,
      color: route === id ? 'var(--ink-1)' : 'var(--ink-3)',
      borderBottom: route === id ? '2px solid var(--terracota-500)' : '2px solid transparent',
      paddingBottom: 2
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    icon: "clock"
  }, "Turma de mar\xE7o"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('inscricao')
  }, "Inscrever-se"))));
}
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-caps)',
      color: 'var(--ink-4)'
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--size-sm)',
      color: 'var(--paper-2)',
      textDecoration: 'none'
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-1)',
      color: 'var(--paper-0)',
      padding: '56px 32px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 22px/1.05 var(--font-display)',
      letterSpacing: '-.03em'
    }
  }, "IA para", /*#__PURE__*/React.createElement("br", null), "Professores"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-sm)',
      lineHeight: 1.6,
      color: 'var(--paper-3)',
      maxWidth: '34ch'
    }
  }, "Forma\xE7\xE3o pr\xE1tica em intelig\xEAncia artificial para quem d\xE1 aula. Feita por professores, testada em sala.")), col('Curso', ['Programa', 'Datas e turmas', 'Certificado', 'Perguntas frequentes']), col('Materiais', ['Guia de prompts', 'Aula aberta', 'Newsletter']), col('Contato', ['contato@iaparaprofessores.br', 'Para escolas', 'Instagram'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--ink-2)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--size-xs)',
      color: 'var(--ink-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 IA para Professores"), /*#__PURE__*/React.createElement("span", null, "Pol\xEDtica de privacidade \xB7 Termos")));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/curso-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/curso-site/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionHeading,
  Card,
  Stat,
  Quote,
  Illustration,
  Checklist,
  HandNote,
  Callout,
  Tag,
  Icon
} = window.IAParaProfessoresDesignSystem_518ecc;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 32px 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-caps)',
      color: 'var(--accent-secondary)'
    }
  }, "Forma\xE7\xE3o de 4 semanas \xB7 online"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--weight-semibold) 61px/1.04 var(--font-display)',
      letterSpacing: '-.025em'
    }
  }, "IA que cabe na sua aula de segunda-feira"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '42ch'
    }
  }, "Voc\xEA n\xE3o precisa virar programadora. Precisa de quatro semanas, um caderno e uma turma real para testar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('inscricao')
  }, "Quero participar"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    icon: "play"
  }, "Assistir \xE0 aula aberta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-sm)',
      color: 'var(--text-caption)'
    }
  }, "Turma de mar\xE7o \xB7 40 vagas \xB7 R$ 390"), /*#__PURE__*/React.createElement(HandNote, {
    tone: "accent"
  }, "\xFAltimas 8 vagas"))), /*#__PURE__*/React.createElement(Illustration, {
    src: "../../assets/illustrations/professora-no-laptop.png",
    alt: "Professora planejando aula no laptop"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)',
      background: 'var(--bg-band)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '32px',
      display: 'flex',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "4 semanas",
    label: "Dura\xE7\xE3o total"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "45 min",
    label: "Por encontro",
    variant: "rule"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+1.200",
    label: "Professores formados",
    variant: "rule"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12 materiais",
    label: "Prontos para usar",
    variant: "rule"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "O que muda",
    title: "Voc\xEA sai com material pronto, n\xE3o com teoria",
    lead: "Cada semana termina com uma coisa que voc\xEA usa na aula seguinte. Nada de \\u201cexplorar a ferramenta\\u201d."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, [['file-text', 'Plano de aula em 15 minutos', 'Do objetivo à atividade, com a sua voz e a sua turma no meio.', 'professora-tem-ideias.png'], ['users', 'Uma atividade, três níveis', 'Adaptar leitura e enunciado sem reescrever tudo do zero.', 'atividade-em-sala.png'], ['pen-line', 'Correção com critério', 'Feedback mais rápido sem terceirizar a avaliação.', 'montando-robo.png']].map(([icon, title, desc, img]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    media: /*#__PURE__*/React.createElement("img", {
      src: `../../assets/illustrations/${img}`,
      alt: "",
      style: {}
    }),
    mediaHeight: 168
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color: 'var(--accent-primary)'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, desc))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper-0)',
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Para quem \xE9",
    title: "Se voc\xEA d\xE1 aula, \xE9 para voc\xEA"
  }), /*#__PURE__*/React.createElement(Checklist, {
    items: ['Escrever prompts que devolvem plano de aula utilizável', 'Adaptar uma mesma atividade para três níveis de leitura', 'Montar avaliações e rubricas em metade do tempo', 'Conversar com a sua escola sobre uso responsável de IA']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Educação Infantil', 'Fundamental I', 'Fundamental II', 'Ensino Médio', 'Coordenação'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "brand",
    title: "N\xE3o \xE9 um curso de ferramenta"
  }, "A gente n\xE3o ensina a clicar em bot\xE3o. Ensina a pedir bem, ler com desconfian\xE7a e decidir o que entra na sua aula."), /*#__PURE__*/React.createElement(Callout, {
    tone: "danger",
    icon: "shield-alert",
    title: "Dados dos seus alunos"
  }, "Uma aula inteira sobre o que nunca vai para uma ferramenta aberta: nome completo, nota, laudo, endere\xE7o.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Quem j\xE1 fez",
    title: "O que as turmas anteriores contam",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    name: "Marina Alves",
    role: "Ci\xEAncias, 7\xBA ano"
  }, "Sa\xED da primeira aula com uma atividade pronta. Isso nunca aconteceu em forma\xE7\xE3o nenhuma."), /*#__PURE__*/React.createElement(Quote, {
    name: "Rafael Duarte",
    role: "Hist\xF3ria, Ensino M\xE9dio"
  }, "Eu j\xE1 usava, mas de qualquer jeito. Agora tenho um jeito meu, com crit\xE9rio."), /*#__PURE__*/React.createElement(Quote, {
    name: "S\xF4nia Prado",
    role: "Coordena\xE7\xE3o pedag\xF3gica"
  }, "Levei o material da semana 4 para a reuni\xE3o de professores. Virou nossa pol\xEDtica de uso."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lousa-500)',
      color: 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '80px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--weight-semibold) 39px/1.1 var(--font-display)',
      letterSpacing: '-.025em',
      color: 'var(--paper-0)'
    }
  }, "A pr\xF3xima turma come\xE7a em 9 de mar\xE7o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-lg)',
      lineHeight: 1.5,
      color: 'var(--lousa-100)'
    }
  }, "Quatro ter\xE7as, 19h30. Gravado se voc\xEA n\xE3o puder ao vivo.")), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('inscricao')
  }, "Garantir minha vaga"))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/curso-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/curso-site/Inscricao.jsx
try { (() => {
const {
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  Card,
  Badge,
  Callout,
  Dialog,
  Toast,
  SectionHeading,
  Icon
} = window.IAParaProfessoresDesignSystem_518ecc;
function Inscricao({
  go
}) {
  const [etapa, setEtapa] = React.useState('');
  const [plano, setPlano] = React.useState('individual');
  const [aceite, setAceite] = React.useState(false);
  const [erro, setErro] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);
  const [feito, setFeito] = React.useState(false);
  const enviar = () => {
    if (!aceite) {
      setErro('Confirme que você leu os combinados.');
      return;
    }
    setErro('');
    setConfirm(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Inscri\xE7\xE3o \xB7 turma de mar\xE7o",
    title: "Falta pouco",
    lead: "S\xE3o cinco campos. A gente devolve o link da primeira aula por e-mail."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome",
    required: true,
    placeholder: "Como voc\xEA quer ser chamada"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    required: true,
    placeholder: "voce@escola.br",
    hint: "Usamos s\xF3 para as aulas e materiais."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Etapa em que voc\xEA atua",
    required: true,
    placeholder: "Escolha uma op\xE7\xE3o",
    value: etapa,
    onChange: e => setEtapa(e.target.value),
    options: ['Educação Infantil', 'Fundamental I', 'Fundamental II', 'Ensino Médio', 'Coordenação / gestão']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Escola (opcional)",
    placeholder: "Nome da escola"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "O que voc\xEA quer resolver nessas 4 semanas?",
    multiline: true,
    placeholder: "Ex.: adaptar atividades para uma turma com tr\xEAs n\xEDveis de leitura",
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iap-label"
  }, "Como voc\xEA vai pagar"), /*#__PURE__*/React.createElement(Radio, {
    name: "plano",
    value: "individual",
    checked: plano === 'individual',
    onChange: setPlano
  }, "Individual \u2014 R$ 390, em at\xE9 6x"), /*#__PURE__*/React.createElement(Radio, {
    name: "plano",
    value: "escola",
    checked: plano === 'escola',
    onChange: setPlano
  }, "Pela escola \u2014 nota fiscal e certificado institucional")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: aceite,
    onChange: v => {
      setAceite(v);
      setErro('');
    }
  }, "Li os combinados de turma e a pol\xEDtica de dados"), erro && /*#__PURE__*/React.createElement("span", {
    className: "iap-hint iap-hint--error"
  }, erro)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: enviar
  }, "Confirmar inscri\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => go('programa')
  }, "Rever o programa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    icon: "clock"
  }, "\xDAltimas 8 vagas"), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)',
      marginTop: 8
    }
  }, "Turma de mar\xE7o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 12,
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, [['calendar', '4 terças, a partir de 9 de março'], ['clock', '19h30 às 20h15, ao vivo'], ['video', 'Gravações por 12 meses'], ['award', 'Certificado de 20 horas']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    style: {
      color: 'var(--accent-primary)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 16,
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 31px/1 var(--font-display)'
    }
  }, "R$ 390"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-caption)'
    }
  }, "ou 6x de R$ 68"))), /*#__PURE__*/React.createElement(Callout, {
    tone: "brand",
    icon: "undo-2",
    title: "Sem risco"
  }, "Se a primeira aula n\xE3o servir para voc\xEA, devolvemos o valor integral em at\xE9 7 dias."))), confirm && /*#__PURE__*/React.createElement(Dialog, {
    title: "Confirmar inscri\xE7\xE3o",
    onClose: () => setConfirm(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setConfirm(false)
    }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setConfirm(false);
        setFeito(true);
      }
    }, "Confirmar"))
  }, "Vamos reservar sua vaga na turma de 9 de mar\xE7o e enviar o link da primeira aula para o e-mail informado."), feito && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    onClose: () => setFeito(false)
  }, "Inscri\xE7\xE3o confirmada. Verifique seu e-mail.")));
}
Object.assign(window, {
  Inscricao
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/curso-site/Inscricao.jsx", error: String((e && e.message) || e) }); }

// ui_kits/curso-site/Programa.jsx
try { (() => {
const {
  SectionHeading,
  ModuleCard,
  Tabs,
  Card,
  Button,
  Badge,
  Callout,
  Illustration,
  Icon
} = window.IAParaProfessoresDesignSystem_518ecc;
const MODULOS = [['01', 'A IA como colega de planejamento', 'Onde ela ajuda de verdade, onde ela erra feio, e como você mantém a decisão pedagógica.', '45 min', 'Vídeo + prática'], ['02', 'Prompts que viram plano de aula', 'A estrutura de pedido que devolve objetivo, atividade e fechamento na sua voz.', '45 min', 'Vídeo + modelo'], ['03', 'Adaptação e avaliação', 'Uma atividade em três níveis; rubricas e devolutivas com critério seu.', '50 min', 'Oficina ao vivo'], ['04', 'Uso responsável na escola', 'Dados de aluno, plágio, combinados de turma e conversa com a coordenação.', '45 min', 'Roda de conversa']];
function Programa({
  go
}) {
  const [tab, setTab] = React.useState('modulos');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 56,
      alignItems: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "O programa",
    title: "Quatro semanas, uma pr\xE1tica nova",
    lead: "Ter\xE7as, 19h30, ao vivo. Cada encontro entrega um material que voc\xEA usa na aula seguinte \u2014 e fica com voc\xEA para sempre."
  }), /*#__PURE__*/React.createElement(Illustration, {
    src: "../../assets/illustrations/professora-tem-ideias.png",
    alt: "Professora conversando com um rob\xF4",
    variant: "framed"
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'modulos',
      label: 'Módulos'
    }, {
      id: 'materiais',
      label: 'Materiais'
    }, {
      id: 'certificado',
      label: 'Certificado'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 32
    }
  }, tab === 'modulos' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 12,
      maxWidth: 820
    }
  }, MODULOS.map(([i, t, d, dur, fmt]) => /*#__PURE__*/React.createElement(ModuleCard, {
    key: i,
    index: i,
    title: t,
    description: d,
    duration: dur,
    format: fmt
  })), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    icon: "calendar",
    title: "N\xE3o pode ao vivo?",
    style: {
      marginTop: 12
    }
  }, "Todos os encontros ficam gravados por 12 meses, com transcri\xE7\xE3o e os materiais anexos.")), tab === 'materiais' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, [['book-open', 'Guia de prompts', '32 pedidos prontos, por etapa de ensino'], ['clipboard-list', 'Modelos de rubrica', '5 rubricas editáveis em documento'], ['file-check', 'Combinados de turma', 'Cartaz e texto para enviar às famílias'], ['presentation', 'Slides da formação', 'Para levar à sua reunião pedagógica'], ['messages-square', 'Grupo de turma', 'Dúvidas respondidas durante as 4 semanas'], ['repeat', 'Encontro de retomada', 'Uma sessão extra 30 dias depois']].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    style: {
      color: 'var(--accent-primary)'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)'
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, d)))), tab === 'certificado' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Incluso"), /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--text-h3)',
      marginTop: 8
    }
  }, "Certificado de 20 horas"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "Emitido em nome da sua escola quando a inscri\xE7\xE3o \xE9 institucional. Aceito como forma\xE7\xE3o continuada na maioria das redes.")), /*#__PURE__*/React.createElement(Callout, {
    tone: "warning",
    icon: "alert-triangle",
    title: "Antes de contar como carga hor\xE1ria"
  }, "Confirme com a sua secretaria de educa\xE7\xE3o \u2014 as regras de aproveitamento variam por rede."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginTop: 56,
      paddingTop: 32,
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go('inscricao')
  }, "Inscrever-se na turma de mar\xE7o"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-sm)',
      color: 'var(--text-caption)'
    }
  }, "R$ 390 \xB7 em at\xE9 6x \xB7 reembolso em 7 dias")));
}
Object.assign(window, {
  Programa
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/curso-site/Programa.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.HandNote = __ds_scope.HandNote;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
