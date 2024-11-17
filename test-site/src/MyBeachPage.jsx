import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import styles from "./MyBeachComponents.module.css";
import BeachActivities from "./BeachActivities";
import CourtSchemes from "./CourtSchemes";
import InternalRules from "./InternalRules";

const MyBeachPage = () => {
	return (
		<div className={styles.pageWrapper}>
			<main className={styles.mainContent}>
				<div className={styles.backpic}>
					<Header />
					<Hero />
					<Footer />
				</div>
				<BeachActivities />
				<CourtSchemes />
				<InternalRules />
			</main>
		</div>
	);
};

export default MyBeachPage;
