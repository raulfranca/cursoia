/**
 * Tinted advisory block for tips and cautions.
 */
export interface CalloutProps {
  tone?: 'brand' | 'warning' | 'danger' | 'info';
  /** Lucide slug; default "lightbulb". Pass null to omit. */
  icon?: string | null;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
