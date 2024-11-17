import React from "react";
import styles from "./CourtBookingCalendar.module.css";

const TimeSlot = ({ time, color }) => {
	const colorClass = {
		yellow: styles.timeSlotYellow,
		white: styles.timeSlotWhite,
		blue: styles.timeSlotBlue,
		grey: styles.timeSlotGrey,
	}[color];

	return (
		<div className={`${styles.timeSlot} ${colorClass}`}>
			<span>{time}</span>
		</div>
	);
};

export default TimeSlot;
