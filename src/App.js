import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home/index";
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "./context/UserContext";
import Detail from "./pages/Detail";
import Header from "./components/Header/Header";
import "./App.css";
import Favorites from "./pages/Favorites/Favorites";

function App() {
	return (
		<UserContextProvider>
			<div className="app">
				<Header />
				<Link to="/">
					<h1 className="app__logo">Tinphy</h1>
				</Link>
				<main className="app__container">
					<GifsContextProvider>
						<Route path="/" component={Home} />
						<Route path="/search/:keyword/:rating?" component={SearchResults} />
						<Route path="/gif/:id" component={Detail} />
						<Route path="/favorites" component={Favorites} />
					</GifsContextProvider>
				</main>
			</div>
		</UserContextProvider>
	);
}

export default App;
