import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Добавляем Router
import MyBeachPage from "./MyBeachPage.jsx";
import CourtBookingCalendar from "./Booking/CourtBookingCalendar.jsx";
import Form from "./pages/Login.jsx";

// Render the MyBeachPage component in the root element of the DOM

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<MyBeachPage />} />
				<Route path="/booking" element={<CourtBookingCalendar />} />
				<Route path="/login" element={<Form />} />
			</Routes>
		</Router>
	</StrictMode>
);
