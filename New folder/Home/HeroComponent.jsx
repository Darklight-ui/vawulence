/** @format */

import React from "react";

function HeroComponent() {
	return (
		<div className='heroComponent'>
			<div className='landing--intro'>
				<h3>
					The #1 Platform where the past and present Student of{" "}
					<strong> The Federal Polytechnic Nasarawa</strong>,Computer Science
					can share thier FPN experience.
				</h3>
			</div>
			<div className='landing--image'>
				<img
					src={require("../images/7f1d9134-group-29198_10iy0h4000000000000028.png")}
					alt='landing'
				/>
			</div>
		</div>
	);
}

export default HeroComponent;
