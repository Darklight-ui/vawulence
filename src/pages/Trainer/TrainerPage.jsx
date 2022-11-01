/** @format */
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Trainer.css";
import Trainer from "../../components/Trainer";

function TrainerPage() {
	return (
		<>
			<Header
				title='Our Trainers'
				image={HeaderImage}
				children='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis recusandae accusantium et '
			/>
			<div className='container trainers__container'>
				{trainers.map(({ id, image, name, job, socials }) => {
					return (
						<Trainer
							key={id}
							image={image}
							name={name}
							job={job}
							socials={[
								{ icon: <BsInstagram />, link: socials[0] },
								{ icon: <AiOutlineTwitter />, link: socials[1] },
								{ icon: <FaFacebookF />, link: socials[2] },
								{ icon: <FaLinkedinIn />, link: socials[3] },
							]}
						/>
					);
				})}
			</div>
		</>
	);
}

export default TrainerPage;
