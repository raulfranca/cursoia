export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; replaces hint and turns the field terracotta. */
  error?: string;
  required?: boolean;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
  className?: string;
}
export declare function Input(props: InputProps): JSX.Element;
