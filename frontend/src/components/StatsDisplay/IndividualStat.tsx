import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Popover, Stack } from '@mui/material';

function IndividualStat(props: any) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);

	return (
		<Grid item xs={3}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box
					component={'img'}
					src={props.image}
					width={'2vw'}
					height={'2vw'}
					marginRight={2}
					aria-owns={open ? 'mouse-over-popover' : undefined}
					aria-haspopup="true"
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}
				/>
				<Typography>
					{props.stat +
						(props.championStats === undefined ? 0 : props.championStats)}
				</Typography>
				{props.altStat !== undefined && (
					<Typography>/{props.altStat}</Typography>
				)}
			</Box>
			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: 'none',
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Stack
					sx={{
						bgcolor: '#070720',
						border: 1,
						borderColor: '#d19513',
						borderWidth: 1,
						color: 'white',
					}}
				>
					<Typography sx={{ p: 1 }}>{props.statName}</Typography>
					<Typography sx={{ p: 1 }}>{props.stat}</Typography>
					<Typography sx={{ p: 1 }}>{props.altStat}</Typography>
				</Stack>
			</Popover>
		</Grid>
	);
}

export default IndividualStat;
