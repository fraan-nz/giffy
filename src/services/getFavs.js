import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { firebaseApp } from "../firebase/credentials";

const db = getFirestore(firebaseApp);

export const getFavs = async () => {
	const dbData = await collection(db, "PAsxsoteBYfhnOEDCBYKZYXkJeg2");
	onSnapshot(dbData, (snapshot) => {
		let arrayFavs = [];
		snapshot.forEach((doc) => {
			const gifData = { id: doc.id, ...doc.data() };
			arrayFavs.push(gifData);
		});
		return arrayFavs;
	});
};
