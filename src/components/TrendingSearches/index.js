import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../Spinner/Spinner";
import "./Trending.css";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));
//descargo el componente TrendingSearches solo si lo necesito

export default function LazyTrending() {
	const { isNearScreen, elementRef } = useNearScreen();
	//trendingsearches es una promesa
	//suspense le comunica a react que los datos que necesita el componente aun no estan listos y espera para renderizarlo
	return (
		<div ref={elementRef} className="trending">
			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	);
}
