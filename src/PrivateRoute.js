import React from "react";
import {Redirect, Route} from "react-router-dom"
import {useSelector} from "react-redux";
//https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e

const PrivateRoute = ({component: Component, ...rest}) => {
	const isLoggedIn = useSelector(({login}) => login.isLoggedIn)
	// const isCheckedIn = useSelector(({registration}) => registration.isCheckedIn)

	return (
		<Route
			{...rest}
			render={ props => (
				isLoggedIn ? (
					<Component {...props}/>
				) : (
					<Redirect to="/"/>
				)
			)
			}
		/>
	)
}


export default PrivateRoute