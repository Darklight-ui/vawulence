/** @format */

import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./About.css";

function AboutPage() {
	return (
		<>
			<Header
				title='About Us'
				image={HeaderImage}
				children='		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis recusandae accusantium et labore quos laudantium exercitationem at neque doloremque.'
			/>
			<section className='about__story'>
				<div className='container about__story-container'>
					<div className='about__section-image'>
						<img src={StoryImage} alt='about image' />
					</div>
					<div className='about__section-content'>
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Adipisci, vel vero recusandae tempora tempore commodi ratione enim
							distinctio sit at quo pariatur sapiente consequuntur nihil est
							itaque iste dignissimos! Molestias!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus ipsam amet placeat voluptatibus ea reprehenderit
							suscipit ipsum laboriosam fuga earum!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
							amet.
						</p>
					</div>
				</div>
			</section>

			<section className='about__vision'>
				<div className='container about__vision-container'>
					<div className='about__section-content'>
						<h1>Our Vision </h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Adipisci, vel vero recusandae tempora tempore commodi ratione enim
							distinctio sit at quo pariatur sapiente consequuntur nihil est
							itaque iste dignissimos! Molestias!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus ipsam amet placeat voluptatibus ea reprehenderit
							suscipit ipsum laboriosam fuga earum!
						</p>
					</div>
					<div className='about__section-image'>
						<img src={VisionImage} alt='about image' />
					</div>
				</div>
			</section>

			<section className='about__mission'>
				<div className='container about__mission-container'>
					<div className='about__section-image'>
						<img src={MissionImage} alt='about image' />
					</div>
					<div className='about__section-content'>
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Adipisci, vel vero recusandae tempora tempore commodi ratione enim
							distinctio sit at quo pariatur sapiente consequuntur nihil est
							itaque iste dignissimos! Molestias!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus ipsam amet placeat voluptatibus ea reprehenderit
							suscipit ipsum laboriosam fuga earum!
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutPage;
