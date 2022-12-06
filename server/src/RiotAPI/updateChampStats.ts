import { getChampions } from './DataDragon/getChampions';

export async function updateChampionLists(prismaClient: any) {
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
