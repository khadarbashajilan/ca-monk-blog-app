import { useState } from 'react';
import { useCreateBlog } from '@/hooks/useCreateBlog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface CreateBlogFormProps {
    onSuccess?: () => void;
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [content, setContent] = useState('');

    const { mutate: createBlog, isPending } = useCreateBlog();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !categories || !description || !coverImage || !content) {
            alert('Please fill in all fields');
            return;
        }

        const categoryArray = categories.split(',').map((cat) => cat.trim().toUpperCase());

        createBlog(
            {
                title,
                category: categoryArray as any,
                description,
                coverImage,
                content,
            },
            {
                onSuccess: () => {
                    setTitle('');
                    setCategories('');
                    setDescription('');
                    setCoverImage('');
                    setContent('');
                    onSuccess?.();
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-7">
            <div className="space-y-3">
                <label htmlFor="title" className="block text-base font-semibold text-gray-900">
                    Blog Title <span className="text-blue-600">*</span>
                </label>
                <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a catchy title for your blog"
                    required
                />
            </div>

            <div className="space-y-3">
                <label htmlFor="categories" className="block text-base font-semibold text-gray-900">
                    Categories <span className="text-blue-600">*</span>
                </label>
                <Input
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="FINANCE, TECH, CAREER"
                    required
                />
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Separate multiple categories with commas
                </p>
            </div>

            <div className="space-y-3">
                <label htmlFor="description" className="block text-base font-semibold text-gray-900">
                    Short Description <span className="text-blue-600">*</span>
                </label>
                <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write a brief summary of your blog post..."
                    rows={3}
                    required
                />
            </div>

            <div className="space-y-3">
                <label htmlFor="coverImage" className="block text-base font-semibold text-gray-900">
                    Cover Image URL <span className="text-blue-600">*</span>
                </label>
                <Input
                    id="coverImage"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    type="url"
                    required
                />
            </div>

            <div className="space-y-3">
                <label htmlFor="content" className="block text-base font-semibold text-gray-900">
                    Blog Content <span className="text-blue-600">*</span>
                </label>
                <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your full blog content here..."
                    rows={10}
                    required
                />
            </div>

            <div className="pt-6">
                <Button type="submit" disabled={isPending} className="w-full h-12 text-base">
                    {isPending ? (
                        <div className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Creating Blog...
                        </div>
                    ) : (
                        'Create Blog Post'
                    )}
                </Button>
            </div>
        </form>
    );
}
