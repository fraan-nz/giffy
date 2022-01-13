import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import "./index.css";
import LazyTrending from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
	const { loading, gifs } = useGifs();

	return (
		<>
			<Helmet>
				<title>Tinphy</title>
				<meta name="description" content="Searching gifs..."></meta>
			</Helmet>
			<SearchForm />
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
