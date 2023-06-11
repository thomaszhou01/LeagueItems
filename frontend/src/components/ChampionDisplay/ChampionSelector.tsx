import React from 'react';
import { useState } from 'react';
import { getAllChampions } from '../../graphql/getAllChampions';
import { useQuery, gql } from '@apollo/client';
import {
	Avatar,
	Popover,
	Typography,
	Box,
	Drawer,
	IconButton,
} from '@mui/material';
import DisplayChampions from './DisplayChampions';
import LevelSelector from './LevelSelector';

function ChampionSelector(props: any) {
	const [state, setState] = useState(false);
	const [imageSource, setImageSource] = useState('');
	const { data, loading, error } = useQuery(getAllChampions);
	if (loading)
		return (
			<Box sx={{ color: 'white', backgroundColor: '#070720' }}>
				"Loading..."
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

	function championImage(image: string) {
		setImageSource(image);
	}

	function setStats(stats: any, partype: string) {
		props.setChampStats(stats, partype);
	}

	return (
		<React.Fragment key={'bottom'}>
			<Box>
				<Box textAlign={'center'}>
					<IconButton onClick={toggleDrawer}>
						<Avatar
							alt="selected champion"
							src={imageSource}
							sx={{ width: 200, height: 200 }}
						/>
					</IconButton>
				</Box>
				<LevelSelector
					level={props.level}
					changeLevel={props.changeLevel}
				></LevelSelector>
			</Box>
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
