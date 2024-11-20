import React from "react";
import styles from "./MyBeachComponents.module.css";
import { Link } from "react-router-dom";

const Header = ({ name, setName }) => {
	// Логика для выхода
	const logout = async () => {
		await fetch("http://localhost:8000/api/logout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
		setName(""); // Очистить имя пользователя после выхода
		// Можно сделать редирект на страницу входа, если нужно:
		// window.location.href = "/login";
	};

	// Навигационные элементы для неавторизованных пользователей
	const navItems1 = [
		{ id: 1, text: "Бронирование", href: "/booking" },
		{ id: 2, text: "Турниры" },
		{ id: 3, text: "Новости" },
		{ id: 4, text: "Вход", href: "/login" },
		{ id: 5, text: "Регистрация", href: "/register" },
	];

	// Навигационные элементы для авторизованных пользователей
	const navItems2 = [
		{ id: 1, text: "Бронирование", href: "/booking" },
		{ id: 2, text: "Турниры" },
		{ id: 3, text: "Новости" },
		{ id: 4, text: "Выход" },
	];

	// Логика выбора меню в зависимости от авторизации
	const menu = name === "" ? navItems1 : navItems2;

	console.log(menu);

	return (
		<div>
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
					{menu.map((item) => (
						<Link
							key={item.id}
							to={item.href || "#"}
							className={styles.navItem}
							onClick={item.text === "Выход" ? logout : undefined}
						>
							{item.text}
						</Link>
					))}
				</nav>
			</header>
		</div>
	);
};

export default Header;
