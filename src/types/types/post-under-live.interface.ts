 
interface User {
    id: number;
    name: string;
    mobile: string;
    avatar: string;
    limitsByServices: any[];
}

interface Service {
    id: number;
    name: string;
    slug: string;
}

interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface PostUnderLive {
    id: number;
    slug: string;
    creator: User;
    publishedBy: User;
    service: Service;
    category: Category;
    title: string;
    body: string;
    video_url: string;
    is_active: number;
    is_special: number;
    is_under_live: number;
    tags: any[];
    status: string;
    attachments: any[];
    created_at: string;
    updated_at: string;
}