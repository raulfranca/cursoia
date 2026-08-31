export interface BadgeProps {
  tone?: 'brand' | 'warning' | 'danger' | 'info' | 'neutral' | 'outline';
  /** Lucide slug rendered at 12px before the label. */
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
