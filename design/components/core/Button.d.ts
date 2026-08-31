/**
 * The brand's action control.
 */
export interface ButtonProps {
  /** primary = chalkboard green fill; secondary = ink outline; ghost = text only; ink = ochre with drawn offset shadow. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'ink';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide slug rendered before the label. */
  icon?: string;
  /** Lucide slug rendered after the label. */
  iconRight?: string;
  block?: boolean;
  disabled?: boolean;
  /** Render as another element, e.g. "a". Default "button". */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
