type SliderItem = {
  imageUrl: string;
  path: string;
  title: string;
  description: string;
};
export type SliderProps = {
  data: SliderItem[];
  isDescription?: boolean;
};
