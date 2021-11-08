import React, { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import "./index.css";
import LazyTrending from "../../components/TrendingSearches";

export default function Home() {
	const [keyword, setKeyword] = useState("");
	const [path, setPatch] = useLocation();
	//hook de wouter que guarda la ruta y una funcion para modificarla
	const { loading, gifs } = useGifs();

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setPatch(`/search/${keyword}`);
	};
	//guardo el estado de cada cambio dentro del input
	//submit me redirecciona a una ruta que contiene la keyword buscada

	return (
		<>
			<form onSubmit={handleSubmit} className="searchForm">
				<input
					onChange={handleChange}
					type="text"
					value={keyword}
					placeholder="Search a gif.."
					className="searchForm__input"
				/>
				<input type="submit" value="Buscar" className="searchForm__button" />
			</form>
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
