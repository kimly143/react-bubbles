import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import useLocalStorage from './hooks/useLocalStorage';
import TokenContext from './context/TokenContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import BubblePage from './components/BubblePage';
// import Logout from './components/Logout';

function App() {
	// token and setToken as an array which return in useLocalStorage
	const tokenTools = useLocalStorage('authToken', null);

	return (
		<TokenContext.Provider value={tokenTools}>
			<Router>
				<div className="App">
					<Route exact path="/" component={Login} />
					{/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute
						exact
						path="/bubbles" component={BubblePage}
					/>
				</div>
			</Router>
		</TokenContext.Provider>
	);
}

export default App;
