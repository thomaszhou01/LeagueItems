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

async function main(prismaClient: any) {
	// await prismaClient.$connect();
	// getItems().then(async (response: any) => {
	// 	for (var itemNum in response) {
	// 		const item = response[itemNum];
	// 		if (!item['gold']['purchasable']) {
	// 			continue;
	// 		}
	// 		await prismaClient.item.upsert({
	// 			where: {
	// 				id: itemNum,
	// 			},
	// 			update: {
	// 				id: itemNum,
	// 				name: item['name'],
	// 				description: filterDescription(item['description']),
	// 				plaintext: item['plaintext'],
	// 				into: item['into'],
	// 				from: item['from'],
	// 				goldTotalCost: item['gold']['total'],
	// 				tags: item['tags'],
	// 			},
	// 			create: {
	// 				id: itemNum,
	// 				name: item['name'],
	// 				description: filterDescription(item['description']),
	// 				plaintext: item['plaintext'],
	// 				into: item['into'],
	// 				from: item['from'],
	// 				goldTotalCost: item['gold']['total'],
	// 				tags: item['tags'],
	// 			},
	// 		});
	// 	}
	// });

	// const allUsers = await prismaClient.item.findMany();
	// console.dir(allUsers, { depth: null });
	await prismaClient.$connect();
	getChampions().then(async (response: any) => {
		for (var champ in response) {
			const champion: any = response[champ];
			await prismaClient.champion.upsert({
				where: {
					name: champion['name'],
				},
				update: {
					version: champion['version'],
					id: champion['id'],
					key: champion['key'],
					name: champion['name'],
					title: champion['title'],
					tags: champion['tags'],
					partype: champion['partype'],
					imageURL:
						'http://ddragon.leagueoflegends.com/cdn/' +
						champion['version'] +
						'/img/champion/' +
						champion['id'] +
						'.png',
					stats: {
						create: champion['stats'],
					},
				},
				create: {
					version: champion['version'],
					id: champion['id'],
					key: champion['key'],
					name: champion['name'],
					title: champion['title'],
					tags: champion['tags'],
					partype: champion['partype'],
					imageURL:
						'http://ddragon.leagueoflegends.com/cdn/' +
						champion['version'] +
						'/img/champion/' +
						champion['id'] +
						'.png',
					stats: {
						create: champion['stats'],
					},
				},
			});
		}
	});

	const allUsers = await prismaClient.champion.findMany({
		include: {
			stats: true,
		},
	});
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
