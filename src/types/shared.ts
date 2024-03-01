import { ReactElement } from "react";
import { IconType } from "react-icons";

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
  className?: string;
};

export type TChildren = {
  children?: React.ReactNode;
  classNames?: string;
};

export type TInput = {
  type?: string;
  label: string;
  placeholder: string;
  hasLabel?: boolean;
  controlData?: any;
  rules?: any;
  name: string;
  errors?: any;
};

export type ListDataItemFunc = {
  value: string;
  label: string;
}[];

export interface ListDataFunc extends TInput {
  listData: ListDataItemFunc;
  selectionMode?: "single" | "multiple" | "none";
}

export type UserTypeFunc = {
  id: number;
  title: string;
  desc: string;
  icon: ReactElement<IconType>;
  slug: string;
  stitle: string;
};
