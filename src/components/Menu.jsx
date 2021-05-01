import React from 'react';
import { Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../Redux/actions";

const Menu = () => {
	const isLoggedIn = useSelector(({login}) => login.isLoggedIn)
	const dispatch = useDispatch()
	const history = useHistory()

	if (!isLoggedIn) {
		history.push("/")
	}

	const handleSubmit = () => {
		dispatch(logOut(!isLoggedIn))
	}

	return (
		<ul className="menu">
			<li className="menu__item">
				<Link to="/map">Карта</Link>
			</li>
			<li className="menu__item">
				<Link to="/profile">Профиль</Link>
			</li>
			<li className="menu__item">
				<button className="exit" onClick={handleSubmit}>Выйти</button>
			</li>
		</ul>
	)
}

export default Menu