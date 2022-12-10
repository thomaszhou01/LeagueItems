import React from 'react';
import { useState } from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';
import ItemSelect from './CalculatorComponents/ItemSelect';
import DisplayChampions from './DisplayChampions';
import DisplayItems from './DisplayItems';

function Calculator() {
	const imageSize = 150;
	const spacing = 10;
	const [toggle, setToggle] = useState(false);
	const [activeSlots, setActiveSlots] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	function toggleButton() {
		setToggle(!toggle);
	}

	return (
		<Box>
			<Typography variant="h1">Champion</Typography>
			<Button onClick={toggleButton} variant="contained">
				Click
			</Button>

			<Grid container>
				<Avatar
					alt="Aatrox"
					src="http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Aatrox.png"
					sx={{ width: 200, height: 200 }}
				/>

				<Box width={imageSize * 3 + spacing * 4}>
					<Grid
						sx={{ paddingRight: 1, paddingBottom: 1 }}
						container
						spacing={1}
						margin={0}
						width={'100%'}
					>
						{activeSlots.map((feed: any, index) => {
							return (
								<Grid item xs={4}>
									<ItemSelect
										imageSize={imageSize}
										src={
											'http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/3001.png'
										}
										alt={'Aatrox'}
										selected={toggle}
										index={index}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Grid>
			<DisplayItems></DisplayItems>
			<DisplayChampions></DisplayChampions>
		</Box>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default Calculator;
