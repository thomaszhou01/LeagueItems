import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function About(props: any) {
	return (
		<Box padding={3}>
			<Typography>
				League Items isn't endorsed by Riot Games and doesn't reflect the views
				or opinions of Riot Games or anyone officially involved in producing or
				managing Riot Games properties. Riot Games, and all associated
				properties are trademarks or registered trademarks of Riot Games, Inc.
			</Typography>
		</Box>
	);
}

export default About;
