import {ADD_ELEMENT} from './actions'

export const addElement = (element) => {
	return {
		type: ADD_ELEMENT,
		payload: element,
	}
}
