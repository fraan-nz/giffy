import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Login.css";

export default function Login() {
	const [register, setRegister] = useState(false);
	const { login, googleLogin, regis, error } = useUser();

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validate={(values) => {
				let errores = {};
				if (!values.email) {
					errores.email = "Por favor ingrese un email.";
				} else if (
					!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
				) {
					errores.email =
						"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
				}

				if (!values.password) {
					errores.password = "Por favor ingrese una contraseña.";
				} else if (
					!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)
				) {
					errores.password =
						"Mínimo ocho caracteres, al menos una letra y un número.";
				}

				return errores;
			}}
			onSubmit={(values, { resetForm }) => {
				if (register) {
					regis(values.email, values.password);
				} else {
					login(values.email, values.password);
				}
				resetForm();
			}}
		>
			{({ errors }) => (
				<Form className="form">
					<h2 className="form__title">
						{register ? "Regístrate" : "Inicia Sesión"}
					</h2>
					<label className="form__label">
						Email
						<Field name="email" type="email" className="form__input" />
					</label>
					<ErrorMessage
						name="email"
						component={() => <div className="error">{errors.email}</div>}
					/>

					<label className="form__label">
						Contraseña
						<Field name="password" type="password" className="form__input" />
					</label>
					<ErrorMessage
						name="password"
						component={() => <div className="error">{errors.password}</div>}
					/>

					<div className="form__buttons">
						<button type="submit" className="form__btn">
							{register ? "Registrarme" : "Iniciar Sesión"}
						</button>

						<button type="button" className="form__btn" onClick={googleLogin}>
							Iniciar con Google
						</button>

						<button
							className="form__btn"
							onClick={() => setRegister(!register)}
							type="button"
						>
							{register ? "Ya tengo cuenta" : "Quiero registrarme"}
						</button>
					</div>

					{error ? <p>Email o Contraseña no validos</p> : null}
				</Form>
			)}
		</Formik>
	);
}
