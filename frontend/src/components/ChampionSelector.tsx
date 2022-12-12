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
import DisplayChampions from './ChampionDisplay/DisplayChampions';

function ChampionSelector(props: any) {
	const [state, setState] = useState(false);
	const [imageSource, setImageSource] = useState('');

	function toggleDrawer() {
		setState(!state);
	}

	function championImage(image: string) {
		setImageSource(image);
	}

	return (
		<React.Fragment key={'bottom'}>
			<Box>
				<IconButton onClick={toggleDrawer}>
					<Avatar
						alt="selected champion"
						src={imageSource}
						sx={{ width: 200, height: 200 }}
					/>
				</IconButton>

				<Drawer anchor={'bottom'} open={state} onClose={toggleDrawer}>
					<DisplayChampions
						setImage={championImage}
						toggleDrawer={toggleDrawer}
					></DisplayChampions>
				</Drawer>
			</Box>
		</React.Fragment>
	);
}

export default ChampionSelector;
