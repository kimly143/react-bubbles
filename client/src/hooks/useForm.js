import { useState } from 'react';

export default function useForm(initialFormState) {
	const [ formState, setFormState ] = useState(initialFormState);

	const resetForm = () => {
		setFormState(initialFormState);
	};

	const changeHandler = (event) => {
		setFormState({
			...formState,
			//key inside [ ] as a dynamic key, so we can execute code inside of it
			[event.target.name]: event.target.value
		});
	};

	return [ formState, changeHandler, resetForm ];
}
