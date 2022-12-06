import { gql } from '@apollo/client';

export const getAllItems = gql`
	query {
		getAllItems {
			objectID
			id
			name
			description
			plaintext
			into
			from
			goldTotalCost
			tags
		}
	}
`;
