import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";
import Gif from "../Gif/Gif";
import Masonry from "react-masonry-css";

export default function ListOfGifs({ gifs }) {
	const { getData } = useUser();

	useEffect(() => {
		getData();
	}, [getData]);

	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		975: 2,
		765: 1,
	};

	return (
		<>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="gif__container"
				columnClassName=".gif__containerColumns"
			>
				{gifs.map((singleGif) => (
					<Gif
						key={singleGif.id}
						title={singleGif.title}
						url={singleGif.url}
						id={singleGif.id}
					/>
				))}
			</Masonry>
		</>
	);
}
