import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";

interface RouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/posts">Posts</Link>
				<hr />
			</div>
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
			<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
		</>
	),
});
