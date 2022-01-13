const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export default function getGifs({
	keyword,
	page = 0,
	limit = 10,
	rating = "g",
} = {}) {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=${rating}&lang=en`;
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data = [] } = response;
			if (Array.isArray(data)) {
				const gifs = data.map((image) => {
					const { images, title, id } = image;
					const { url } = images.downsized_medium;
					return { title, id, url };
				});
				return gifs;
			}
		});
}
