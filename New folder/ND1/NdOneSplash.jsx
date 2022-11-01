/** @format */

import React from "react";
import RowImagesComponents from "./RowImagesComponents";

function NdOneSplash() {
	return (
		<>
			<div className='wall'>
				<div className='row--img'>
					<div className='box'>1080 x 1080</div>
				</div>
				<div className='row--landing'>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						suscipit repellendus inventore non quibusdam expedita officiis
						dolores pariatur. Provident recusandae eaque laboriosam debitis
						obcaecati earum ex, fugiat dicta illum saepe neque necessitatibus
						eos accusamus ad numquam architecto similique iusto cupiditate.
						Consectetur, veritatis. Cum placeat ut officia iste, aliquid eius
						commodi.
					</h3>
				</div>
			</div>
			<section>
				<RowImagesComponents />
			</section>
		</>
	);
}

export default NdOneSplash;
