export interface TooltipProps {
  label: string;
  placement?: 'top' | 'bottom';
  /** Force the bubble visible (for specimens/screenshots). */
  open?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
