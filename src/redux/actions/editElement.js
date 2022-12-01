import {EDIT_ELEMENT} from './actions'

export const editElement = (element) => {
	return {
		type: EDIT_ELEMENT,
		payload: element,
	}
}
