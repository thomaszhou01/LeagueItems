import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllItems } from '../graphql/getAllItems';
import ItemInfo from './ItemComponents/ItemInfo';
import { Grid, Box, TextField } from '@mui/material';

function DisplayItems(props: any) {
	const [search, setSearch] = useState('');
	const { data, loading, error } = useQuery(getAllItems);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;
	const sortedData = [...data.getAllItems];
	sortedData.sort((a: any, b: any) => {
		return parseInt(a.goldTotalCost) - parseInt(b.goldTotalCost);
	});
	return (
		<Box width={'90%'}>
			<h1>Display Items</h1>
			<TextField
				label="Search For a Champion"
				variant="outlined"
				value={search}
				onChange={(data) => {
					setSearch(data.target.value);
				}}
				fullWidth
			/>
			<Grid container spacing={2}>
				{sortedData
					.filter((feed: any) => {
						if (search === '') {
							return feed;
						} else if (feed.name.toLowerCase().includes(search.toLowerCase())) {
							return feed;
						}
					})
					.map((feed: any) => (
						<ItemInfo addItem={props.addItem} data={feed} />
					))}
			</Grid>
		</Box>
	);
}

export default DisplayItems;
