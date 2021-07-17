import React from 'react'
import TextComponent from '../components/shared-elements/TextComponent'
import ImageComponent from '../components/ImageComponent'

const FirstBody = () => {
	return (
		<div className='first-body two-column-grid'>
			<div className='component-text'>
				<TextComponent
					title={'LOREM IPSUM'}
					text={
						'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
					}
					link={'https://google.com'}
					linkText={'Lorem Ipsum'}
				/>
			</div>
			<ImageComponent />
		</div>
	)
}

export default FirstBody
