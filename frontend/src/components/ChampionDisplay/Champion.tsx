import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function Champion(props: any) {
	return (
		<Button>
			<Box>
				<Box
					component="img"
					alt={props.alt}
					src={props.src}
					onClick={() =>
						props.setChampion(props.src, props.stats, props.partype)
					}
				/>
				<Typography>{props.championName}</Typography>
			</Box>
		</Button>
	);
}

export default Champion;
