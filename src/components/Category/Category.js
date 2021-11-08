import React from "react";
import { Link } from "wouter";
import "./Category.css";

export default function Category({ name, options = [] }) {
	return (
		<>
			<h3 className="category__title">{name}</h3>
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
