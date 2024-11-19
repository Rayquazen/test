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
				<Header />
				<div className={styles.backpic}>
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
