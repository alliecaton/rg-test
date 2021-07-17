import React from 'react'

const Icon = ({ image, title }) => {
	return (
		<div className='icon-wrapper'>
			<div className='small-icon pulse'>
				<img src={image} alt='icon' />
			</div>
			<h4 className='icon-title-wrapper'>{title}</h4>
		</div>
	)
}

export default Icon
