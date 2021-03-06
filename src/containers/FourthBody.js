import React from 'react'
import OrangeButton from '../components/shared-elements/OrangeButton'
import TextComponent from '../components/shared-elements/TextComponent'

const FourthBody = () => {
	return (
		<>
			<div className='fourth-body'>
				<div className='button-wrapper'>
					<TextComponent
						title={'LOREM IPSUM'}
						text={
							'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
						}
					/>
					<OrangeButton />
				</div>
			</div>
		</>
	)
}

export default FourthBody
