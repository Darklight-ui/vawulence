/** @format */
import { useState } from "react";
import Sectionhead from "./Sectionhead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import React from "react";

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const { name, quote, job, avatar } = testimonials[index];

	function nexttestimonialHandler() {
		setIndex((prevState) => prevState + 1);
		if (index >= testimonials.length - 1) {
			setIndex(0);
		}
	}
	const prevTestimonialHandler = () => {
		setIndex((prevState) => prevState - 1);
		if (index <= 0) {
			setIndex(testimonials.length - 1);
		}
	};
	return (
		<section className='testimonials'>
			<div className='container testimonials__container'>
				<Sectionhead
					icon={<ImQuotesLeft />}
					title='Testimonials'
					className='testimonial__head'
				/>
				<Card className='testimonial'>
					<div className='testimonial__avatar'>
						<img src={avatar} alt={name} />
					</div>
					<p className='testimonial__quote'>{`"${quote}"`}</p>
					<h5>{name}</h5>
					<small className='testimonial__title'>{job}</small>
				</Card>
				<div className='testimonial__btn-container'>
					<button className='testimonial__btn'>
						<IoIosArrowDropleftCircle onClick={prevTestimonialHandler} />
					</button>
					<button className='testimonial__btn'>
						<IoIosArrowDroprightCircle onClick={nexttestimonialHandler} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
