/**
 * A numbered course-module row.
 */
export interface ModuleCardProps {
  /** Displayed number, e.g. "01". */
  index?: React.ReactNode;
  title: string;
  description?: string;
  /** e.g. "45 min". */
  duration?: string;
  /** e.g. "Vídeo + prática". */
  format?: string;
  /** Replaces the number with a check and fills it with ink. */
  done?: boolean;
  className?: string;
}
export declare function ModuleCard(props: ModuleCardProps): JSX.Element;
