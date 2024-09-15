interface Video {
  hls_playlist: string;
  thumbnail_url: string;
  video_url: string;
  status: string;
  mp4_videos: Array<string>;
}

interface Program {
  id: number;
  title: string;
  description: string;
  color: string;
  poster: Array<any>;
  banner: Array<any>;
  slug:string;
  is_paid: number;
  tags: Array<string>;
  casts: Array<any>;
  service: any;
  averageOfScore: number | null;
  seen: number;
  created_at: string;
}

export interface Episode {
  Episode: {
    id: number;
    title: string;
    description: string;
    accessible: boolean;
    slug: string;
    seen: number;
    poster: Array<any>;
    video: Video;
    created_at: string;
    program: Program;
  };
}
