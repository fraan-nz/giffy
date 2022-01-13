import React from "react";
import ReactDOM from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import "./Modal.css";

function Modal({ children, onClose }) {
	return (
		<div className="modal">
			<div className="modal__content">
				<button className="modal__close" onClick={onClose}>
					<FaWindowClose />
				</button>
				{children}
			</div>
		</div>
	);
}

export default function ModalPortal({ children, onClose }) {
	return ReactDOM.createPortal(
		<Modal onClose={onClose}>{children}</Modal>,
		document.getElementById("modal")
	);
}
