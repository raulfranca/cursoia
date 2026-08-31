export interface TagProps {
  selected?: boolean;
  /** Pass to make the tag a button. */
  onSelect?: (e: React.MouseEvent) => void;
  /** Pass to show an inline remove affordance. */
  onRemove?: (e: React.MouseEvent) => void;
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
