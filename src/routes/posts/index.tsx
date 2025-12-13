import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { z } from 'zod';
import { useDeletePost } from './-api/mutation';
import { getPostsQueryOptions } from './-api/query';

const searchSchema = z.object({
	q: z.string().optional().catch(''),
});

export const Route = createFileRoute('/posts/')({
	component: RouteComponent,
	validateSearch: searchSchema,
	loaderDeps: ({ search }) => {
		return {
			q: search.q,
		};
	},
	loader: async ({ deps, context }) => {
		context.queryClient.ensureQueryData(getPostsQueryOptions(deps.q));
	},
	pendingComponent: () => <div>Loading list of posts...</div>,
});

function RouteComponent() {
	const { q } = Route.useSearch();
	const { data: posts } = useSuspenseQuery(getPostsQueryOptions(q));
	const { mutate } = useDeletePost();

	return (
		<div>
			<h1>Search Param: {q}</h1>
			<h1>Posts: {q}</h1>
			{posts.map(({ id, title }) => (
				<div key={id}>
					<Link
						to={'/posts/$postId'}
						params={{
							postId: id,
						}}
						preload="intent"
					>
						{title}
					</Link>
					<button type="button" onClick={() => mutate(id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
}
