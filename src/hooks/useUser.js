import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	signInWithRedirect,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase/credentials";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export default function useUser() {
	const { user, setUser, showModal, setShowModal, favs, setFavs, favLoading } =
		useContext(UserContext);
	const [error, setError] = useState("");

	//Auth Services
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				const uid = currentUser.uid;
				setUser(uid);
			} else {
				setUser(null);
			}
		});
	}, [setUser]);

	useEffect(() => {
		setTimeout(() => {
			setError("");
		}, 2000);
	}, [error]);

	const regis = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password).catch((err) =>
			setError(err)
		);
	};

	const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password).catch((err) =>
			setError(err)
		);
	};

	const googleLogin = () => {
		signInWithRedirect(auth, googleProvider);
	};

	const logout = () => {
		signOut(auth);
	};

	//Db Services

	const addFav = async ({ title, id, url }) => {
		await setDoc(doc(db, user, id), { title, url });
	};
	const removeFav = async (id) => {
		await deleteDoc(doc(db, user, id));
	};

	return {
		isLogged: Boolean(user),
		user,
		regis,
		login,
		googleLogin,
		logout,
		error,
		setShowModal,
		showModal,
		favs,
		addFav,
		removeFav,
		setFavs,
		favLoading,
	};
}
