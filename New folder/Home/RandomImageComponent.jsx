/** @format */

import React from "react";

function RandomImageComponent(data) {
	// console.log(data);
	return (
		<div className='randomImage'>
			<h1>Sneak Peak 😉😉😉😉</h1>
			<img src={require(`../images/${data.data.data.randImage}`)} alt='rand' />
			<button onClick={data.data.handleClick} className='btn'>
				Next
			</button>
		</div>
	);
}

export default RandomImageComponent;
