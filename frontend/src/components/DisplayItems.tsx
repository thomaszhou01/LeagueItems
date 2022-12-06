import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllItems } from '../graphql/getAllItems';

function DisplayItems() {
	const { data, loading, error } = useQuery(getAllItems);
	console.log(data);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	return (
		<div>
			<h1>Display Items</h1>
			{data.getAllItems.map((feed: any) => (
				<img alt={feed.id} src={feed.imageURL} />
			))}
		</div>
	);
}

export default DisplayItems;
