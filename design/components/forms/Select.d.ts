export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options?: (SelectOption | string)[];
  /** Disabled first option shown when nothing is chosen. */
  placeholder?: string;
  className?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
