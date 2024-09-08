// import { Tab } from "@/types/tab.type"
export type NewestCardProps = {
  data: {
    alt: string;
    description: string;
    index: number,
    title: string;
    seen: number;
    id: number;
    path: string;
    poster: any[];
    program: {
      id: number;
      is_paid: boolean;
      free_episodes: number;
    };
  };
};
