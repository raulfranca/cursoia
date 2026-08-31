export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string) => void;
  /** Shared group name. */
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare function Radio(props: RadioProps): JSX.Element;
