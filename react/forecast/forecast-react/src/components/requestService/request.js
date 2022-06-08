import { SERVER } from './../constans';

async function getJSON(data, city_name = null) {
	const url = `${data}?q=${city_name}&appid=${SERVER.API_KEY}`;
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

export default { getJSON };
