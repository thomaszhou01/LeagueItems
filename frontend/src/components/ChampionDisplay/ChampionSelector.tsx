import React from 'react';
import { useState } from 'react';
import { getAllChampions } from '../../graphql/getAllChampions';
import { useQuery, gql } from '@apollo/client';
import {
	Avatar,
	Grid,
	Typography,
	Box,
	Drawer,
	IconButton,
	LinearProgress,
} from '@mui/material';
import DisplayChampions from './DisplayChampions';
import LevelSelector from './LevelSelector';

function ChampionSelector(props: any) {
	const [state, setState] = useState(false);
	const [imageSource, setImageSource] = useState('');
	const [championName, setChampionName] = useState('Select a Champion');
	const { data, loading, error } = useQuery(getAllChampions);
	if (loading)
		return (
			<Box sx={{ color: 'white', backgroundColor: '#070720' }}>
				<LinearProgress />
			</Box>
		);
	if (error)
		return (
			<Box sx={{ color: 'white', backgroundColor: '#070720' }}>
				{error.message}
			</Box>
		);

	function toggleDrawer() {
		setState(!state);
	}

	function championImage(image: string, champName: string) {
		setImageSource(image);
		setChampionName(champName);
	}

	function setStats(stats: any, partype: string) {
		props.setChampStats(stats, partype);
	}

	return (
		<React.Fragment key={'bottom'}>
			<Grid container paddingBottom={1}>
				<Grid item xs={12} display={'flex'} alignItems={'center'}>
					<Box textAlign={'center'}>
						<IconButton onClick={toggleDrawer}>
							<Avatar
								alt="selected champion"
								src={imageSource}
								sx={{
									width: { xs: 100, lg: 150 },
									height: { xs: 100, lg: 150 },
								}}
							/>
						</IconButton>
					</Box>
					<Typography variant={'h3'}>{championName}</Typography>
				</Grid>
				<Grid item xs={12}>
					<LevelSelector
						level={props.level}
						changeLevel={props.changeLevel}
					></LevelSelector>
				</Grid>
			</Grid>
			<Drawer anchor={'bottom'} open={state} onClose={toggleDrawer}>
				<DisplayChampions
					setImage={championImage}
					toggleDrawer={toggleDrawer}
					setStats={setStats}
					data={data}
				></DisplayChampions>
			</Drawer>
		</React.Fragment>
	);
}

export default ChampionSelector;
