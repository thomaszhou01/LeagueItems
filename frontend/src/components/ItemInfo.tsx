import React from 'react';
import { Popover, Typography, Box, Grid, Stack } from '@mui/material';

function ItemInfo(props: any) {
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	function filterItemDescription(description: string) {
		const descriptionArr = description.split(' ');
		if (descriptionArr[0] == 'passive:') {
			return (
				<Typography sx={{ p: 1 }}>
					{description.split('passive: ')[1]}
				</Typography>
			);
		} else if (!parseInt(descriptionArr[0])) {
			return <Typography sx={{ p: 1 }}>{description}</Typography>;
		} else {
			return (
				<Typography sx={{ color: '#3292e6', pl: 1 }}>{description}</Typography>
			);
		}
	}

	const open = Boolean(anchorEl);
	return (
		<Grid item>
			<Typography
				aria-owns={open ? 'mouse-over-popover' : undefined}
				aria-haspopup="true"
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<Box display={'block'}>
					<img
						alt={props.data.id}
						src={props.data.imageURL}
						onClick={(event) => {
							console.log(props.data.id);
						}}
					/>
					<Typography>{props.data.goldTotalCost}</Typography>
				</Box>
			</Typography>
			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: 'none',
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
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
					<Grid container>
						<Grid item>
							<img
								alt={props.data.id}
								src={props.data.imageURL}
								style={{ margin: 5 }}
							/>
						</Grid>
						<Grid item>
							<Stack>
								<Typography variant="h5" sx={{ p: 1 }}>
									{props.data.name}
								</Typography>
								<Typography sx={{ pl: 1, color: '#FFD700' }}>
									{props.data.goldTotalCost}
								</Typography>
							</Stack>
						</Grid>
					</Grid>
					{props.data.description.map((description: any) =>
						filterItemDescription(description),
					)}
				</Stack>
			</Popover>
		</Grid>
	);
}

export default ItemInfo;
