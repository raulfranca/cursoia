/**
 * Paper surface used for every boxed content block.
 */
export interface CardProps {
  /** default = paper + hairline; band = darker paper; ink = 1.5px ink border + drawn shadow; flat = square corners. */
  variant?: 'default' | 'band' | 'ink' | 'flat';
  interactive?: boolean;
  /** Media node (usually an <img> or <Illustration>) shown above the body. */
  media?: React.ReactNode;
  /** Height in px of the media band. Default 180. */
  mediaHeight?: number;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
