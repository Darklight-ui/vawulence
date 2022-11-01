/** @format */

import React from "react";
import CardComponent from "./CardComponent";

function MatricComponent(data) {
	// console.log(data.id);
	return (
		<div className='matric--wall'>
			<div className='matric--wall'>
				<CardComponent data={data} />
			</div>
		</div>
	);
}

export default MatricComponent;
