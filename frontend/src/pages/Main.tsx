import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
const FILMS_QUERY = gql`
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

function Main() {
	const { data, loading, error } = useQuery(FILMS_QUERY);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	console.log(data);
	console.log(data['getAllItems']);
	return (
		<div>
			<h1>League Item Calculator</h1>
			<img
				alt={'Orianna'}
				src={
					'http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/Aatrox.png'
				}
			/>

			<ul>
				{data.getAllItems.map((feed: any) => (
					<li key={feed.objectID}>{feed.name}</li>
				))}
			</ul>
		</div>
	);
}

export default Main;
