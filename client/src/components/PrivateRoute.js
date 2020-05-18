import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import useAuthToken from '../hooks/useAuthToken';

export default function PrivateRoute(props) {
    const [ token ] = useAuthToken();
    console.log();

    const history = useHistory();
    
	useEffect(() => {
		if (token === '' || token === null)
			// redirect back to login on root
			history.push('/');
	}, [token, history]);
	return <Route {...props} />;
}
