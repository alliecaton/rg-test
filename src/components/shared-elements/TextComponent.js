import React from 'react'

const TextComponent = props => {
	return (
		<div className='component-text'>
			<h2>Lorem Ipsum</h2>
			<p>{props.text}</p>
			<a href='https://www.google.com'> &gt; Magnam aliquam</a>
		</div>
	)
}

export default TextComponent
