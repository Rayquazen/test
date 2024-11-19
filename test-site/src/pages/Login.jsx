import React from "react";
import Header from "../Header";
import SignIn from "../components/SignInComponent.jsx";

const Form = () => {
	const MyStyle = {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		backgroundColor: "rgb(65, 65, 65)", // Фон страницы
		overflow: "hidden",
	};
	const abs = {
		margin: 0,
		padding: 0,
		overflow: "hidden",
	};

	return (
		<>
			<div style={abs}>
				<Header />
			</div>
			<div style={MyStyle}>
				<SignIn />
			</div>
		</>
	);
};

export default Form;
