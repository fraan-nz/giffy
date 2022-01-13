import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import LazyTrending from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";
import "./index.css";

export default function Home() {
	const { gifs } = useGifs();

	return (
		<>
			<Helmet>
				<title>Tinphy</title>
				<meta name="description" content="Searching gifs..."></meta>
			</Helmet>
			<SearchForm />
			<div className="home__container">
				<div className="gifs__container">
					<h2 className="subTitle">Últimos gifs buscados</h2>
					<ListOfGifs gifs={gifs} />
				</div>
				<LazyTrending />
			</div>
		</>
	);
}
