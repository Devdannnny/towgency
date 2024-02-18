export type ListSubItemFunc = {
  id: number;
  title: string;
  url: string;
}[];
export type ListItemFunc = {
  title: string;
  isActive: boolean;
  url: string;
  hasDropdown?: boolean;
  sub: ListSubItemFunc;
};

export type TChildren = {
  children?: React.ReactNode;
  classNames?: string;
};
