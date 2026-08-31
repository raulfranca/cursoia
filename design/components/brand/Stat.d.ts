export interface StatProps {
  value: React.ReactNode;
  label: string;
  /** rule = hairline on the left edge. */
  variant?: 'plain' | 'rule';
  className?: string;
}
export declare function Stat(props: StatProps): JSX.Element;
