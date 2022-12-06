import { getItems } from './DataDragon/getItems';

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

export async function updateItemLists(prismaClient: any) {
	await prismaClient.$connect();
	getItems().then(async (response: any) => {
		const data = response['data'];
		for (var itemNum in data) {
			const item = data[itemNum];
			if (!item['gold']['purchasable']) {
				continue;
			}
			await prismaClient.item.upsert({
				where: {
					id: itemNum,
				},
				update: {
					id: itemNum,
					name: item['name'],
					description: filterDescription(item['description']),
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
				},
				create: {
					id: itemNum,
					name: item['name'],
					description: filterDescription(item['description']),
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
				},
			});
		}
	});
}
