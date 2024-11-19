import React from "react";
import styles from "./MyBeachComponents.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	const navItems = [
		{ id: 1, text: "Бронирование", href: "/booking" },
		{ id: 2, text: "Турниры" },
		{ id: 3, text: "Новости" },
		{ id: 4, text: "Вход", href: "/login" },
	];

	return (
		<header className={styles.header}>
			<Link to="/">
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/d22eff6f2b65167c70498104bfd87a12281f989afbce655fd2dec77196dd4a01?placeholderIfAbsent=true&apiKey=5d694fdf6b9b46ce8185a79644b61bb9"
					alt="My Beach Logo"
					className={styles.logo}
				/>
			</Link>
			<nav className={styles.navigation}>
				{navItems.map((item) => (
					<Link key={item.id} to={item.href || "#"} className={styles.navItem}>
						{item.text}
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Header;
