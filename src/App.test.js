import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("render without crashing", () => {
	const { getByText } = render(<App />);
	const title = getByText(/Últimos gifs buscados/i);
	expect(title).toBeInTheDocument();
});
