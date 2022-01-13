import React from "react";
import useUser from "../../hooks/useUser";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

export default function Favs({ id, url, title }) {
	const { isLogged, setShowModal, favs, addFav, removeFav } = useUser();

	const isInFavs = favs.some((fav) => fav.id === id);

	const handleClick = () => {
		if (isLogged) {
			isInFavs ? removeFav(id) : addFav({ title, id, url });
		} else {
			setShowModal(true);
		}
	};

	const [label, icon] = isInFavs
		? ["remover gif", <FaTrashAlt />]
		: ["agregar gif", <FaHeart />];

	return (
		<button onClick={handleClick} className="favButton">
			<span aria-label={label} role="img" className="icon">
				{icon}
			</span>
		</button>
	);
}
