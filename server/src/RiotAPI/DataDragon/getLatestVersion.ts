import dataDragonAPI from './dataDragonAPI';

const URL = 'api/versions.json';

export async function getLatestVersion() {
	const version = await dataDragonAPI.get(URL);
	return version['data'][0];
}
