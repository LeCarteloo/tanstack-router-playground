import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Route = createRootRoute({
	component: () => (
		<>
			<QueryClientProvider client={queryClient}>
				<div>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/posts">Posts</Link>
					<hr />
				</div>
				<Outlet />
				<TanStackRouterDevtools position="bottom-right" />
				<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
			</QueryClientProvider>
		</>
	),
});
