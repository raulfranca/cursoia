/**
 * Opens a page section with eyebrow, title and lead.
 */
export interface SectionHeadingProps {
  /** Short uppercase mono kicker. */
  eyebrow?: string;
  title?: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
