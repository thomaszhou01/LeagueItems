import { getChampions } from './DataDragon/getChampions';
import axios from 'axios';

function getBase64(url: any) {
	return axios
		.get(url, {
			responseType: 'arraybuffer',
		})
		.then((response) =>
			Buffer.from(response.data, 'binary').toString('base64'),
		);
}

export async function updateChampionLists(prismaClient: any) {
	await prismaClient.$connect();
	getChampions().then(async (response: any) => {
		for (var champ in response) {
			const champion: any = response[champ];
			const champImage =
				'http://ddragon.leagueoflegends.com/cdn/' +
				champion['version'] +
				'/img/champion/' +
				champion['id'] +
				'.png';
			const imgBase64 = await getBase64(champImage);
			console.log(champion['name']);
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
					image: imgBase64,
					imageURL:
						'http://ddragon.leagueoflegends.com/cdn/' +
						champion['version'] +
						'/img/champion/' +
						champion['id'] +
						'.png',
					stats: {
						update: champion['stats'],
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
					image: imgBase64,
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

	// const allUsers = await prismaClient.champion.findMany({
	// 	include: {
	// 		stats: true,
	// 	},
	// });
	// console.dir(allUsers, { depth: null });
}
