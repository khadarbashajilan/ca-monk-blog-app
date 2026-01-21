import { useBlog } from '@/hooks/useBlog';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { formatDate } from '@/lib/utils';

interface BlogDetailProps {
  blogId: string | null;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useBlog(blogId);

  /* ---------------- EMPTY STATE ---------------- */
  if (!blogId) {
   return (
  <div className="flex items-center justify-center min-h-screen  p-12 rounded-2xl bg-white text-center">
    <div className="max-w-md">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No blog selected
      </h3>
      <p className="text-sm text-gray-600">
        Select a blog post from the list to start reading
      </p>
    </div>
  </div>
);

  }

  /* ---------------- LOADING STATE ---------------- */
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border-blur p-6 space-y-6">
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-40" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  /* ---------------- ERROR STATE ---------------- */
  if (error) {
    return (
      <div className="bg-white  rounded-2xl p-12 text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Failed to load blog
        </h3>
        <p className="text-sm text-gray-600">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </p>
      </div>
    );
  }

  if (!blog) return null;

  /* ---------------- CONTENT ---------------- */
  return (
    <article className="bg-white rounded-2xl border-blur shadow-sm overflow-hidden">
      {/* Cover */}
      <div className="relative h-72 bg-gray-100">
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No cover image
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-6 sm:px-8 py-8 space-y-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge key={cat} className="text-xs font-medium">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title + Meta */}
        <header className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {formatDate(blog.date)}
          </div>
        </header>

        <div className="h-px bg-gray-200 max-w-3xl" />

        {/* Content */}
        <div className="prose prose-gray max-w-3xl">
          <p className="whitespace-pre-wrap leading-relaxed text-gray-700">
            {blog.content}
          </p>
        </div>
      </div>
    </article>
  );
}
