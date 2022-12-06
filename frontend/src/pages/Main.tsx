import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import DisplayChampions from '../components/DisplayChampions';
import DisplayItems from '../components/DisplayItems';

function Main() {
	return (
		<div>
			<h1>League Item Calculator</h1>
			<DisplayItems />
			<DisplayChampions />
		</div>
	);
}

export default Main;
