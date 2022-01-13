import React from "react";
import Gif from "../Gif/Gif";
import Masonry from "react-masonry-css";

export default function ListOfGifs({ gifs }) {
	const breakpointColumnsObj = {
		default: 4,
		1495: 3,
		1285: 2,
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
