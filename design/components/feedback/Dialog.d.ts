export interface DialogProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  /** Footer node, usually two Buttons. */
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
