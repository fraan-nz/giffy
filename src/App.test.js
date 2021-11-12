import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "intersection-observer";
import App from "./App";

test("render without crashing", () => {
	const { getByText } = render(<App />);
	const title = getByText(/Últimos gifs buscados/i);
	expect(title).toBeInTheDocument();
});

test("home work as expected", async () => {
	const { container } = render(<App />);
	const gifLink = await waitForElement(() =>
		container.querySelector(".gif__img")
	);
	expect(gifLink).toBeVisible();
});
