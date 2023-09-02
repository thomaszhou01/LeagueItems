import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Button, Stack, Snackbar } from '@mui/material';
import ItemSelect from './ItemComponents/ItemSelect';
import DisplayItems from './ItemComponents/DisplayItems';
import ChampionSelector from './ChampionDisplay/ChampionSelector';
import DisplayStats from './StatsDisplay/DisplayStats';
import DisplayPassives from './StatsDisplay/DisplayPassives';

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

function Calculator(props: any) {
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
	const [partype, setPartype] = useState('');
	const [level, setLevel] = useState(1);
	const [snackbar, setSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [championStats, setChampionStats] = useState({
		hp: 0,
		hpperlevel: 0,
		mp: 0,
		mpperlevel: 0,
		movespeed: 0,
		armor: 0,
		armorperlevel: 0,
		spellblock: 0,
		spellblockperlevel: 0,
		attackrange: 0,
		hpregen: 0,
		hpregenperlevel: 0,
		mpregen: 0,
		mpregenperlevel: 0,
		crit: 0,
		critperlevel: 0,
		attackdamage: 0,
		attackdamageperlevel: 0,
		attackspeedperlevel: 0,
		attackspeed: 0,
		championId: 0,
	});

	const [itemStats, setItemStats] = useState({
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
	});

	const [itemPassives, setItemPassives] = useState<Array<any>>([]);
	function addItem(
		stats: any,
		itemImgUrl: string,
		id: string,
		goldTotalCost: string,
		passives: any,
		name: string,
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

				for (let key in itemStats) {
					itemStats[key as keyof Stats] += stats[key as keyof Stats];
				}
				setTotalCost(totalCost + parseInt(goldTotalCost));
				setItemPassives((prevPassives) => {
					return [...prevPassives, passives];
				});
				break;
			}
		}
		setSnackbar(() => {
			if (itemPassives.length != 6) {
				return true;
			}
			return false;
		});
		setSnackbarMessage(name + ' Added');
	}

	function removeItem(index: number, cost: string) {
		for (let key in itemStats) {
			let data = itemData[index]!;
			itemStats[key as keyof Stats] -= data[key as keyof Stats];
		}
		setItemPassives((prevPassives) => {
			return prevPassives.filter((itemVal) => itemVal.id !== imageAlt[index]);
		});

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

	function updateChampionStats(stats: any, partype: any) {
		setPartype(partype);
		setChampionStats(stats);
	}

	function updateLevel(event: any) {
		setLevel(event.target.value as number);
	}

	function snackbarClose() {
		setSnackbar(false);
	}

	// can make width of Box fluid or width={'50vw'} with direction row
	return (
		<Stack sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
			<Box
				sx={{ width: { xs: '100%', lg: '50%' } }}
				display={'flex'}
				flexDirection={'column'}
			>
				<Grid
					container
					paddingLeft={{ xs: 1, lg: 3 }}
					paddingRight={{ xs: 1, lg: 3 }}
					paddingBottom={{ xs: 1, lg: 3 }}
				>
					<Grid item xs={12}>
						<ChampionSelector
							setChampStats={updateChampionStats}
							level={level}
							changeLevel={updateLevel}
						/>
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={1}>
							{activeSlots.map((feed: any, index) => {
								return (
									<Grid item xs={2} alignContent={'center'}>
										<ItemSelect
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
					</Grid>
					<Grid item xs={12}>
						<DisplayStats
							stats={itemStats}
							championStats={championStats}
							partype={partype}
							level={level}
							goldCost={totalCost}
						></DisplayStats>
					</Grid>
				</Grid>
				<DisplayPassives itemPassives={itemPassives} />
			</Box>
			<DisplayItems addItem={addItem}></DisplayItems>
			<Snackbar
				open={snackbar}
				autoHideDuration={1000}
				onClose={snackbarClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				message={snackbarMessage}
			/>
		</Stack>
	);
}

//To calculate champion stats: stat = base + growth(lvl-1) * (0.7025 + 0.0175*(lv-1))

export default Calculator;
