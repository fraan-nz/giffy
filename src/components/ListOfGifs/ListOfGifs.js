import React from "react";
import Gif from "../Gif/Gif";
import Masonry from "react-masonry-css";

export default function ListOfGifs({ gifs }) {
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		975: 2,
		765: 1,
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="gif__container"
			columnClassName=".gif__containerColumns"
		>
			{gifs.map((singleGif) => (
				<Gif
					key={singleGif.id}
					title={singleGif.title}
					id={singleGif.id}
					url={singleGif.url}
				/>
			))}
		</Masonry>
	);
}
