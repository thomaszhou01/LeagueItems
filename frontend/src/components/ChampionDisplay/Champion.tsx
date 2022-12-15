import React from 'react';
import { Box, Typography } from '@mui/material';

function Champion(props: any) {
	return (
		<Box>
			<Box
				component="img"
				alt={props.alt}
				src={props.src}
				onClick={() => props.setChampion(props.src, props.stats, props.partype)}
			/>
			<Typography>{props.championName}</Typography>
		</Box>
	);
}

export default Champion;
