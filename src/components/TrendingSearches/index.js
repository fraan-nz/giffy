import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../Spinner/Spinner";
import "./Trending.css";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
	const { isNearScreen, elementRef } = useNearScreen();

	return (
		<div ref={elementRef} className="trending">
			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	);
}
