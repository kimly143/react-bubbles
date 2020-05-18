import React from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useForm from '../hooks/useForm';
import useAuthToken from '../hooks/useAuthToken';

export default function Login(props) {
	const [ token, setToken ] = useAuthToken();
	const [ formState, changeHandler ] = useForm({
		username: 'Lambda School',
		password: 'i<3Lambd4'
	});

	//using async
	const submitHandler = async (event) => {
		event.preventDefault();
		console.log(formState);
		// making a request to server for login, sending formState contain username and password to server
		// await : make promise to resolve first then continue
		const response = await axios.post('http://localhost:5000/api/login', formState);
		console.log(response.data);

		setToken(response.data.payload);
		props.history.push('/bubbles');
	};

	return (
		<form onSubmit={submitHandler} className="loginForm" autoComplete="off">
      <h1>Welcome to the Bubble App!</h1>
			<TextField
				name="username"
				value={formState.username}
				onChange={changeHandler}
				label="Username"
				variant="standard"
			/>
			<TextField
				name="password"
				value={formState.password}
				onChange={changeHandler}
				label="Password"
				type="password"
				variant="standard"
			/>
			<Button type="submit" variant="contained" color="primary">
				Login
			</Button>
		</form>
	);
}

