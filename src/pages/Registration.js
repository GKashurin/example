import React from 'react'
import {Formik} from "formik";
import * as Yup from "yup";
import "../App.css"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registrationSuccess} from "../Redux/API";

const Registration = () => {
	const isLoggedIn = useSelector(({login}) => !!login.isLoggedIn)
	const dispatch = useDispatch()
	const history = useHistory();

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Введите верный email').required('Поле обязательно'),
		name: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
		surname: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
		password: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
	})

	const handleSubmit = (values) => {
		dispatch(registrationSuccess(values))
	}

	if (isLoggedIn) {
		history.push("/map")
	}


	return (
		<div className="registration">
			<Formik initialValues={{
				email: '',
				name: '',
				surname: '',
				password: '',
			}
			}
					// onSubmit={handleSubmit}
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
						<h1 className="registration__title">Регистрация</h1>
						<div className="registration__text">Уже зарегистрирован? <Link to="/"
																					   className="blueLink"> Войти</Link>
						</div>
						<p>
							<input
								className={'input'}
								type='text'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder="Адрес электронной почты"
							/>
						</p>
						{touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

						<p>
							<input
								className={'input'}
								type='text'
								name='name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								placeholder="Имя"
							/>
						</p>
						{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

						<p>
							<input
								className={'input'}
								type='text'
								name='surname'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.surname}
								placeholder="Фамилия"
							/>
						</p>
						{touched.surname && errors.surname && <p className={'error'}>{errors.surname}</p>}

						<p>
							<input
								className={'input'}
								type='password'
								name='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								placeholder="Пароль"
							/>
						</p>
						{touched.password && errors.password && <p className={'error'}>{errors.password}</p>}

						<button
							className="button"
							disabled={!isValid && !dirty}
							onClick={handleSubmit}
							type='submit'
						>Зарегистрироваться
						</button>
					</div>
				)}
			</Formik>

		</div>
	)

}

export default Registration