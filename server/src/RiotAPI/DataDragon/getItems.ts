import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

const URL = 'cdn/' + leagueVersion + '/data/en_US/item.json';

export async function getItems() {
	const items = await dataDragonAPI.get(URL);
	return items['data'];
}
