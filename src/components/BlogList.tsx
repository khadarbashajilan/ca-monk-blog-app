import { useBlogs } from '@/hooks/useBlogs';
import { BlogCard } from './BlogCard';
import { Skeleton } from './ui/skeleton';

interface BlogListProps {
    selectedBlogId: string | null;
    onSelectBlog: (id: string) => void;
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
    const { data: blogs, isLoading, error } = useBlogs();

    if (isLoading) {
        return (
            <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 space-y-3">
                        <div className="flex gap-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-16" />
                        </div>
                        <Skeleton className="h-6 w-4/5" />
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Failed to load blogs</h3>
                <p className="text-base text-gray-600 mb-2">{error instanceof Error ? error.message : 'An error occurred'}</p>
                <p className="text-sm text-gray-500">Make sure the JSON server is running on port 3001</p>
            </div>
        );
    }

    if (!blogs || blogs.length === 0) {
        return (
            <div className="text-center p-16 bg-white rounded-2xl border-2 border-dashed border-gray-300">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">No blogs yet</h3>
                <p className="text-base text-gray-600">Click "Create New Blog" to publish your first post</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col  gap-4">
            {blogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                    isSelected={selectedBlogId === blog.id}
                    onClick={() => onSelectBlog(blog.id)}
                />
            ))}
        </div>
    );
}
