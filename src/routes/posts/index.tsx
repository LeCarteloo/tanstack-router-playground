import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

const searchSchema = z.object({
	q: z.string().catch(""),
});

export const Route = createFileRoute("/posts/")({
	component: RouteComponent,
	validateSearch: searchSchema,
	loaderDeps: ({ search: { q } }) => ({
		q,
	}),
	loader: async ({ deps }) => {
		const posts = ["post1", "post2", "post3"];

		return {
			posts: posts.filter((post) => post === deps.q),
		};
	},
});

function RouteComponent() {
	const { posts } = Route.useLoaderData();
	const { q } = Route.useSearch();

	return (
		<div>
			<h1>Search: {q}</h1>
			{posts.map((post) => (
				<div key={post}>
					<Link
						to={"/posts/$postId"}
						params={{
							postId: post,
						}}
					>
						{post}
					</Link>
				</div>
			))}
		</div>
	);
}
