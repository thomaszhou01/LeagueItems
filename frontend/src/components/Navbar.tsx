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
import MenuIcon from '@mui/icons-material/Menu';

function Navbar(props: any) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						League of Legends Item Calculator
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
