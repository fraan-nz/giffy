import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import "./index.css";
import LazyTrending from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
	const [patch, setPatch] = useLocation();
	//hook de wouter que guarda la ruta y una funcion para modificarla
	const { loading, gifs } = useGifs();

	const handleSubmit = useCallback(
		({ keyword }) => {
			setPatch(`/search/${keyword}`);
		},
		[setPatch]
	);
	//submit me redirecciona a una ruta que contiene la keyword buscada

	return (
		<>
			<Helmet>
				<title>Tinphy</title>
				<meta name="description" content="Searching gifs..."></meta>
			</Helmet>
			<SearchForm onSubmit={handleSubmit} />
			<main className="home__container">
				<div className="home__lastGifs">
					<h2 className="home__subTitle">Últimos gifs buscados</h2>
					<ListOfGifs gifs={gifs} />
				</div>
				<LazyTrending />
			</main>
		</>
	);
}
