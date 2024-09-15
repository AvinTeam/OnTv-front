// import { Tab } from "@/types/tab.type"
export type NewestCardProps = {
  data: {
    alt: string;
    description: string;
    index: number,
    title: string;
    seen: number;
    slug: string;
    id: number;
    path: string;
    poster: any[];
    program: {
      id: number;
      slug: string;
      is_paid: boolean;
      free_episodes: number;
    };
    video:{
      duration: number;
      hls_playlist: string;
      mp4_videos: any[];
      status: string;
      thumbnail_url: string;
      video_url: string
    }
  };
  path?:string
};
