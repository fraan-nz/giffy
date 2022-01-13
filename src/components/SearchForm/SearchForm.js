import React, { useReducer } from "react";
import { useLocation } from "wouter";
import "./SearchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r"];
const ACTIONS = {
	UPDATE_KEYWORD: "update_keyword",
	UPDATE_RATING: "update_rating",
};

function SearchForm({ initialKeyword = "", initialRating = "" }) {
	const [, setPatch] = useLocation();

	const reducer = (state, accion) => {
		switch (accion.type) {
			case ACTIONS.UPDATE_KEYWORD:
				return {
					...state,
					keyword: accion.payload,
				};
			case ACTIONS.UPDATE_RATING:
				return {
					...state,
					rating: accion.payload,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
	});
	const { keyword, rating } = state;

	const handleChange = (event) => {
		dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value });
		//setKeyword(event.target.value);
	};

	const handleChangeRating = (event) => {
		dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value });
		//setRating(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setPatch(`/search/${keyword}/${rating}`);
	};

	return (
		<form onSubmit={handleSubmit} className="searchForm">
			<select
				value={rating}
				onChange={handleChangeRating}
				className="searchForm__input rating"
				title="Clasificación"
			>
				{RATINGS.map((rating) => (
					<option key={rating}>{rating}</option>
				))}
			</select>
			<input
				onChange={handleChange}
				type="text"
				value={keyword}
				placeholder="Busca un gif.."
				className="searchForm__input"
			/>
			<input
				type="submit"
				value="Buscar"
				className="searchForm__button"
				title="Buscar"
			/>
		</form>
	);
}

export default React.memo(SearchForm);
