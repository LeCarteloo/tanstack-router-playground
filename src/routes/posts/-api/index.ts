interface Post {
	id: string;
	title: string;
}

export const getPosts: () => Promise<Array<Post>> = async () => {
	return await new Promise((resolve) =>
		setTimeout(
			() =>
				resolve([
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
				]),
			1000,
		),
	);
};
