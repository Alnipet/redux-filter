import {CLEAR_EDITING_ELEMENT} from './actions'

export const clearEditingElement = (element) => {
	return {
		type: CLEAR_EDITING_ELEMENT,
		payload: element,
	}
}
