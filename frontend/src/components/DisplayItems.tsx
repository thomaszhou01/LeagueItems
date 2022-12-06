import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
const FILMS_QUERY = gql`
	query {
		feed {
			id
			url
			description
		}
	}
`;

function DisplayItems() {
	const { data, loading, error } = useQuery(FILMS_QUERY);
	console.log(data);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
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
				{data.feed.map((feed: any) => (
					<li key={feed.url}>{feed.description}</li>
				))}
			</ul>
		</div>
	);
}

export default DisplayItems;
