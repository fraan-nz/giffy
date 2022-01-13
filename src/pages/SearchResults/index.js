import React, { useRef, useEffect, useCallback } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./Search.css";
import { Helmet } from "react-helmet";

export default function SearchResults({ params }) {
	const { keyword, rating = "g" } = params;
	const { loading, gifs, setPage } = useGifs({ keyword, rating });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	}); //me aseguro de que pase el externalRef cuando haya terminado de cargar
	const title = gifs ? keyword : "Cargando...";

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
					<Helmet>
						<title>{title} | Tinphy</title>
						<meta name="description" content={title}></meta>
					</Helmet>
					<SearchForm initialKeyword={keyword} initialRating={rating} />
					<h3 className="search__title">{decodeURI(keyword)}</h3>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}
		</>
	);
}
