import { SERVER } from './constants.js';
import { getCookie } from './main.js';

 function getToken() {
	return getCookie(SERVER.COOKIE_TOKEN_NAME);
}

export default {
	async post(url, body = {}, headers = {}) {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken()}`,
			},
			body: JSON.stringify(body),
		};
		try {
			const res = await fetch(url, options);
			if (res.status != 200) {
				throw Error(res.statusText);
			}
			return await res.json();
		} catch (error) {
			return Promise.reject(error);
		}
	},
	async get(url, params = {}, headers = {}) {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken()}`,
			},
		};
		try {
			const res = await fetch(url, options);
			if (res.status != 200) {
				throw Error(res.statusText);
			}
			return await res.json();
		} catch (error) {
			return Promise.reject(error);
		}
	},
	async patch(url, body = {}, headers = {}) {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getToken()}`,
			},
			body: JSON.stringify(body),
		};
		try {
			const res = await fetch(url, options);
			if (res.status != 200) {
				throw Error(res.statusText);
			}
			return await res.json();
		} catch (error) {
			return Promise.reject(error);
		}
	},
};
