import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

const URL = 'cdn/' + '12.22.1' + '/data/en_US/champion.json';

export async function getChampions() {
	const champions = await dataDragonAPI.get(URL);
	return champions['data']['data'];
}
