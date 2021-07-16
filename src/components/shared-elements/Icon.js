import React from 'react'

const Icon = ({ image, title }) => {
	return (
		<div className='icon-wrapper'>
			<img className='small-icon' src={image} alt='icon' />
			<h4 className='icon-title-wrapper'>{title}</h4>
		</div>
	)
}

export default Icon
