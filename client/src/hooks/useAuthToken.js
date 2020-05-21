import { useContext } from 'react';
import TokenContext from '../context/TokenContext';

export default function useAuthToken() {
	return useContext(TokenContext);
}
