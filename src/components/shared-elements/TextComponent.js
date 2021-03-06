import React from 'react'

const TextComponent = ({ text, title, link, linkText }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{text}</p>
			<a href={`${link}`}>{linkText ? `> ${linkText}` : ''}</a>
		</div>
	)
}

export default TextComponent
