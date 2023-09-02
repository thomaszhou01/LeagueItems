import React, { useState, useEffect } from 'react';
import { Popover, Typography, Box, Grid, Stack, Button } from '@mui/material';

function ItemInfo(props: any) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [width, setWidth] = useState<number>(window.innerWidth);

	const passives: any = { id: props.data.id, passives: [] };
	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	function filterItemDescription(description: string) {
		const descriptionArr = description.split(' ');
		if (descriptionArr[0] == 'passive:') {
			const split = description.split('passive: ')[1];
			passives['passives'].push(split);
			return <Typography sx={{ p: 1 }}>{split}</Typography>;
		} else if (!parseInt(descriptionArr[0])) {
			passives['passives'].push(description);
			return <Typography sx={{ p: 1 }}>{description}</Typography>;
		} else {
			return (
				<Typography sx={{ color: '#3292e6', pl: 1 }}>{description}</Typography>
			);
		}
	}

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 768;

	const open = Boolean(anchorEl);
	return (
		<Grid item>
			{isMobile ? (
				<Box
					aria-owns={open ? 'mouse-over-popover' : undefined}
					aria-haspopup="true"
					onMouseLeave={handlePopoverClose}
				>
					<Box display={'grid'}>
						<img
							alt={props.data.id}
							src={'data:image/png;base64,' + props.data.image}
							onClick={(event) => {
								props.addItem(
									props.data.stats,
									'data:image/png;base64,' + props.data.image,
									props.data.id,
									props.data.goldTotalCost,
									passives,
								);
							}}
						/>
						<Button
							onClick={(event) => {
								if (anchorEl == null) {
									handlePopoverOpen(event);
								} else {
									handlePopoverClose();
								}
							}}
							variant="contained"
							color="secondary"
						>
							{props.data.goldTotalCost}
						</Button>
					</Box>
				</Box>
			) : (
				<Box
					aria-owns={open ? 'mouse-over-popover' : undefined}
					aria-haspopup="true"
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}
				>
					<Box display={'grid'}>
						<img
							alt={props.data.id}
							src={'data:image/png;base64,' + props.data.image}
							onClick={(event) => {
								props.addItem(
									props.data.stats,
									'data:image/png;base64,' + props.data.image,
									props.data.id,
									props.data.goldTotalCost,
									passives,
								);
							}}
						/>
						<Typography textAlign={'center'}>
							{props.data.goldTotalCost}
						</Typography>
					</Box>
				</Box>
			)}
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
						maxWidth: 500,
					}}
				>
					<Grid container>
						<Grid item>
							<img
								alt={props.data.id}
								src={'data:image/png;base64,' + props.data.image}
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
					<Typography sx={{ fontStyle: 'italic', p: 1 }}>
						Left Click to Add
					</Typography>
				</Stack>
			</Popover>
		</Grid>
	);
}

export default ItemInfo;
