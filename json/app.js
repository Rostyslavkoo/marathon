async function fetchJSON() {
	try {
		let firstName = 'Rostyk';
		const serverUrl = 'https://api.genderize.io';
		let url = `${serverUrl}?name=${firstName}`;
		const res = await (await fetch(url)).json();
		console.log(res);
	} catch (e) {
		alert(e);
	}
}

fetchJSON();
