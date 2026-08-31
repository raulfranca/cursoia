export interface ChecklistProps {
  items: React.ReactNode[];
  /** Lucide slug for the marker. Default "check". */
  icon?: string;
  className?: string;
}
export declare function Checklist(props: ChecklistProps): JSX.Element;
