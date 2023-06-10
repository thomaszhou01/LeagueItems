import { useState } from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import Champion from './Champion';

function DisplayChampions(props: any) {
	const [search, setSearch] = useState('');
	const data = props.data;

	function setChampion(image: string, stats: any, partype: string) {
		props.setImage(image);
		props.setStats(stats, partype);
		props.toggleDrawer();
	}

	return (
		<Box
			sx={{
				color: 'white',
				backgroundColor: '#070720',
				height: '100vh',
				overflow: 'auto',
			}}
		>
			<Typography variant="h2">Select a Champion</Typography>
			<TextField
				label="Search For a Champion"
				variant="outlined"
				value={search}
				onChange={(data) => {
					setSearch(data.target.value);
				}}
				fullWidth
			/>
			<Grid container spacing={1}>
				{data.getAllChampions
					.filter((feed: any) => {
						if (search === '') {
							return feed;
						} else if (feed.name.toLowerCase().includes(search.toLowerCase())) {
							return feed;
						}
					})
					.map((feed: any) => (
						<Grid item>
							<Champion
								alt={feed.id}
								src={feed.imageURL}
								championName={feed.name}
								stats={feed.stats}
								partype={feed.partype}
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
