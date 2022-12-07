import dataDragonAPI from './dataDragonAPI';
import { leagueVersion } from '../..';

export async function getChampions() {
	const URL = 'cdn/' + leagueVersion + '/data/en_US/champion.json';
	const champions = await dataDragonAPI.get(URL);
	return champions['data']['data'];
}
