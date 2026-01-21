import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/services/api';

export function useBlog(id: string | null) {
    return useQuery({
        queryKey: ['blog', id],
        queryFn: () => blogApi.getBlogById(id!),
        enabled: !!id,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
