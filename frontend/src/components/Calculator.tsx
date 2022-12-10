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
	const [imageUrl, setImageUrl] = useState(['', '', '', '', '', '']);
	const [imageAlt, setImageAlt] = useState(['', '', '', '', '', '']);
	const [itemData, setItemData] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
	]);
	const [totalCost, setTotalCost] = useState(0);

	function toggleButton() {
		setToggle(!toggle);
		console.log(activeSlots);
		console.log(imageUrl);
	}

	function addItem(
		stats: any,
		itemImgUrl: string,
		id: string,
		goldTotalCost: string,
	) {
		console.log(stats);
		console.log(itemImgUrl);
		console.log(id);
		console.log(goldTotalCost);
		for (let slot in activeSlots) {
			console.log(slot);
			if (!activeSlots[slot]) {
				setItemData((prevData) => {
					prevData[slot] = stats;
					return [...prevData];
				});
				setImageUrl((prevUrl) => {
					prevUrl[slot] = itemImgUrl;
					return [...prevUrl];
				});
				setImageAlt((prevAlt) => {
					prevAlt[slot] = id;
					return [...prevAlt];
				});
				setActiveSlots((prevSlots) => {
					prevSlots[slot] = true;
					return [...prevSlots];
				});
				setTotalCost(totalCost + parseInt(goldTotalCost));
				break;
			}
		}
	}

	function removeItem(item: any) {}

	return (
		<Box>
			<Typography variant="h1">Champion</Typography>
			<Button onClick={toggleButton} variant="contained">
				Click
			</Button>
			<Typography>Total cost: {totalCost}</Typography>

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
										src={imageUrl[index]}
										alt={imageAlt[index]}
										active={activeSlots[index]}
										index={index}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Grid>
			<DisplayItems addItem={addItem}></DisplayItems>
			<DisplayChampions></DisplayChampions>
		</Box>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default Calculator;
