/** @format */

import "./Contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function ContactPage() {
	return (
		<>
			<Header
				title='Get In Touch'
				image={HeaderImage}
				children='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis recusandae accusantium et labore quos laudantium exercitationem at neque doloremque'
			/>
			<section className='contact'>
				<div className='container contact__container'>
					<div className='contact__wrapper'>
						<a
							href='mailto:henr9926@gmail.com'
							target='_blank'
							rel='noreferrer noopener'>
							<MdEmail />
						</a>

						<a href='#' target='_blank' rel='noreferrer noopener'>
							<BsMessenger />
						</a>

						<a
							href='https://m.me/+2348180157032'
							target='_blank'
							rel='noreferrer noopener'>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
export default ContactPage;
