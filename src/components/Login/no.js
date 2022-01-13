import React, { useState } from "react";
import "./Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="form">
			<label className="form__label">
				Email
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="form__input"
				/>
			</label>
			<label className="form__label">
				Password
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="form__input"
				/>
			</label>
			<button className="form__btn">Login</button>
		</form>
	);
}
