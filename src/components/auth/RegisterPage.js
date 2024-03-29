import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterEmailPasswordName } from '../../actions/auth'

export const RegisterPage = () => {
	const dispatch = useDispatch()
	const { msgError } = useSelector(state => state.ui)

	const [values, handleInputChange] = useForm({
		name: 'José',
		email: 'jose.colcha@epn.edu.ec',
		password: '12345',
		password2: '12345',
	})

	const { name, email, password, password2 } = values

	const handleRegister = e => {
		e.preventDefault()

		if (isFormValid()) {
			dispatch(startRegisterEmailPasswordName(email, password, name))
		}
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'))
			return false
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'))
			return false
		} else if (password !== password2 || password.length < 5) {
			dispatch(
				setError('Password should at least 6 gharacters and match each other')
			)
			return false
		}
		dispatch(removeError())
		return true
	}

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form
				onSubmit={handleRegister}
				className='animate__animated animate__fadeIn animate__faster'
			>
				{msgError && <div className='auth__alert-error'>{msgError}</div>}

				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					autoComplete='on'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					autoComplete='on'
					value={password2}
					onChange={handleInputChange}
				/>
				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>
				<Link to='/auth/login'>Already registered?</Link>
			</form>
		</>
	)
}
