import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

export async function getItems() {
	const URL = 'cdn/' + leagueVersion + '/data/en_US/item.json';

	const items = await dataDragonAPI.get(URL);
	const itemData = await dataDragonAPI.get(
		'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json',
	);
	return [items['data'], itemData['data']];
}
