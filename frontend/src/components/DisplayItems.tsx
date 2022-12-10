import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllItems } from '../graphql/getAllItems';
import ItemInfo from './CalculatorComponents/ItemInfo';
import { Grid, Box } from '@mui/material';

function DisplayItems(props: any) {
	const { data, loading, error } = useQuery(getAllItems);
	console.log(data);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	return (
		<Box>
			<h1>Display Items</h1>
			<Grid container spacing={2}>
				{data.getAllItems.map((feed: any) => (
					<ItemInfo addItem={props.addItem} data={feed} />
				))}
			</Grid>
		</Box>
	);
}

export default DisplayItems;
