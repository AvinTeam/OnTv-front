interface Creator {
  id: number;
  name: string;
  mobile: string;
  avatar: string;
  birthday: string;
  gender: number;
  limitsByServices: any[];
  subscribe: number;
}

interface Commentable {
  id: number;
  user_id: number;
  program_id: number;
  title: string;
  description: string;
  seen: number;
  status: string;
  created_at: string;
  updated_at: string;
}
export interface Comment {
  comment: string;
  commentable: Commentable;
  created_at: string;
  creator: Creator;
}
