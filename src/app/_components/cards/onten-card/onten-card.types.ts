interface Program {
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
}

export interface OntenCardProps {
  id: number;
  program: Program;
}
