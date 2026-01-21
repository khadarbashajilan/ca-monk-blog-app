import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/services/api';

export function useBlogs() {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: blogApi.getAllBlogs,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
