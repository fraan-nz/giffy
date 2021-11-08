import React, { useState } from "react";

const Context = React.createContext({});

//Creo el contexto que pasara el estado de los gifs y una función para modificarlo
export function GifsContextProvider({ children }) {
	const [gifs, setGifs] = useState([]);
	return (
		<Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
	);
}

export default Context;
