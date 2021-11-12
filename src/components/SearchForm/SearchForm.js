import React, { useState } from "react";

function SearchForm({ onSubmit }) {
	const [keyword, setKeyword] = useState("");

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ keyword });
	};

	return (
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
	);
}

export default React.memo(SearchForm);
