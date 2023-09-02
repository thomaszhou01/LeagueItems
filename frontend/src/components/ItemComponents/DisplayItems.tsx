import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { getAllItems } from '../../graphql/getAllItems';
import ItemInfo from './ItemInfo';
import {
	Grid,
	Box,
	TextField,
	LinearProgress,
	Select,
	FormControl,
	InputLabel,
	MenuItem,
} from '@mui/material';

function DisplayItems(props: any) {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('');
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

	function changeFilter(event: any) {
		setFilter(event.target.value as string);
	}

	return (
		<Box
			height={{ xs: 'auto', lg: '93vh' }}
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
				sx={{ width: { xs: '70%', lg: '80%' } }}
			/>
			<FormControl sx={{ width: { xs: '30%', lg: '20%' } }}>
				<InputLabel id="demo-simple-select-label">Filter</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={filter}
					label="Filter"
					onChange={changeFilter}
				>
					<MenuItem value={''}>None</MenuItem>
					<MenuItem value={'STARTER'}>Starter</MenuItem>
					<MenuItem value={'BOOTS'}>Boots</MenuItem>
					<MenuItem value={'BASIC'}>Basic</MenuItem>
					<MenuItem value={'EPIC'}>Epic</MenuItem>
					<MenuItem value={'LEGENDARY'}>Legendary</MenuItem>
					<MenuItem value={'MYTHIC'}>Mythic</MenuItem>
				</Select>
			</FormControl>
			<Grid container spacing={2}>
				{sortedData
					.filter((feed: any) => {
						if (search === '' && filter === '') {
							return feed;
						} else if (
							filter === '' &&
							feed.name.toLowerCase().includes(search.toLowerCase())
						) {
							return feed;
						} else if (search === '' && feed.type === filter) {
							return feed;
						} else if (
							feed.name.toLowerCase().includes(search.toLowerCase()) &&
							feed.type === filter
						) {
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
