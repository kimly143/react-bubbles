import axios from 'axios';

import useAuthToken from './useAuthToken';

export default function useAxiosWithAuth() {
	const [ token ] = useAuthToken();

	const instance = axios.create({
		timeout: 1000,
		headers: { Authorization: token }
    });
    
    return instance;
}
