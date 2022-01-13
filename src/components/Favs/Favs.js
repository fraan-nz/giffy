import React from "react";
import useUser from "../../hooks/useUser";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

export default function Favs({ id, url, title }) {
	const { isLogged, setShowModal, favs, addFav, removeFav } = useUser();

	const isInFavs = favs.some((fav) => fav.id === id);

	const handleClick = () => {
		if (isLogged) {
			if (isInFavs) {
				removeFav(id).catch((err) => console.log(err));
			} else {
				addFav({ title, id, url }).catch((err) => console.log(err));
			}
		} else {
			setShowModal(true);
		}
	};

	const [label, icon] = isInFavs
		? ["remover gif", <FaTrashAlt />]
		: ["agregar gif", <FaHeart />];

	return (
		<button onClick={handleClick} className="gif__button" key={id}>
			<span aria-label={label} role="img" className="icon">
				{icon}
			</span>
		</button>
	);
}
