import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home/index";
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Link to="/">
				<h1 className="app__logo">GIFFY</h1>
			</Link>
			<section className="app__container">
				<GifsContextProvider>
					<Route path="/" component={Home} />
					<Route path="/search/:keyword" component={SearchResults} />
					<Route path="/gif/:id" component={Detail} />
				</GifsContextProvider>
			</section>
		</div>
	);
}

export default App;
