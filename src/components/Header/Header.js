import React, { useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import ModalPortal from "../Modal/Modal";
import Login from "../Login/Login";
import "./Header.css";

export default function Header() {
	const { isLogged, logout, showModal, setShowModal } = useUser();
	const [location, setLocation] = useLocation();

	const handleShowModal = () => {
		if (!isLogged) return setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};
	const handleLogout = (e) => {
		e.preventDefault();
		setShowModal(false);
		logout();
		setLocation("/");
	};

	useEffect(() => {
		if (isLogged) return setShowModal(false);
	}, [isLogged, setShowModal]);

	return (
		<header className="header">
			{isLogged ? (
				<button className="header__btn" onClick={handleLogout}>
					Logout
				</button>
			) : (
				<button className="header__btn" onClick={handleShowModal}>
					Login
				</button>
			)}

			{showModal && (
				<ModalPortal onClose={handleCloseModal}>
					<Login />
				</ModalPortal>
			)}
		</header>
	);
}
