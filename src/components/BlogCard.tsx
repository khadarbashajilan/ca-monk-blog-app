import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import type { Blog } from '@/types/blog';

interface BlogCardProps {
    blog: Blog;
    isSelected: boolean;
    onClick: () => void;
}

export function BlogCard({ blog, isSelected, onClick }: BlogCardProps) {
    return (
        <Card
            role="button"
            tabIndex={0}
            className={`cursor-pointer transition-all duration-200 ${isSelected
                ? 'ring-2 ring-blue-500 shadow-xl scale-[1.01] bg-blue-50/30'
                : 'hover:shadow-xl hover:scale-[1.005] hover:border-blue-200'
                }`}
            onClick={onClick}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            <CardHeader className="space-y-3">
                <div className="flex flex-wrap gap-2">
                    {blog.category.map((cat) => (
                        <Badge key={cat} className="text-xs font-medium">{cat}</Badge>
                    ))}
                </div>
                <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors text-lg leading-snug">
                    {blog.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1.5 text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(blog.date)}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-base text-gray-700 leading-relaxed line-clamp-2">
                    {blog.description}
                </p>
            </CardContent>
        </Card>
    );
}
