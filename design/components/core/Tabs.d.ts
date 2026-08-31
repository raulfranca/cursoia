export interface TabItem { id?: string; label: string; disabled?: boolean }
export interface TabsProps {
  items: TabItem[];
  /** Active item id (falls back to label). */
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
