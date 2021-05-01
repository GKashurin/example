import React from 'react';
import Logo from "../assets/Logo2.png"
import Menu from "./Menu";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<img className="logo__icon" src={Logo} alt={"logo"}/>
			</div>
			<Menu/>
		</header>
	)

}

export default Header