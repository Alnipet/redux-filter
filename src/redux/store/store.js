import {combineReducers, legacy_createStore, compose} from 'redux'
import {elementReducer} from '../reducers/elementReducer'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export function configureStore() {
	return legacy_createStore(
		combineReducers({
			elements: elementReducer,
		}),
		undefined,
		compose(ReactReduxDevTools)
	)
}
