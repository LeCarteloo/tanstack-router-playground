import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link
					to="/posts"
					search={{
						q: "post1",
					}}
				>
					Posts
				</Link>

				<hr />
			</div>
			<Outlet />
			<TanStackDevtools
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtools />,
						defaultOpen: true,
					},
				]}
			/>
		</>
	),
});
