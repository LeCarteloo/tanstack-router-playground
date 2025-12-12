import { createFileRoute } from "@tanstack/react-router";
import { getPostQueryOptions } from "./-api/query";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/posts/$postId")({
	component: RouteComponent,
	loader: async ({ params, context }) => {
		context.queryClient.prefetchQuery(getPostQueryOptions(params.postId));
	},
	pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
	const params = Route.useParams();
	const { data: post } = useQuery(getPostQueryOptions(params.postId));

	return (
		<div>
			This is {post?.title} with ID - {post?.id}{" "}
		</div>
	);
}
