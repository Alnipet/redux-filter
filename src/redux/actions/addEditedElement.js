import {ADD_EDITED_ELEMENT} from './actions'

export const addEditedElement = (element) => {
	return {
		type: ADD_EDITED_ELEMENT,
		payload: element,
	}
}
