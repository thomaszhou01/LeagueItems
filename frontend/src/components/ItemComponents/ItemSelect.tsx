import React from 'react';
import { useState } from 'react';
import {
	Box,
	ThemeProvider,
	ButtonGroup,
	Backdrop,
	IconButton,
} from '@mui/material';
import invisible from '../../assets/invisible.png';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonThemes } from '../../global/Themes';

function ItemSelect(props: any) {
	const [show, setShow] = useState(false);

	return (
		<ThemeProvider theme={ButtonThemes}>
			<Box onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
				<Box border={1} borderColor={'#FFD700'} sx={{ position: 'relative' }}>
					<Box
						component="img"
						alt={props.alt}
						src={props.active ? props.src : invisible}
						width={'100%'}
						height={'100%'}
					/>
					{props.active && (
						<Backdrop
							sx={{
								position: 'absolute',
								color: '#fff',
							}}
							open={show}
						>
							<ButtonGroup
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
								}}
								variant="outlined"
							>
								<IconButton
									color="primary"
									onClick={() =>
										props.removeItem(props.index, props.goldTotalCost)
									}
								>
									<DeleteIcon />
								</IconButton>
							</ButtonGroup>
						</Backdrop>
					)}
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default ItemSelect;
