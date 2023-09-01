import { getItems } from './DataDragon/getItems';
import axios from 'axios';

function filterDescription(description: String) {
	let effects = [];
	let write = false;
	let text = '';
	let descriptionText = '';
	for (var character in description) {
		text += description[character];

		if (description[character] == '<') {
			write = false;
		} else if (description[character] == '>') {
			write = true;
			if (
				(text.includes('<br>') || text.includes('<li>')) &&
				descriptionText.length != 0
			) {
				effects.push(descriptionText);
				descriptionText = '';
			} else if (text.includes('<passive>')) {
				descriptionText += 'passive: ';
			}
			text = '';
		} else {
			if (write) {
				descriptionText += description[character];
			}
		}
	}
	return effects;
}

function assignStats(stats: String[]) {
	let statsTemplate = {
		ap: 0,
		armorPen: 0,
		lethality: 0,
		ad: 0,
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
		mana: 0,
		resourceRegen: 0,
		ms: 0,
		range: 0,
	};

	for (let stat in stats) {
		const value = stats[stat].split(' ')[0];
		const body = stats[stat].slice(stats[stat].indexOf(' ') + 1);
		if (parseInt(value)) {
			const intValue = parseInt(value);
			let isPercent = false;
			if (value.split('%').length > 1) {
				isPercent = true;
			}
			switch (body) {
				case 'Ability Power':
					statsTemplate['ap'] += intValue;
					break;
				case 'Armor Penetration':
					statsTemplate['armorPen'] += intValue;
					break;
				case 'Lethality':
					statsTemplate['lethality'] += intValue;
					break;
				case 'Lethality':
					statsTemplate['lethality'] += intValue;
					break;
				case 'Attack Damage':
					statsTemplate['ad'] += intValue;
					break;
				case 'Attack Speed':
					statsTemplate['as'] += intValue;
					break;
				case 'Critical Strike Chance':
					statsTemplate['crit'] += intValue;
					break;
				case 'Life Steal':
					statsTemplate['lifeSteal'] += intValue;
					break;
				case 'Magic Penetration':
					if (isPercent) statsTemplate['flatMagicPen'] += intValue;
					else statsTemplate['percentMagicPen'] += intValue;
					break;
				case 'Omnivamp':
					statsTemplate['omnivamp'] += intValue;
					break;
				case 'Physical Vamp':
					statsTemplate['physicalVamp'] += intValue;
					break;
				case 'Armor':
					statsTemplate['armor'] += intValue;
					break;
				case 'Health':
					statsTemplate['hp'] += intValue;
					break;
				case 'Base Health Regen':
					statsTemplate['healthRegen'] += intValue;
					break;
				case 'Magic Resist':
					statsTemplate['mr'] += intValue;
					break;
				case 'Tenacity':
					statsTemplate['tenacity'] += intValue;
					break;
				case 'Ability Haste':
					statsTemplate['haste'] += intValue;
					break;
				case 'Mana':
					statsTemplate['mana'] += intValue;
					break;
				case 'Base Mana Regen':
					statsTemplate['resourceRegen'] += intValue;
					break;
				case 'Move Speed':
					statsTemplate['ms'] += intValue;
					break;
			}
		}
	}
	return statsTemplate;
}

function assignMythicStats(stats: any, type: string) {
	let statsTemplate = {
		ap: 0,
		armorPen: 0,
		lethality: 0,
		ad: 0,
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
		mana: 0,
		resourceRegen: 0,
		ms: 0,
		range: 0,
	};
	if (type != 'MYTHIC') {
		return statsTemplate;
	}

	stats = stats['passives'];
	for (let stat in stats) {
		if (!stats[stat]['mythic']) {
			continue;
		}
		const mythicPassive = stats[stat]['stats'];
		for (let specificStat in mythicPassive) {
			for (let specificStatType in mythicPassive[specificStat]) {
				const val = mythicPassive[specificStat][specificStatType];
				if (val == 0) {
					continue;
				}

				if (specificStat == 'abilityPower') {
					statsTemplate['ap'] += val;
				} else if (specificStat == 'armorPenetration') {
					statsTemplate['armorPen'] += val;
				} else if (specificStat == 'lethality') {
					statsTemplate['lethality'] += val;
				} else if (specificStat == 'attackDamage') {
					statsTemplate['ad'] += val;
				} else if (specificStat == 'omnivamp') {
					statsTemplate['omnivamp'] += val;
				} else if (specificStat == 'movespeed') {
					statsTemplate['ms'] += val;
				} else if (specificStat == 'abilityHaste') {
					statsTemplate['haste'] += val;
				} else if (specificStat == 'magicPenetration') {
					if (specificStatType == 'flat') {
						statsTemplate['flatMagicPen'] += val;
					} else {
						statsTemplate['percentMagicPen'] += val;
					}
				} else if (specificStat == 'health') {
					statsTemplate['hp'] += val;
				} else if (specificStat == 'tenacity') {
					statsTemplate['tenacity'] += val;
				} else if (specificStat == 'armor') {
					statsTemplate['armor'] += val;
				} else if (specificStat == 'magicResistance') {
					statsTemplate['mr'] += val;
				}
			}
		}
	}
	return statsTemplate;
}

function getBase64(url: any) {
	return axios
		.get(url, {
			responseType: 'arraybuffer',
		})
		.then((response) =>
			Buffer.from(response.data, 'binary').toString('base64'),
		);
}

export async function updateItemLists(prismaClient: any) {
	await prismaClient.$connect();
	getItems().then(async (response: any) => {
		const data = response[0]['data'];
		for (var itemNum in data) {
			const item = data[itemNum];
			if (
				!item['gold']['purchasable'] ||
				item['gold']['total'] == 0 ||
				item['maps']['30'] ||
				!item['maps']['11'] ||
				itemNum == '1040'
			) {
				continue;
			}
			console.log(itemNum, response[1][itemNum]['name']);
			const description = filterDescription(item['description']);
			const stats = assignStats(description);
			const type = response[1][itemNum]['rank'][0]
				? response[1][itemNum]['rank'][0]
				: 'LEGENDARY';
			const mythicStats = assignMythicStats(response[1][itemNum], type);

			const itemImage =
				'http://ddragon.leagueoflegends.com/cdn/' +
				response[0]['version'] +
				'/img/item/' +
				itemNum +
				'.png';
			const imgBase64 = await getBase64(itemImage);

			await prismaClient.item.upsert({
				where: {
					id: itemNum,
				},
				update: {
					id: itemNum,
					name: item['name'],
					description: description,
					plaintext: item['plaintext'],
					into: item['into'],
					from: item['from'],
					goldTotalCost: item['gold']['total'],
					tags: item['tags'],
					imageURL:
						'http://ddragon.leagueoflegends.com/cdn/' +
						response[0]['version'] +
						'/img/item/' +
						itemNum +
						'.png',
					image: imgBase64,
					type: type,
					stats: {
						update: stats,
					},
					mythicStats: {
						update: mythicStats,
					},
				},
				create: {
					id: itemNum,
					name: item['name'],
					description: description,
					plaintext: item['plaintext'],
					into: item['into'],
					from: item['from'],
					goldTotalCost: item['gold']['total'],
					tags: item['tags'],
					imageURL:
						'http://ddragon.leagueoflegends.com/cdn/' +
						response[0]['version'] +
						'/img/item/' +
						itemNum +
						'.png',
					image: imgBase64,
					type: type,
					stats: {
						create: stats,
					},
					mythicStats: {
						create: mythicStats,
					},
				},
			});
		}
	});
}
