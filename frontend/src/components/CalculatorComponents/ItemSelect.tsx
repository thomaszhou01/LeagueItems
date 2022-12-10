import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';

function ItemSelect(props: any) {
	return (
		<Box width={props.imageSize} height={props.imageSize}>
			{props.selected ? (
				<Box
					component="img"
					alt={props.alt}
					src={props.src}
					width={'100%'}
					height={'100%'}
					onClick={(event) => {
						console.log(props.index);
					}}
					border={1}
					borderColor={'#FFD700'}
				/>
			) : (
				<Box
					width={'100%'}
					height={'100%'}
					onClick={(event) => {
						console.log(props.index);
					}}
					border={1}
					borderColor={'#FFD700'}
				/>
			)}
		</Box>
	);
}

export default ItemSelect;
