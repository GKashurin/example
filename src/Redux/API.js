import {logIn, saveCard, saveToken, writeRoute} from "./actions";
import React from "react";

//регистрация
export const registrationSuccess = (values) => (dispatch) => {
	fetch(
		"https://loft-taxi.glitch.me/register", {
			method: "POST",
			body: JSON.stringify({
				email: values.email,
				password: values.password,
				name: values.name,
				surname: values.surname,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
		.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error(response.statusText)
				}
			}
		)
		.then(response => {
			if (!!response.success) {
				dispatch(logIn(response))
			}
		})
		.catch(error => console.log(error))
}

//авторизация
export const loginSuccess = (values) => (dispatch) => {
	fetch(
		"https://loft-taxi.glitch.me/auth", {
			method: "POST",
			body: JSON.stringify({
				email: values.email,
				password: values.password,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
		.then(response => {
				if (response.status === 200) {
					return response.json()
				} else {
					throw new Error(response.statusText)
				}
			}
		)
		.then(response => {
			if (response.success) {
				dispatch(logIn());
				localStorage.setItem('token', response.token);
				dispatch(saveToken(response.token))
			}
		})
		.catch(error => console.log(error))
}
//отправка данных карты
export const sendCardToServer = (values) => (dispatch) => {
	fetch(
		"https://loft-taxi.glitch.me/card", {
			method: "POST",
			body: JSON.stringify({
				cardNumber: values.cardNumber,
				expiryDate: values.expiryDate,
				cardName: values.cardName,
				cvc: values.cvc,
				token: localStorage.getItem('token')

			}),
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
		.then(response => {
				if (response.status === 200) {
					dispatch(saveCard());
				}
			}
		)
		.catch(error => console.log(error))
}

//получение маршрута
export const getRoute = (values) => (dispatch) => {
	fetch(
			`https://loft-taxi.glitch.me/route?address1=${values.address1}&address2=${values.address2}`)
			.then((response) => response.json())
			.then(json => {
				dispatch(writeRoute(json))
			})

			.catch(error => console.log(error))
}