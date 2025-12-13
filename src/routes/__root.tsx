import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

interface RouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<nav className="p-4 space-x-2">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/posts">Posts</Link>
			</nav>
			<hr className="mb-2" />
			<main className="p-4">
				<Outlet />
			</main>
			<TanStackRouterDevtools position="bottom-right" />
			<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
		</>
	),
});
