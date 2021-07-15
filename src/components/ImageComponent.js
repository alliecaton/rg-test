import React from 'react'
import image from './../assets/img-1.jpg'

const ImageComponent = () => {
	return (
		<div>
			<img className='component-image' src={image} alt='scenic' />
		</div>
	)
}

export default ImageComponent
