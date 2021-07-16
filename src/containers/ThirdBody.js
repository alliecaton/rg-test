import React from 'react'
import TextComponent from '../components/shared-elements/TextComponent'
import Icon from '../components/shared-elements/Icon'
import clipboard from '../assets/home-expertise.svg'
import mask from '../assets/home-hygiene.svg'
import goggles from '../assets/home-lab.svg'
import calendar from '../assets/home-retention.svg'

const ThirdBody = () => {
	return (
		<div className='third-body two-column-grid'>
			<TextComponent
				text={
					'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
				}
			/>
			<div className='icon-grids'>
				<Icon image={clipboard} title={'LOREM'} />
				<Icon image={mask} title={'LOREM IPSUM'} />
				<Icon image={goggles} title={'LOREM IPSUM'} />
				<Icon image={calendar} title={'LOREM'} />
			</div>
		</div>
	)
}

export default ThirdBody
