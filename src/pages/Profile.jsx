import React from 'react'
import "../App.css"
import * as Yup from "yup";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {sendCardToServer} from "../Redux/API";
import {useHistory} from "react-router-dom";

const Profile = () => {
	const dispatch = useDispatch()
	const history = useHistory();

	const validationSchema = Yup.object().shape({
		cardNumber: Yup.number().required('Поле обязательно').positive().integer(),
		expiryDate: Yup.number().required('Поле обязательно').positive().integer(),
		cardName: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
		cvc: Yup.number().required('Поле обязательно').positive().integer(),
	})

	const handleSubmit = (values) => {
		dispatch(sendCardToServer(values));
		history.push("/map");
	}
	
	return (
		<div className="profile">
			<Formik initialValues={{
				cardNumber: '',
				expiryDate: '',
				cardName: '',
				cvc: ''
			}
			}
					onSubmit={handleSubmit}
					validateOnBlur
					validationSchema={validationSchema}
			>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleBlur,
					  isValid,
					  handleSubmit,
					  dirty
				  }) => (
					<div className='form'>
						<h1 className="profile__title">Профиль</h1>
						<h4 className="profile__subtitle">Способ оплаты</h4>
						<p>
							<input
								className={'input'}
								type='number'
								name='cardNumber'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.cardNumber}
								placeholder="Номер карты"
							/>
						</p>
						{touched.cardNumber && errors.cardNumber && <p className={'error'}>{errors.cardNumber}</p>}

						<p>
							<input
								className={'input'}
								type='number'
								name='expiryDate'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.expiryDate}
								placeholder="Срок действия"
							/>
						</p>
						{touched.expiryDate && errors.expiryDate && <p className={'error'}>{errors.expiryDate}</p>}

						<p>
							<input
								className={'input'}
								type='string'
								name='cardName'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.cardName}
								placeholder="Имя владельца"
							/>
						</p>
						{touched.cardName && errors.cardName && <p className={'error'}>{errors.cardName}</p>}

						<p>
							<input
								className={'input'}
								type='password'
								name='cvc'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.cvc}
								placeholder="cvc"
							/>
						</p>
						{touched.cvc && errors.cvc && <p className={'error'}>{errors.cvc}</p>}

						<button
							className="button"
							disabled={!isValid && !dirty}
							onClick={handleSubmit}
							type='submit'
						>Сохранить
						</button>
					</div>
				)}
			</Formik>
		</div>
	)
}

export default Profile