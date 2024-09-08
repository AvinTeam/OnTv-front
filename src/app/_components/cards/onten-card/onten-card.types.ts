export interface Program {
  id: number;
  creator: any;
  title: string;
  description: string;
  color: string;
  status: any;
  poster: any[];
  banner: any[];
  tags: any[];
  casts: any[];
  service: any;
  seen: number;
  averageOfScore: number | null;
  is_paid: boolean,
  free_episodes: number,
}

export type IProps = {
  id: number;
  program: Program;
};

export interface OntenCardProps {
  data: Program | IProps;
}
