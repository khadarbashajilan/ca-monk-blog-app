import type { Blog, CreateBlogDTO } from '@/types/blog';

const API_BASE_URL = 'http://localhost:3001';

export const blogApi = {
    async getAllBlogs(): Promise<Blog[]> {
        const response = await fetch(`${API_BASE_URL}/blogs`);
        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }
        return response.json();
    },

    async getBlogById(id: string): Promise<Blog> {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch blog with id: ${id}`);
        }
        return response.json();
    },

    async createBlog(blog: CreateBlogDTO): Promise<Blog> {
        const response = await fetch(`${API_BASE_URL}/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...blog,
                id: Date.now().toString(),
                date: new Date().toISOString(),
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to create blog');
        }
        return response.json();
    },
};
