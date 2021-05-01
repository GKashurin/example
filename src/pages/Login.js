import React from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {loginSuccess} from "../Redux/API";

// import {loginSuccess} from "../Redux/API";

const Login = () => {
	const isLoggedIn = useSelector(({login}) => !!login.isLoggedIn)
	const dispatch = useDispatch()
	const history = useHistory();

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Введите верный email').required('Поле обязательно'),
		password: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
	})

	const handleSubmit = (values) => {
		dispatch(loginSuccess(values))
	}

	if (isLoggedIn) {
		history.push("/map")
	}

	return (
		<div className="login">

			<Formik initialValues={{
				email: '',
				password: '',
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
						<h1 className="login__title">Войти</h1>
						<div className="login__text">Новый пользователь?
							<Link to="/registration" className="blueLink"> Зарегистрируйтесь</Link>
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
						>Войти
						</button>
					</div>
				)}
			</Formik>
		</div>
	)
}

export default Login