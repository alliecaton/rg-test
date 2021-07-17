import React from 'react'
import instagram from './../assets/instagram.svg'
import facebook from './../assets/facebook.svg'

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<p className='footer-text'>Follow Us:</p>
			<div className='social-icons'>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<img className='social-icon' src={instagram} alt='instagram logo' />
				</a>
				<a
					href='https://www.facebook.com/RoosterGrin/'
					target='_blank'
					rel='noreferrer'>
					<img className='social-icon' src={facebook} alt='facebook logo' />
				</a>
			</div>
		</div>
	)
}

export default Footer
