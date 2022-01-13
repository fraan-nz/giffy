import React from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useUser from "../../hooks/useUser";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";

export default function Favorites() {
	const { favs, favLoading } = useUser();

	return (
		<>
			{favLoading ? (
				<Spinner />
			) : (
				<>
					<Helmet>
						<title>Favoritos | Tinphy</title>
						<meta name="description" content="gifs favoritos en tinphy"></meta>
					</Helmet>
					<div className="gifs__container">
						<h2 className="subTitle">
							{favs.length !== 0 ? "Favoritos" : "No tienes favoritos"}
						</h2>
						<ListOfGifs gifs={favs} />
					</div>
				</>
			)}
		</>
	);
}
