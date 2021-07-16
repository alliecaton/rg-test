import React from 'react'

const Slide = ({ name, date, text }) => {
	return (
		<div>
			<div>
				<h4 className='slide-title'>
					{' '}
					{name} {date}
				</h4>
			</div>
			<div className='slide-body'>{text}</div>
		</div>
	)
}

export default Slide
