import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from '../components/Slide'
import sanityClient from '../client.js'

const FifthBody = () => {
	const [allReviews, setReviews] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "review"]{
				reviewer, 
				slug,
				publishedAt, 
			  }`
			)
			.then(data => setReviews(data))
			.catch(console.error)
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		className: 'carousel',
	}

	console.log('fetched from sanity', allReviews)

	return (
		<div className='fifth-body two-column-grid'>
			<div className='slider-title'>
				<h2>LOREM IPSUM DOLOR SIT AMET</h2>
				<h2 className='stars'>★★★★★</h2>
			</div>
			<div className='slider-container'>
				<Slider {...settings}>
					<div>
						<Slide
							name='Allie'
							date='1/2/3'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
						/>
					</div>
					<div>
						<Slide
							name='allie 2'
							date='1/2/3'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
						/>
					</div>
					<div>
						<Slide
							name='dallas'
							date='1/2/3'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
						/>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default FifthBody
