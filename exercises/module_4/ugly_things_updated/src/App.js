import Header from './components/Header'
import Form from './components/Form'
import UglyThingsList from './components/UglyThingsList'
import './App.css'

export default function App() {
	return (
		<div className='container'>
			<div className='content'>
				<Header title='Ugly Things' appDescription='V school Assignment' />
				<Form />
				<UglyThingsList />
			</div>
			<footer>Created by Alex George</footer>
		</div>
	)
}
