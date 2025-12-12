import { createFileRoute } from "@tanstack/react-router";
import { getPost } from "./-api";

export const Route = createFileRoute("/posts/$postId")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const post = await getPost(params.postId);

		return {
			post,
		};
	},
	pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
	const { post } = Route.useLoaderData();

	return (
		<div>
			This is {post?.title} with ID - {post?.id}{" "}
		</div>
	);
}
