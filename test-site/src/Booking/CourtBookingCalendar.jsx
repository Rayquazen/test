import React, { useEffect } from "react";
import CourtColumn from "./CourtColumn";
import LegendItem from "./LegendItem";
import styles from "./CourtBookingCalendar.module.css";
import { Link } from "react-router-dom";

const CourtBookingCalendar = () => {
	const courts = ["Корт 1", "Корт 2", "Корт 3"];
	const timeSlots = [
		{ time: "9:00", color: "yellow" },
		{ time: "10:00", color: "yellow" },
		{ time: "11:00", color: "yellow" },
		{ time: "12:00", color: "yellow" },
		{ time: "13:00", color: "yellow" },
		{ time: "14:00", color: "white" },
		{ time: "15:00", color: "white" },
		{ time: "16:00", color: "grey" },
		{ time: "17:00", color: "white" },
		{ time: "18:00", color: "white" },
		{ time: "19:00", color: "grey" },
		{ time: "20:00", color: "blue" },
		{ time: "21:00", color: "blue" },
		{ time: "22:00", color: "grey" },
		{ time: "23:00", color: "blue" },
	];

	useEffect(() => {
		// Добавляем стили при монтировании компонента
		document.body.style.overflow = "hidden"; // Убираем скролл

		// Убираем стили, когда компонент размонтируется
		return () => {
			document.body.style.overflow = ""; // Сбрасываем скролл
		};
	}, []);
	return (
		<section>
			<div className={styles.calendar}>
				<div className={styles.calendarContent}>
					<div className={styles.courtLabels}>
						{courts.map((court, index) => (
							<div key={index} className={styles.courtLabel}>
								{court}
							</div>
						))}
					</div>
					<div className={styles.bookingSection}>
						<h1 className={styles.bookingTitle}>Бронирование кортов</h1>
						<p className={styles.courtTypes}>
							<span className={styles.courtTypeHighlight}>крытые корты</span> /
							открытые корты
						</p>
						<div className={styles.dateSelector}>
							<div className={styles.dateIcon} />
							<div className={styles.dateText}>Среда 22.10.2024</div>
							<div className={styles.dateIcon} />
						</div>
						<div className={styles.bookingTable}>
							{courts.map((_, index) => (
								<CourtColumn key={index} slots={timeSlots} />
							))}
						</div>
						<div className={styles.legend}>
							<LegendItem color="#ffb100" text="900 р/час" />
							<LegendItem color="#ffffff" text="1200 р/час" />
							<LegendItem color="#2d8aff" text="1500 р/час" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourtBookingCalendar;
