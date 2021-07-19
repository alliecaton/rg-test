import React from 'react'
import PurpleButton from './shared-elements/PurpleButton'
import image from './../assets/welcome.svg'

const Header = () => {
	return (
		<div className='hero-content-parent fade-in-up'>
			{/* <h1>Welcome to</h1>
			 */}
			<img className='welcome-svg' src={image} alt='welcome to' />
			<h1>Rooster Grin</h1>
			<PurpleButton />
		</div>
	)
}

export default Header
