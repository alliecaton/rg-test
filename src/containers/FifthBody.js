import React from 'react'
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel'

const FifthBody = () => {
	return (
		<div className='fifth-body two-column-grid'>
			<div>
				<h2>LOREM IPSUM DOLOR SIT AMET</h2>
				<h2 className='stars'>★★★★★</h2>
			</div>
			<div>
				<CarouselProvider>
					<Slider>
						<Slide>first slide</Slide>
						<Slide>Second slide</Slide>
						<Slide>Third Slide</Slide>
					</Slider>
				</CarouselProvider>
				{/* carousel */}
				{/* map in carousel content dynamically */}
				{/* /carousel */}
			</div>
		</div>
	)
}

export default FifthBody
