import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { getPostQueryOptions } from './-api/query';

export const Route = createFileRoute('/posts/$postId')({
	component: RouteComponent,
	loader: async ({ params, context }) => {
		context.queryClient.ensureQueryData(getPostQueryOptions(params.postId));
	},
	pendingComponent: () => <div>Loading post...</div>,
});

function RouteComponent() {
	const params = Route.useParams();
	const { data: post } = useSuspenseQuery(getPostQueryOptions(params.postId));

	return (
		<div>
			This is {post?.title} with ID - {post?.id}{' '}
		</div>
	);
}
