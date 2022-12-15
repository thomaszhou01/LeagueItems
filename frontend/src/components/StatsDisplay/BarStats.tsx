import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Popover, Stack } from '@mui/material';

function BarStats(props: any) {
	return (
		<Box position={'relative'}>
			<Box component={'img'} src={props.image} width={'100%'}></Box>
			<Typography
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				{props.stat + props.championStats}
			</Typography>
		</Box>
	);
}

export default BarStats;
