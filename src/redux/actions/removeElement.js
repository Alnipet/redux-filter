import {REMOVE_ELEMENT} from './actions'

export const removeElement = (id) => {
	return {
		type: REMOVE_ELEMENT,
		payload: id,
	}
}
