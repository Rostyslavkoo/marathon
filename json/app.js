let fistNAme = 'Rostyk'
const serverUrl = 'https://api.genderize.io';
let url = `${serverUrl}?name=${fistNAme}`
let data = fetch (url)