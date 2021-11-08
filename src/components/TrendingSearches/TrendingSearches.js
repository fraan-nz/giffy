import React, { useEffect, useState } from "react";
import getTrending from "../../services/getTrending";
import Category from "../Category/Category";

export default function TrendingSearches() {
	const [trends, setTrends] = useState([]);

	useEffect(function () {
		getTrending().then((response) => setTrends(response));
	}, []);

	return <Category name="Tendencias" options={trends} />;
}
