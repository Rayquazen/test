import React from "react";
import TimeSlot from "./TimeSlot";
import styles from "./CourtBookingCalendar.module.css";

const CourtColumn = ({ slots }) => {
	return (
		<div className={styles.tableRow}>
			<div className={styles.timeSlots}>
				{slots.map((slot, index) => (
					<TimeSlot key={index} time={slot.time} color={slot.color} />
				))}
			</div>
		</div>
	);
};

export default CourtColumn;
