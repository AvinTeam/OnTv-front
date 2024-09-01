interface Creator {
  id: number;
  name: string;
  mobile: string;
  avatar: any[];
  birthday: string;
  gender: number;
  limitsByServices: any[];
  subscribe: number;
}
export interface Comment {
  comment: string;
  created_at: string;
  creator: Creator;
  dislikes_count: number;
  likes_count: number;
  id: number;
  isDisLikedBy: boolean;
  isLikedBy: boolean;
  children: any[];
}
