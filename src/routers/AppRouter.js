import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalPage } from '../components/journal/JournalPage'
import { firebase } from '../firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

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
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path='/auth'
						component={AuthRouter}
					/>

					<PrivateRoute
						exact
						isAuthenticated={isLoggedIn}
						path='/'
						component={JournalPage}
					/>

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	)
}
