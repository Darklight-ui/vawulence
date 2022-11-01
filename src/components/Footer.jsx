/** @format */

import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className='container footer__container'>
				<article>
					<Link to='/' className='logo'>
						<img src={Logo} alt='Footer Logo' />
					</Link>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						magni ipsum rem, repudiandae quos minus adipisci illum id pariatur
						voluptate!
					</p>
					<div className='footer__socials'>
						<a href='#' target='_blank' rel='noreferrer noopener'>
							<FaLinkedin />
						</a>
						<a href='#' target='_blank' rel='noreferrer noopener'>
							<FaFacebook />
						</a>
						<a href='#' target='_blank' rel='noreferrer noopener'>
							<AiFillInstagram />
						</a>
						<a href='#' target='_blank' rel='noreferrer noopener'>
							<AiOutlineTwitter />
						</a>
					</div>
				</article>
				<article>
					<h4>Permal links</h4>
					<Link to='/about'> About</Link>
					<Link to='/gallery'> Gallery</Link>
					<Link to='/plans'> Plans</Link>
					<Link to='/trainers'> Trainers</Link>
					<Link to='/contact'> Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to='/s'> Blog</Link>
					<Link to='/s'> Events</Link>
					<Link to='/s'> Case Study</Link>
					<Link to='/s'> Communities</Link>
					<Link to='/s'> FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to='/s'> Support</Link>
					<Link to='/contact'> Contact Us</Link>
				</article>
			</div>
			<div className='footer__copyright'>
				<small>2022 Emmanuel &copy; All Right Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
