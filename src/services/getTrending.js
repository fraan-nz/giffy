const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export default function getTrending() {
	const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data = [] } = response;
			return data;
		});
}
//data es un array de string con los trending
