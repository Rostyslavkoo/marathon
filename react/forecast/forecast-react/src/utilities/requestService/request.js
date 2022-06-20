import { SERVER } from '../constans';

async function Fetch(serverURL, cityName = null) {
	const url = `${serverURL}?q=${cityName}&appid=${SERVER.API_KEY}`;
	try {
		const res = await (await fetch(url)).json();
		if (res.cod == 404) {
			/* eslint-disable */
			alert(res.message);
			return null;
		}
		return res;
	} catch (e) {
		console.error(e);
	}
}

export default { Fetch };
