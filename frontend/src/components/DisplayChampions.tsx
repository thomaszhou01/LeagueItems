import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllChampions } from '../graphql/getAllChampions';

function DisplayChampions(props: any) {
	const { data, loading, error } = useQuery(getAllChampions);
	console.log(data);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	return (
		<div>
			<h1>Display Champs</h1>
			{data.getAllChampions.map((feed: any) => (
				<img alt={feed.id} src={feed.imageURL} />
			))}
		</div>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default DisplayChampions;
