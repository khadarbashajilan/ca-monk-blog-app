import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blogApi } from '@/services/api';
import type { CreateBlogDTO } from '@/types/blog';

export function useCreateBlog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (blog: CreateBlogDTO) => blogApi.createBlog(blog),
        onSuccess: () => {
            // Invalidate and refetch blogs list
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
}
