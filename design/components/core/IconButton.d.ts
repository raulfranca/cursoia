export interface IconButtonProps {
  /** Lucide slug. */
  icon: string;
  /** Accessible label, also used as the title tooltip. */
  label: string;
  variant?: 'outline' | 'solid' | 'bare';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
