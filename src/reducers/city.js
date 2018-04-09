/* REDUCERS */
import { SET_CITY } from '../actions'

export const city = (state, action) => {
	switch(action.type) {
		case SET_CITY:
			// console.log('state::: ', state)
			// console.log('action::: ', action)
			// Generamos un nuevo objeto, que es un nuevo estado
			return { ...state, city: action.payload }
		default:
			return state
	}
}
