import React from "react";
import styles from "./MyBeachComponents.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.heroTitle}>my beach</h1>
			<h2 className={styles.heroSubtitle}>
				комплекс <br /> пляжных <br /> видов спорта
			</h2>
			<button className={styles.ctaButton}>Забронировать</button>
		</section>
	);
};

export default Hero;
