import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';

function DisplayStats(props: any) {
	return (
		<Grid
			sx={{ paddingRight: 1, paddingBottom: 1 }}
			container
			spacing={1}
			margin={0}
			width={'100%'}
		>
			{Object.keys(props.stats).map((key, index) => {
				return (
					<Grid item xs={1}>
						<p>
							{key}: {props.stats[key]}
						</p>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default DisplayStats;
