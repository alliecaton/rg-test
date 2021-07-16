import React from 'react'
import instagram from './../assets/instagram.svg'
import facebook from './../assets/facebook.svg'

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<p className='footer-text'>Follow Us:</p>
			<img className='social-icon' src={instagram} alt='instagram logo' />
			<img className='social-icon' src={facebook} alt='facebook logo' />
		</div>
	)
}

export default Footer
