export interface IconProps {
  /** Lucide icon slug, e.g. "arrow-right", "lightbulb", "check". */
  name: string;
  /** Square size in px. Default 20. */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
