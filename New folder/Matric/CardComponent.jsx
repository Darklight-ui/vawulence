/** @format */

import React from "react";

function CardComponent(data) {
	// console.log(data.data.);
	return (
		<>
			<div className='row--card'>
				<div className='card--img'>
					<div className='box re-box'>{data.data.data.title}</div>
				</div>
				<div className='card--title'></div>
				<div className='card--body'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet iste
					fugiat commodi, quo architecto nemo!
				</div>
			</div>
		</>
	);
}

export default CardComponent;
