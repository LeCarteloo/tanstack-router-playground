import { queryOptions } from '@tanstack/react-query';
import { getPost, getPosts } from '.';

export const queryKeys = {
	all: () => ['post'],
	getPost: (postId: string) => [...queryKeys.all(), postId],
	getPosts: () => [...queryKeys.all(), 'list'],
};

export const getPostQueryOptions = (postId: string) =>
	queryOptions({
		queryKey: queryKeys.getPost(postId),
		queryFn: () => getPost(postId),
	});

export const getPostsQueryOptions = (search?: string) =>
	queryOptions({
		queryKey: queryKeys.getPosts(),
		queryFn: () => getPosts(search ?? ''),
	});
