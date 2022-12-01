import './App.css'
import {Form} from './components/Form'
import {List} from './components/List'
import {SearchInput} from './components/SearchInput'

function App() {
	return (
		<div className='App'>
			<SearchInput />
			<Form />
			<List />
		</div>
	)
}

export default App
