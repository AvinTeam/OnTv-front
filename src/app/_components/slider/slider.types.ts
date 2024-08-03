import { ElementType } from "react";

export type SliderProps = {
  data: any[];
  Component: ElementType;
  displayCount: number;
  isShowIcon: boolean;
  smCount?: number;
  mdCount?: number;
  lgCount?: number;
};
