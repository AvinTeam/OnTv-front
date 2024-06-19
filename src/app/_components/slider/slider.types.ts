type SliderItem = {
  path: string;
  descriptions: {title: string; dec: string};
  logo: string;
  alt: string;
};
export type SliderProps = {
  data: SliderItem[];
  isDescription?: boolean;
};
