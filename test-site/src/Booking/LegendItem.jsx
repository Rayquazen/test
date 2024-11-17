import React from "react";
import styles from "./CourtBookingCalendar.module.css";

const LegendItem = ({ color, text }) => {
	return (
		<div className={styles.legendItem} style={{ color }}>
			<div className={styles.legendIcon} style={{ backgroundColor: color }} />
			<div className={styles.legendText}>{text}</div>
		</div>
	);
};

export default LegendItem;
