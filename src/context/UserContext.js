import React, { createContext, useState, useEffect } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { firebaseApp } from "../firebase/credentials";
const db = getFirestore(firebaseApp);

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [favs, setFavs] = useState([]);
	const [favLoading, setFavLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	// useEffect(() => {
	// 	let mounted = true;
	// 	setFavLoading(true);
	// 	if (!user) return setFavs([]);
	// 	const getFavs = async () => {
	// 		if (mounted) {
	// 			const dbData = await collection(db, user);
	// 			onSnapshot(dbData, (snapshot) => {
	// 				let arrayFavs = [];
	// 				snapshot.forEach((doc) => {
	// 					const gifData = { id: doc.id, ...doc.data() };
	// 					arrayFavs.push(gifData);
	// 				});
	// 				setFavs(arrayFavs);
	// 				setFavLoading(false);
	// 			});
	// 		}
	// 	};
	// 	getFavs();

	// 	return () => (mounted = false);
	// }, [user]);

	useEffect(() => {
		setFavLoading(true);
		if (!user) return setFavs([]);

		const dbData = collection(db, user);
		const unsuscribe = onSnapshot(dbData, (snapshot) => {
			let arrayFavs = [];
			snapshot.forEach((doc) => {
				const gifData = { id: doc.id, ...doc.data() };
				arrayFavs.push(gifData);
			});
			setFavs(arrayFavs);
			setFavLoading(false);
		});

		return () => unsuscribe();
	}, [user]);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				showModal,
				setShowModal,
				favs,
				setFavs,
				favLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
