import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllChampions } from '../graphql/getAllChampions';

function DisplayChampions() {
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

export default DisplayChampions;
