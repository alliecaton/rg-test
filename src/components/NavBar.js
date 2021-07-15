import React from 'react'
import image from '../assets/logo-white.svg'

const NavBar = () => {
	return (
		<div className='navbar'>
			<img className='navbar-logo' src={image} alt='RoosterGrin logo' />
		</div>
	)
}

export default NavBar
