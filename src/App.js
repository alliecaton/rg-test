import './App.css'
import React from 'react'
import HeaderContainer from './containers/HeaderContainer'
import FirstBody from './containers/FirstBody'
import SecondBody from './containers/SecondBody'
import ThirdBody from './containers/ThirdBody'
import FourthBody from './containers/FourthBody'
import FifthBody from './containers/FifthBody'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App'>
			<HeaderContainer />
			<div className='body-wrapper'>
				<FirstBody />
				<SecondBody />
				<ThirdBody />
				<FourthBody />
				<FifthBody />
			</div>
			<Footer />
		</div>
	)
}

export default App
