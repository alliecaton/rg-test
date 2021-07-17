import React from 'react'
import PurpleButton from './shared-elements/PurpleButton'

const Header = () => {
	return (
		<div className='hero-content-parent animate__animated animate__fadeInUp'>
			{/* <img className='welcome' src={image} alt='Welcome To' /> */}
			<h1>Welcome to</h1>
			<h1>Rooster Grin</h1>
			<PurpleButton />
		</div>
	)
}

export default Header
