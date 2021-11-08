import React, { useRef, useEffect, useCallback } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./Search.css";

export default function SearchResults({ params }) {
	const { keyword } = params; //params es un objeto que recupera el path de la url :keyword
	const { loading, gifs, setPage } = useGifs({ keyword });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	}); //me aseguro de que pase el externalRef cuando haya terminado de cargar

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceHandleNextPage = useCallback(
		debounce(() => setPage((prevPage) => prevPage + 1), 1000),
		[setPage]
	);

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage();
	}, [debounceHandleNextPage, isNearScreen]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h3 className="search__title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
}
