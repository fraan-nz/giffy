import React from "react";
import BeatLoader from "react-spinners/ClipLoader";

export default function Spinner() {
	return (
		<BeatLoader
			size={250}
			color={"var(--purple)"}
			loading={true}
			speedMultiplier={0.5}
		/>
	);
}
