import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

const URL = 'cdn/' + leagueVersion + '/data/en_US/champion.json';

export async function getChampions() {
	const champions = await dataDragonAPI.get(URL);
	return champions['data']['data'];
}
