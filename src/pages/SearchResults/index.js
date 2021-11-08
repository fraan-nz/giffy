import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import "./Search.css";

export default function SearchResults({ params }) {
	const { keyword } = params; //params es un objeto que recupera el path de la url :keyword
	const { loading, gifs, setPage } = useGifs({ keyword });

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h3 className="search__title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
					<button onClick={handleNextPage}>Next Page</button>
				</>
			)}
		</>
	);
}
