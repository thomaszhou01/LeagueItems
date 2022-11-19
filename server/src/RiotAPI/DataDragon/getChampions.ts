import dataDragonAPI from './dataDragonAPI';

const URL = 'cdn/12.22.1/data/en_US/champion.json';

export async function getChampions() {
	const champions = await dataDragonAPI.get(URL);
	for (var champ in champions['data']['data']) {
		console.log(champ);
	}
	return champions['data']['data'];
}
