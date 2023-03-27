import { useState } from 'react'

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const reset = (newFormState = initialState) => {
		setValues(newFormState)
	}

	const handleInputChange = e => {
		const { value, name } = e.target

		setValues(prevValues => ({
			...prevValues,
			[name]: value,
		}))
	}
	return [values, handleInputChange, reset]
}
