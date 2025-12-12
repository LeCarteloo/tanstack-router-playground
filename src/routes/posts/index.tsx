import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "./-api";

const searchSchema = z.object({
	q: z.string().catch("").optional(),
});

export const Route = createFileRoute("/posts/")({
	component: RouteComponent,
	validateSearch: searchSchema,
	loaderDeps: ({ search: { q } }) => ({
		q,
	}),
	loader: async ({ deps }) => {
		const posts = await getPosts();

		if (!deps.q) {
			return {
				posts,
			};
		}

		return {
			posts: posts.filter((post) => post.id === deps.q),
		};
	},
});

function RouteComponent() {
	const { posts } = Route.useLoaderData();
	const { q } = Route.useSearch();

	return (
		<div>
			<h1>Search Param: {q}</h1>
			<h1>Posts: {q}</h1>
			{posts.map(({ id, title }) => (
				<div key={id}>
					<Link
						to={"/posts/$postId"}
						params={{
							postId: id,
						}}
					>
						{title}
					</Link>
				</div>
			))}
		</div>
	);
}
