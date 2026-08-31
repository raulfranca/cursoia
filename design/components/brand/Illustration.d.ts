/**
 * Frame for the brand's monoline ink illustrations.
 */
export interface IllustrationProps {
  src: string;
  alt?: string;
  /** plain = bare; framed = hairline border; ink = ink border + drawn shadow. */
  variant?: 'plain' | 'framed' | 'ink';
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Illustration(props: IllustrationProps): JSX.Element;
