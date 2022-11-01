/** @format */

import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./Gallery.css";

function GallaryPage() {
	const galleryLength = 15;
	const images = [];
	let i;
	for (i = 1; i <= galleryLength; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}
	console.log(images);
	return (
		<>
			<Header
				title='Our Gallery'
				image={HeaderImage}
				children='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis recusandae accusantium et labore quos laudantium exercitationem at neque doloremque'
			/>
			<section className='gallery'>
				<div className='container gallery__container'>
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`galler img${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default GallaryPage;
