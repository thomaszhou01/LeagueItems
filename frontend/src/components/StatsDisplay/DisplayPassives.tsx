import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

function DisplayPassives(props: any) {
	return (
		<Box height={'30vh'} sx={{ overflow: 'auto' }}>
			<Typography>Unique Passives:</Typography>
			{props.itemPassives.map((item: any) => {
				return (
					<Box marginBottom={2}>
						{item['passives'].map((passives: any) => {
							return <Typography> -{passives}</Typography>;
						})}
					</Box>
				);
				// return <Typography> {item['passives']}</Typography>;
			})}
		</Box>
	);
}

export default DisplayPassives;
