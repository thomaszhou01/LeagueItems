import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function Champion(props: any) {
	return (
		<Button>
			<Box width={'100%'} height={'100%'} overflow={'visible'}>
				<Box
					component="img"
					alt={props.alt}
					src={props.src}
					onClick={() =>
						props.setChampion(props.src, props.stats, props.partype, props.name)
					}
					width={'100%'}
					height={'100%'}
				/>
				<Typography fontSize={{ xs: '2vw', md: '1vw', lg: '0.75vw' }}>
					{props.championName}
				</Typography>
			</Box>
		</Button>
	);
}

export default Champion;
