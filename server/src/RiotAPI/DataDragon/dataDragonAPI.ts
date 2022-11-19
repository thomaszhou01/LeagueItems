const axios = require('axios');
export default axios.create({
	timeout: 0,
	baseURL: 'https://ddragon.leagueoflegends.com/',
	// headers: {
	//   "Access-Control-Allow-Origin": "*",
	// },
});
