import React from 'react';
import { useState } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import IndividualStat from './IndividualStat';
import ad from '../../assets/ad.webp';
import ap from '../../assets/ap.webp';
import armor from '../../assets/armor.webp';
import armorPen from '../../assets/armorPen.webp';
import as from '../../assets/as.webp';
import cdr from '../../assets/cdr.webp';
import crit from '../../assets/crit.webp';
import hp from '../../assets/hp.webp';
import hpRegen from '../../assets/hpRegen.webp';
import lifeSteal from '../../assets/lifeSteal.webp';
import magicPen from '../../assets/magicPen.webp';
import mana from '../../assets/mana.webp';
import manaRegen from '../../assets/manaRegen.webp';
import mr from '../../assets/mr.webp';
import ms from '../../assets/ms.webp';
import omnivamp from '../../assets/omnivamp.webp';
import range from '../../assets/range.webp';
import tenacity from '../../assets/tenacity.webp';

function DisplayStats(props: any) {
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
				statName={'Health Regen'}
			></IndividualStat>
			<IndividualStat
				image={manaRegen}
				stat={props.stats['resourceRegen']}
				statName={'Resource Regen'}
			></IndividualStat>
			<IndividualStat
				image={armor}
				stat={props.stats['armor']}
				statName={'Armor'}
			></IndividualStat>
			<IndividualStat
				image={mr}
				stat={props.stats['mr']}
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
				stat={props.stats['as']}
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
				statName={'Critical Strike Chance'}
			></IndividualStat>
			<IndividualStat
				image={ms}
				stat={props.stats['ms']}
				statName={'Movement Speed'}
			></IndividualStat>
			<IndividualStat
				image={range}
				stat={props.stats['range']}
				statName={'Range'}
			></IndividualStat>
			<IndividualStat
				image={tenacity}
				stat={props.stats['tenacity']}
				statName={'Tenacity'}
			></IndividualStat>
			<IndividualStat
				image={hp}
				stat={props.stats['hp']}
				statName={'Health'}
			></IndividualStat>

			<IndividualStat
				image={mana}
				stat={props.stats['mana']}
				statName={'Mana'}
			></IndividualStat>
			{/* {Object.keys(props.stats).map((key, index) => {
				return (
					<Grid item >
						<p>
							{key}: {props.stats[key]}
						</p>
					</Grid>
				);
			})} */}
		</Grid>
	);
}

export default DisplayStats;
