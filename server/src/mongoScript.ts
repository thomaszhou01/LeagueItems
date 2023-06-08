import { PrismaClient } from '@prisma/client';
import { getChampions } from './RiotAPI/DataDragon/getChampions';
import { getItems } from './RiotAPI/DataDragon/getItems';

const prisma = new PrismaClient();

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

async function main(prismaClient: any) {
	await prismaClient.$connect();
	getItems().then(async (response: any) => {
		const data = response['data'];
		for (var itemNum in data) {
			const item = data[itemNum];
			if (!item['gold']['purchasable'] || item['gold']['total'] == 0) {
				continue;
			}
			console.log(itemNum);
			const description = filterDescription(item['description']);
			const stats = assignStats(description);
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
						response['version'] +
						'/img/item/' +
						itemNum +
						'.png',
					stats: {
						update: stats,
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
						response['version'] +
						'/img/item/' +
						itemNum +
						'.png',
					stats: {
						create: stats,
					},
				},
			});
		}
	});

	console.log('done');

	const allUsers = await prismaClient.item.findMany();
	console.dir(allUsers, { depth: null });
}

main(prisma)
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
