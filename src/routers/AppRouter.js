import { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { JournalPage } from '../components/journal/JournalPage'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

export const AppRouter = () => {
	const dispatch = useDispatch()

	const [checking, setChecking] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName))
				setIsLoggedIn(true)
			} else {
				setIsLoggedIn(false)
			}

			setChecking(false)
		})
	}, [dispatch, setChecking, setIsLoggedIn])

	if (checking) {
		return <h1>Espere...</h1>
	}

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/auth' component={AuthRouter} />

					<Route exact path='/' component={JournalPage} />

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	)
}
