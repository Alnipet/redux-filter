import {FILTER_ELEMENTS} from './actions'

export const filterElement = (element) => {
	return {
		type: FILTER_ELEMENTS,
		payload: element,
	}
}
