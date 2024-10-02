type ITag = {
  id: number;
  name: string;
  is_active: number;
  important: number;
  image: any[];
};
export interface FilterState {
    title: string;
    tag: ITag[];
    service: any;
    date: string;
  }