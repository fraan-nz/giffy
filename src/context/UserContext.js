import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [favs, setFavs] = useState([]);
	const [showModal, setShowModal] = useState(false);

	return (
		<UserContext.Provider
			value={{ user, setUser, showModal, setShowModal, favs, setFavs }}
		>
			{children}
		</UserContext.Provider>
	);
}
