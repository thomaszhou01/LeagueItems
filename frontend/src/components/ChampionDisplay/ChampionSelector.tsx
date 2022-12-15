import React from 'react';
import { useState } from 'react';
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
				<Box>
					<IconButton onClick={toggleDrawer}>
						<Avatar
							alt="selected champion"
							src={imageSource}
							sx={{ width: 200, height: 200 }}
						/>
					</IconButton>
				</Box>
				<Box>
					<LevelSelector
						level={props.level}
						changeLevel={props.changeLevel}
					></LevelSelector>
				</Box>
			</Box>
			<Drawer anchor={'bottom'} open={state} onClose={toggleDrawer}>
				<DisplayChampions
					setImage={championImage}
					toggleDrawer={toggleDrawer}
					setStats={setStats}
				></DisplayChampions>
			</Drawer>
		</React.Fragment>
	);
}

export default ChampionSelector;
