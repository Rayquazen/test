import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Добавляем Router
import MyBeachPage from "./MyBeachPage.jsx";
import CourtBookingCalendar from "./Booking/CourtBookingCalendar.jsx";
import Register from "./pages/Regiter.jsx";
import Header from "./Header.jsx";
import Login from "./pages/Login.jsx";
import { useState, useEffect } from "react";
import styles from "./MyBeachComponents.module.css";

function App() {
	const [name, setName] = useState("");
	useEffect(() => {
		(async () => {
			const response = await fetch("http://localhost:8000/api/user", {
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const content = await response.json();

			setName(content.Name);
			// console.log(content.Name);
		})();
	}, []);
	return (
		<>
			<Router>
				<Header name={name} setName={setName} />
				<Routes>
					<Route path="/" element={<MyBeachPage />} />
					<Route path="/booking" element={<CourtBookingCalendar />} />
					<Route path="/login" element={<Login setName={setName} />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
