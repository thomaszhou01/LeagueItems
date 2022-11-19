import React from 'react';
import logo from './logo.svg';
import './App.css';
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

function App() {
	const { data, loading, error } = useQuery(FILMS_QUERY);
	console.log(data);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	return (
		<div>
			<h1>SpaceX Launches</h1>
			<ul>
				{data.feed.map((feed: any) => (
					<li key={feed.url}>{feed.description}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
