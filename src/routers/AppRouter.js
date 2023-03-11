import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { JournalPage } from '../components/journal/JournalPage'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
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
