import React from "react";
import { Link } from "wouter";
import "./Category.css";

export default function Category({ name, options = [] }) {
	return (
		<>
			<h2 className="subTitle category">{name}</h2>
			<ul className="category__list">
				{options.map((option) => (
					<li key={option}>
						<Link className="category__link" to={`/search/${option}`}>
							{option}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
