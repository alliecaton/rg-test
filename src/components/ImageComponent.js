import React from 'react'
import image from './../assets/img-1.jpg'

const ImageComponent = () => {
	return (
		<>
			<img className='component-image' src={image} alt='scenic' />
		</>
	)
}

export default ImageComponent
