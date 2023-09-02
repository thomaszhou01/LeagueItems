import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Divider, Button, Drawer } from '@mui/material';

function DisplayPassives(props: any) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	function toggleDrawer() {
		setDrawerOpen((prev) => !prev);
	}

	return (
		<React.Fragment>
			<Button onClick={toggleDrawer} variant="outlined">
				View Passives
			</Button>
			<Drawer anchor={'bottom'} open={drawerOpen} onClose={toggleDrawer}>
				<Box minHeight={'10vh'} maxHeight={'50vh'} padding={2}>
					<Typography variant="h4">Unique Passives:</Typography>
					{props.itemPassives.map((item: any) => {
						return (
							<Box padding={1}>
								<Divider />
								<Grid container padding={1}>
									<Grid item>
										<Box
											component={'img'}
											alt={item['id']}
											src={item['img']}
											paddingRight={1}
										/>
									</Grid>

									<Grid item xs>
										{item['passives'].map((passives: any) => {
											return (
												<Typography variant="body2">{passives}</Typography>
											);
										})}
									</Grid>
								</Grid>
							</Box>
						);
					})}
				</Box>
			</Drawer>
		</React.Fragment>
	);
}

export default DisplayPassives;
