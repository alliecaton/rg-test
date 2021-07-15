import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import FirstBody from './containers/FirstBody'
import SecondBody from './containers/SecondBody'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<HeaderContainer />
			<div className='flex'>
				<FirstBody />
				<SecondBody />
				<Footer />
			</div>
		</div>
	)
}

export default App
