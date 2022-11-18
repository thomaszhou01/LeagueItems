const { ApolloServer } = require('apollo-server');
import typeDefs from 'schema.js';

let links = [
	{
		id: 'link-0',
		url: 'www.howtographql.com',
		description: 'Fullstack tutorial for GraphQL',
	},
];

const resolvers = {
	Query: {
		info: () => `This is the API of a Hackernews Clone`,
		feed: () => links,
	},
	Mutation: {
		// 2
		post: (parent, args) => {
			let idCount = links.length;

			const link = {
				id: `link-${idCount++}`,
				description: args.description,
				url: args.url,
			};
			links.push(link);
			return link;
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
