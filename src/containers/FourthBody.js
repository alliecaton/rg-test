import React from 'react'
import OrangeButton from '../components/shared-elements/OrangeButton'
import image from '../assets/banner-2.jpg'
import TextComponent from '../components/shared-elements/TextComponent'

const FourthBody = () => {
	return (
		<div className='fourth-body'>
			<div className='button-wrapper'></div>
			<img className='image-behind' src={image} alt='child lauging' />
			<div className='button-wrapper'>
				<TextComponent
					text={
						'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
					}
				/>
				<OrangeButton />
			</div>
		</div>
	)
}

export default FourthBody
