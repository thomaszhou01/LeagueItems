import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import IndividualStat from './IndividualStat';
import BarStats from './BarStats';
import ad from '../../assets/ad.webp';
import ap from '../../assets/ap.webp';
import armor from '../../assets/armor.webp';
import armorPen from '../../assets/armorPen.webp';
import as from '../../assets/as.webp';
import cdr from '../../assets/cdr.webp';
import crit from '../../assets/crit.webp';
import hpRegen from '../../assets/hpRegen.webp';
import lifeSteal from '../../assets/lifeSteal.webp';
import magicPen from '../../assets/magicPen.webp';
import manaRegen from '../../assets/manaRegen.webp';
import mr from '../../assets/mr.webp';
import ms from '../../assets/ms.webp';
import omnivamp from '../../assets/omnivamp.webp';
import range from '../../assets/range.webp';
import tenacity from '../../assets/tenacity.webp';
import healthBar from '../../assets/healthBar.webp';
import manaBar from '../../assets/manaBar.webp';
import energyBar from '../../assets/energy.webp';
import redBar from '../../assets/redBar.webp';
import whiteBar from '../../assets/whiteBar.webp';
import gold from '../../assets/gold.webp';

function DisplayStats(props: any) {
	function championLevelStats(
		baseStat: number,
		statGrowth: number,
		championLevel: number,
	) {
		return Math.round(
			baseStat +
				statGrowth *
					(championLevel - 1) *
					(0.7025 + 0.0175 * (championLevel - 1)),
		);
	}

	function attackSpeedCalculation(
		baseAs: any,
		statGrowth: number,
		championLevel: number,
		bonusItemAs: any,
	) {
		if (baseAs === 0) {
			return bonusItemAs / 100;
		}
		const bonusAs =
			bonusItemAs +
			statGrowth *
				(championLevel - 1) *
				(0.7025 + 0.0175 * (championLevel - 1));
		return Math.round(100 * (baseAs * (1 + bonusAs / 100))) / 100;
	}

	return (
		<Grid
			sx={{ paddingRight: 1, paddingBottom: 1 }}
			container
			spacing={1}
			margin={0}
			width={'100%'}
		>
			<IndividualStat
				image={ad}
				stat={props.stats['ad']}
				championStats={championLevelStats(
					props.championStats['attackdamage'],
					props.championStats['attackdamageperlevel'],
					props.level,
				)}
				statName={'Attack Damage'}
			></IndividualStat>
			<IndividualStat
				image={ap}
				stat={props.stats['ap']}
				statName={'Ability Power'}
			></IndividualStat>
			<IndividualStat
				image={hpRegen}
				stat={props.stats['healthRegen']}
				championStats={championLevelStats(
					props.championStats['hpregen'],
					props.championStats['hpregenperlevel'],
					props.level,
				)}
				statName={'Health Regen'}
			></IndividualStat>
			<IndividualStat
				image={manaRegen}
				stat={props.stats['resourceRegen']}
				championStats={championLevelStats(
					props.championStats['mpregen'],
					props.championStats['mpregenperlevel'],
					props.level,
				)}
				statName={'Resource Regen'}
			></IndividualStat>
			<IndividualStat
				image={armor}
				stat={props.stats['armor']}
				championStats={championLevelStats(
					props.championStats['armor'],
					props.championStats['armorperlevel'],
					props.level,
				)}
				statName={'Armor'}
			></IndividualStat>
			<IndividualStat
				image={mr}
				stat={props.stats['mr']}
				championStats={championLevelStats(
					props.championStats['spellblock'],
					props.championStats['spellblockperlevel'],
					props.level,
				)}
				statName={'Magic Resistance'}
			></IndividualStat>
			<IndividualStat
				image={armorPen}
				stat={props.stats['armorPen']}
				altStat={props.stats['lethality']}
				statName={'Armor Penetration & Lethality'}
			></IndividualStat>
			<IndividualStat
				image={magicPen}
				stat={props.stats['flatMagicPen']}
				altStat={props.stats['percentMagicPen']}
				statName={'Flat and Percent Magic Penetration'}
			></IndividualStat>
			<IndividualStat
				image={as}
				stat={attackSpeedCalculation(
					props.championStats['attackspeed'],
					props.championStats['attackspeedperlevel'],
					props.level,
					props.stats['as'],
				)}
				// championStats={championLevelStats(
				// 	props.championStats['attackspeed'],
				// 	props.championStats['attackspeedperlevel'],
				// 	props.level,
				// )}
				statName={'Attack Speed'}
			></IndividualStat>
			<IndividualStat
				image={cdr}
				stat={props.stats['haste']}
				statName={'Ability Haste'}
			></IndividualStat>
			<IndividualStat
				image={lifeSteal}
				stat={props.stats['lifeSteal']}
				statName={'Lifesteal'}
			></IndividualStat>
			<IndividualStat
				image={omnivamp}
				stat={props.stats['omnivamp']}
				statName={'Omnivamp'}
			></IndividualStat>
			<IndividualStat
				image={crit}
				stat={props.stats['crit']}
				championStats={championLevelStats(
					props.championStats['crit'],
					props.championStats['critperlevel'],
					props.level,
				)}
				statName={'Critical Strike Chance'}
			></IndividualStat>
			<IndividualStat
				image={ms}
				stat={props.stats['ms']}
				championStats={props.championStats['movespeed']}
				statName={'Movement Speed'}
			></IndividualStat>
			<IndividualStat
				image={range}
				stat={props.stats['range']}
				championStats={props.championStats['attackrange']}
				statName={'Range'}
			></IndividualStat>
			<IndividualStat
				image={tenacity}
				stat={props.stats['tenacity']}
				statName={'Tenacity'}
			></IndividualStat>
			<Grid item xs={12}>
				<BarStats
					image={healthBar}
					stat={props.stats['hp']}
					championStats={championLevelStats(
						props.championStats['hp'],
						props.championStats['hpperlevel'],
						props.level,
					)}
				></BarStats>
				<BarStats
					image={
						props.partype === 'Mana'
							? manaBar
							: props.partype === 'Energy'
							? energyBar
							: props.partype === 'Fury' || props.partype === 'Rage'
							? redBar
							: whiteBar
					}
					stat={props.stats['mana']}
					championStats={championLevelStats(
						props.championStats['mp'],
						props.championStats['mpperlevel'],
						props.level,
					)}
				></BarStats>
			</Grid>
			<IndividualStat
				image={gold}
				stat={props.goldCost}
				statName={'Gold'}
			></IndividualStat>
		</Grid>
	);
}

export default DisplayStats;
