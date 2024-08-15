interface Creator {
  id: number;
  name: string;
  mobile: string;
  avatar: string;
  birthday: string | null;
  gender: number;
  limitsByServices: any[];
}

interface Program {
  id: number;
  creator: Creator | any;
  title: string;
  description: string;
  color: string;
  status: "published";
  poster: any[];
  banner: any[];
  tags: any[];
  casts: any[];
  service: any;
  averageOfScore: number | null;
}

export type SpecialCardProps = {
 data:{
  id: number;
  creator: Creator;
  program: Program;
  title: string;
  description: string;
  seen: number;
  status: "published";
  poster: any[];
 }
};
