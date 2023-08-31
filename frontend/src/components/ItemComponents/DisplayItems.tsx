import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllItems } from '../../graphql/getAllItems';
import ItemInfo from './ItemInfo';
import { Grid, Box, TextField, LinearProgress } from '@mui/material';

function DisplayItems(props: any) {
	const [search, setSearch] = useState('');
	const { data, loading, error } = useQuery(getAllItems);

	if (loading)
		return (
			<Box
				height={'100vh'}
				sx={{ overflow: 'auto', width: { xs: '100%', lg: '50%' } }}
			>
				<LinearProgress />
			</Box>
		);
	if (error)
		return (
			<Box
				height={'100vh'}
				sx={{ overflow: 'auto', width: { xs: '100%', lg: '50%' } }}
			>
				{error.message}
			</Box>
		);

	const sortedData = [...data.getAllItems];
	sortedData.sort((a: any, b: any) => {
		return parseInt(a.goldTotalCost) - parseInt(b.goldTotalCost);
	});

	// can make width={'50vw'}
	return (
		<Box
			height={'100vh'}
			sx={{ overflow: 'auto', width: { xs: '100%', lg: '50%' } }}
		>
			<h1>Items</h1>
			<TextField
				label="Search For a Item"
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
