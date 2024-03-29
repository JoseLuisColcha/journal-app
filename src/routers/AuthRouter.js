import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../components/auth/LoginPage'
import { RegisterPage } from '../components/auth/RegisterPage'

export const AuthRouter = () => {
	return (
		<div className='auth__main'>
			<div className='auth__box-container'>
				<Switch>
					<Route exact path='/auth/login' component={LoginPage} />

					<Route exact path='/auth/register' component={RegisterPage} />

					<Redirect to='/auth/register' />
				</Switch>
			</div>
		</div>
	)
}
