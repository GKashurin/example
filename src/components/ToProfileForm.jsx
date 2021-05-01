import React from "react";
import {Link} from "react-router-dom";
import "../App.css"

const ToProfileForm = () => {
	return (
		<div className="toProfileForm">
			<div className="toProfileForm__title">Заполните платежные данные</div>
			<div className="toProfileForm__subtitle">Укажите информацию о банковской карте, чтобы сделать заказ</div>
			<button className="button">
				<Link to="/profile">Перейти в профиль</Link>
			</button>
		</div>
	)
}

export default ToProfileForm