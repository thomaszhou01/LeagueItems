import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { getAllChampions } from '../../graphql/getAllChampions';
import { Box, Grid, Typography } from '@mui/material';
import Champion from './Champion';

function DisplayChampions(props: any) {
	const { data, loading, error } = useQuery(getAllChampions);
	if (loading) return <pre>"Loading..."</pre>;
	if (error) return <pre>{error.message}</pre>;

	function setChampion(image: string) {
		props.setImage(image);
		props.toggleDrawer();
	}

	return (
		<Box sx={{ color: 'white', backgroundColor: '#070720' }}>
			<Typography variant="h2">Select a Champion</Typography>
			<Grid container spacing={1}>
				{data.getAllChampions.map((feed: any) => (
					<Grid item>
						<Champion
							alt={feed.id}
							src={feed.imageURL}
							championName={feed.name}
							setChampion={setChampion}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default DisplayChampions;
