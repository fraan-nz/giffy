import React from "react";
import { Link } from "wouter";
import Favs from "../Favs/Favs";
import Share from "../Share/Share";
import "./Gif.css";

function Gif({ title, url, id }) {
	return (
		<div className="gif">
			<div className="gif__buttons">
				<Share url={url} />
				<Favs id={id} url={url} title={title} />
			</div>
			<Link href={`/gif/${id}`}>
				<h4 className="gif__title">{title}</h4>
				<img loading="lazy" className="gif__img" src={url} alt={title} />
			</Link>
		</div>
	);
}

export default React.memo(Gif);
