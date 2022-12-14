import React from 'react';
import { useState } from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';
import ItemSelect from './CalculatorComponents/ItemSelect';
import DisplayItems from './DisplayItems';
import ChampionSelector from './ChampionSelector';
import DisplayStats from './StatsDisplay/DisplayStats';
import { display } from '@mui/system';

interface Stats {
	ap: number;
	armorPen: number;
	lethality: number;
	ad: number;
	as: number;
	crit: number;
	lifeSteal: number;
	flatMagicPen: number;
	percentMagicPen: number;
	omnivamp: number;
	physicalVamp: number;
	armor: number;
	hp: number;
	healthRegen: number;
	mr: number;
	tenacity: number;
	haste: number;
	range: number;
	mana: number;
	resourceRegen: number;
	ms: number;
}
let displayStats = {
	ad: 0,
	ap: 0,
	armorPen: 0,
	lethality: 0,
	as: 0,
	crit: 0,
	lifeSteal: 0,
	flatMagicPen: 0,
	percentMagicPen: 0,
	omnivamp: 0,
	physicalVamp: 0,
	armor: 0,
	hp: 0,
	healthRegen: 0,
	mr: 0,
	tenacity: 0,
	haste: 0,
	range: 0,
	mana: 0,
	resourceRegen: 0,
	ms: 0,
};
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
	const [itemCost, setItemCost] = useState(['', '', '', '', '', '']);
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
		for (let slot in activeSlots) {
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
				setItemCost((prevGold) => {
					prevGold[slot] = goldTotalCost;
					return [...prevGold];
				});
				setActiveSlots((prevSlots) => {
					prevSlots[slot] = true;
					return [...prevSlots];
				});

				for (let key in displayStats) {
					displayStats[key as keyof Stats] += stats[key as keyof Stats];
				}
				setTotalCost(totalCost + parseInt(goldTotalCost));
				break;
			}
		}
	}

	function removeItem(index: number, cost: string) {
		for (let key in displayStats) {
			let data = itemData[index]!;
			displayStats[key as keyof Stats] -= data[key as keyof Stats];
		}
		setItemData((prevData) => {
			prevData[index] = null;
			return [...prevData];
		});
		setImageUrl((prevUrl) => {
			prevUrl[index] = '';
			return [...prevUrl];
		});
		setImageAlt((prevAlt) => {
			prevAlt[index] = '';
			return [...prevAlt];
		});
		setItemCost((prevGold) => {
			prevGold[index] = '';
			return [...prevGold];
		});
		setActiveSlots((prevSlots) => {
			prevSlots[index] = false;
			return [...prevSlots];
		});
		setTotalCost(totalCost - parseInt(cost));
	}

	function updateStats(newStats: any) {
		console.log(displayStats);
	}

	return (
		<Box>
			<Typography variant="h1">Champion</Typography>
			<Button onClick={toggleButton} variant="contained">
				Click
			</Button>
			<Typography>Total cost: {totalCost}</Typography>
			<Grid container>
				<ChampionSelector></ChampionSelector>
				<Button onClick={updateStats}>Test</Button>
				<DisplayStats stats={displayStats}></DisplayStats>

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
										goldTotalCost={itemCost[index]}
										removeItem={removeItem}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Grid>
			<DisplayItems addItem={addItem}></DisplayItems>
		</Box>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default Calculator;
