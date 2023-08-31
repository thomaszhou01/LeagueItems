import { useState } from 'react';
import {
	Box,
	Grid,
	Typography,
	TextField,
	Toolbar,
	IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Champion from './Champion';

function DisplayChampions(props: any) {
	const [search, setSearch] = useState('');
	const data = props.data;

	function setChampion(
		image: string,
		stats: any,
		partype: string,
		champName: string,
	) {
		props.setImage(image, champName);
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
			<Box width={'99%'}>
				<Toolbar>
					<Typography variant="h2" sx={{ flexGrow: 1 }}>
						Select a Champion
					</Typography>
					<IconButton onClick={props.toggleDrawer}>
						<CloseIcon />
					</IconButton>
				</Toolbar>
				<TextField
					label="Search For a Champion"
					variant="outlined"
					value={search}
					onChange={(data) => {
						setSearch(data.target.value);
					}}
					fullWidth
				/>
			</Box>
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
						<Grid item xs={3} md={2} lg={1}>
							<Champion
								alt={feed.id}
								name={feed.name}
								src={'data:image/png;base64,' + feed.image}
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
