import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'

export const RegisterPage = () => {
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
			console.log('Form correct')
		}

		console.log(name, email, password, password2)
	}

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('Name is required')
			return false
		} else if (!validator.isEmail(email)) {
			console.log('Email is not valid')
			return false
		} else if (password !== password2 || password.length < 5) {
			console.log('Pssword should at least 6 gharacters and match each other')
			return false
		}

		return true
	}

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={handleRegister}>
				<div className='auth__alert-error'>Hola mundo</div>
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
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>

				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					autoComplete='off'
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
