import { API_KEY, API_URL } from "./settings";

//fetch a la api con la keyword que recibe desde useGifs
//desestructuro para guardar el atributo data de la respuesta
export default function getGifs({ keyword, page = 0, limit = 10 } = {}) {
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=g&lang=en`;
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
//desestructuro data para guardar en gifs solamente { title, id, url }
