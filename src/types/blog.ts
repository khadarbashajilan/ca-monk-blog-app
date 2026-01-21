export type Category = 'FINANCE' | 'TECH' | 'CAREER' | 'EDUCATION' | 'REGULATIONS' | 'LIFESTYLE';

export interface Blog {
    id: string;
    title: string;
    category: Category[];
    description: string;
    date: string;
    coverImage: string;
    content: string;
}

export interface CreateBlogDTO {
    title: string;
    category: Category[];
    description: string;
    coverImage: string;
    content: string;
}
