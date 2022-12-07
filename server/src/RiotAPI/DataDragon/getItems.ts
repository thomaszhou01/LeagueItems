import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

export async function getItems() {
	const URL = 'cdn/' + leagueVersion + '/data/en_US/item.json';

	const items = await dataDragonAPI.get(URL);
	return items['data'];
}
