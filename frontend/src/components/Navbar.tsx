import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props: any) {
	const [window, setWindow] = useState(0);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				color="secondary"
				enableColorOnDark
				style={{ boxShadow: 'none', backgroundImage: 'none' }}
			>
				<Toolbar>
					<Button variant={'text'} onClick={() => setWindow(0)}>
						<Link
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
							to="/"
						>
							Item Calculator
						</Link>
					</Button>
					<Box sx={{ flexGrow: 1 }} />
					<Button variant={'text'} onClick={() => setWindow(1)}>
						<Link
							style={{
								color: 'inherit',
								textDecoration: 'none',
							}}
							to="/about"
						>
							About
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
