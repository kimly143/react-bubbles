import { createContext } from 'react';

//create a react context which is just a way to store data
// it comes with a .provider which we use to provide a value for the context
const TokenContext = createContext(null)

export default TokenContext;

