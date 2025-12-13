interface Post {
	id: string;
	title: string;
}

const posts = [
	{
		id: '1',
		title: 'Post 1',
	},
	{
		id: '2',
		title: 'Post 2',
	},
	{
		id: '3',
		title: 'Post 3',
	},
	{
		id: '4',
		title: 'Post 4',
	},
];

export const getPosts: (search: string) => Promise<Array<Post>> = async (
	search,
) => {
	return await new Promise((resolve) =>
		setTimeout(() => {
			if (search === '') {
				resolve(posts);
			}

			resolve(posts.filter((post) => post.id === search));
		}, 1000),
	);
};

export const getPost: (id: string) => Promise<Post | undefined> = async (
	id,
) => {
	return await new Promise((resolve) =>
		setTimeout(() => resolve(posts.find((post) => post.id === id)), 1000),
	);
};

export const deletePost: (id: string) => Promise<void> = async (id) => {
	return await new Promise((resolve) => {
		const index = posts.findIndex((post) => post.id === id);

		if (index !== -1) {
			posts.splice(index, 1);
		}

		resolve();
	});
};
