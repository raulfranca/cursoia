export interface ToastProps {
  tone?: 'success' | 'danger' | 'info';
  /** Override the tone's default Lucide slug. */
  icon?: string;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
