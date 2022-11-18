export const typeDefs = `
	type Query {
		info: String!
		feed: [Link!]!
	}

	type Mutation {
		post(url: String!, description: String!): Link!
	}

	type Link {
		id: ID!
		description: String!
		url: String!
	}
`;
