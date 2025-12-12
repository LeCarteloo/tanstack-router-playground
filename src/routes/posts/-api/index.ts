interface Post {
	id: string;
	title: string;
}

const posts = [
	{
		id: "1",
		title: "Post 1",
	},
	{
		id: "2",
		title: "Post 2",
	},
	{
		id: "3",
		title: "Post 3",
	},
	{
		id: "4",
		title: "Post 4",
	},
];

export const getPosts: () => Promise<Array<Post>> = async () => {
	return await new Promise((resolve) => setTimeout(() => resolve(posts), 1000));
};

export const getPost: (id: string) => Promise<Post | undefined> = async (
	id,
) => {
	return await new Promise((resolve) =>
		setTimeout(() => resolve(posts.find((post) => post.id === id)), 1000),
	);
};
