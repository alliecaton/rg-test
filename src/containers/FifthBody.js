import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from '../components/Slide'
import sanityClient from '../client.js'
import ClipLoader from 'react-spinners/ClipLoader'

const FifthBody = () => {
	const [allReviews, setReviews] = useState(null)

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "review"]{
				reviewer, 
				slug,
				publishedAt, 
				body,
			  }`
			)
			.then(data => {
				setReviews(data)
			})
			.catch(console.error)
	}, [])

	const formatDate = string => {
		const array = string.split('T')[0].replace(/-/g, '/').split('/')
		return [array[1], array[2], array[0]].join('/')
	}

	const displayReviews = () => {
		if (allReviews) {
			return allReviews.map(review => (
				<div>
					<Slide
						name={review.reviewer}
						date={formatDate(review.publishedAt)}
						text={review.body[0].children[0].text}
					/>
				</div>
			))
		} else {
			return (
				<div>
					<ClipLoader />
				</div>
			)
		}
	}

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

	console.log(allReviews)

	return (
		<div className='fifth-body two-column-grid'>
			<div className='slider-title'>
				<h2>LOREM IPSUM DOLOR SIT AMET</h2>
				<h2 className='stars'>★★★★★</h2>
			</div>
			<div className='slider-container'>
				<Slider {...settings}>{displayReviews()}</Slider>
			</div>
		</div>
	)
}

export default FifthBody
