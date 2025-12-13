import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '.';
import { queryKeys } from './query';

export const useDeletePost = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (postId: string) => deletePost(postId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKeys.getPosts() });
		},
	});
};
