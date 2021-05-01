import React from "react";
import {Formik} from "formik";
import "../App.css"
import {getRoute} from "../Redux/API";
import {useDispatch, useSelector} from "react-redux";

const TaxiOrderForm = () => {
	const dispatch = useDispatch()

	const handleSubmit = (values) => {
		dispatch(getRoute(values));
	}
	return (
		<div className="taxiOrderForm">
			<Formik initialValues={{
				address1: '',
				address2: '',
			}
			}
					onSubmit={handleSubmit}
			>
				{({
					  values,
					  handleChange,
					  handleSubmit
				  }) => (
					<div className='form'>

						<p>
							<select
								className={'input'}
								name='address1'
								onChange={handleChange}
								value={values.address1}
							>
								<option>Откуда</option>
								<option>Пулково (LED)</option>
								<option>Мариинский театр</option>
								<option>Эрмитаж</option>
							</select>
						</p>

						<p>
							<select
								className={'input'}
								name='address2'
								onChange={handleChange}
								value={values.address2}
							>
								<option>Куда</option>
								<option>Пулково (LED)</option>
								<option>Мариинский театр</option>
								<option>Эрмитаж</option>
							</select>
						</p>

						<button
							className="button"
							onClick={handleSubmit}
							type='submit'>заказать такси
						</button>
					</div>
				)}
			</Formik>
		</div>
	)
}

export default TaxiOrderForm